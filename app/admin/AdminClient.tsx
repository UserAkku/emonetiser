'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Seller } from '@/lib/db';
import { 
  LogOut, 
  UploadCloud, 
  Plus, 
  Search, 
  MoreHorizontal, 
  Edit2,
  Trash2,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Database, Globe, Tag } from 'lucide-react';

export default function AdminClient() {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [search, setSearch] = useState('');
  const [formData, setFormData] = useState<Seller>({ id: 0, seller_id: '', name: '', domain: '', seller_type: 'PUBLISHER' });
  const [isEditing, setIsEditing] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSellers();
  }, []);

  const fetchSellers = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/sellers');
      const data = await res.json();
      if (res.ok) setSellers(data.sellers);
    } catch (error) {
      toast.error('Failed to load sellers');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    window.location.reload();
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = isEditing ? 'PUT' : 'POST';
    
    const toastId = toast.loading(isEditing ? 'Updating seller...' : 'Adding seller...');
    try {
      const res = await fetch('/api/sellers', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success(isEditing ? 'Seller updated' : 'Seller added', { id: toastId });
        fetchSellers();
        setFormData({ id: 0, seller_id: '', name: '', domain: '', seller_type: 'PUBLISHER' });
        setIsEditing(false);
      } else {
        const data = await res.json();
        toast.error(data.error || 'Failed to save', { id: toastId });
      }
    } catch (error) {
      toast.error('An error occurred', { id: toastId });
    }
  };

  const handleDelete = async (id: number | undefined) => {
    if (id === undefined) return;
    try {
      const res = await fetch(`/api/sellers?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        toast.success('Seller deleted successfully');
        fetchSellers();
      } else {
        const data = await res.json();
        toast.error(data.error || 'Failed to delete');
      }
    } catch (error) {
      toast.error('Failed to delete seller');
    }
  };

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error('Please select a CSV file first');
      return;
    }

    if (!file.name.toLowerCase().endsWith('.csv') || file.type !== 'text/csv') {
      if (!file.name.toLowerCase().endsWith('.csv')) {
        toast.error('Only .csv files are allowed!');
        setFile(null);
        return;
      }
    }

    setIsUploading(true);
    const toastId = toast.loading('1/3 Requesting secure signature...');
    
    try {
      // Step 1: Get Cloudinary Signature
      const signRes = await fetch('/api/admin/cloudinary-sign');
      if (!signRes.ok) throw new Error('Failed to get signature');
      const { signature, timestamp, apiKey, cloudName } = await signRes.json();

      toast.loading('2/3 Uploading securely to Cloudinary...', { id: toastId });

      // Step 2: Upload directly to Cloudinary from browser
      const cloudinaryFormData = new FormData();
      cloudinaryFormData.append('file', file);
      cloudinaryFormData.append('api_key', apiKey);
      cloudinaryFormData.append('timestamp', timestamp);
      cloudinaryFormData.append('signature', signature);

      const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`, {
        method: 'POST',
        body: cloudinaryFormData,
      });

      if (!uploadRes.ok) throw new Error('Cloudinary upload failed');
      const uploadData = await uploadRes.json();

      toast.loading('3/3 Processing database records...', { id: toastId });

      // Step 3: Send Cloudinary URL to our backend for processing
      const res = await fetch('/api/sellers/bulk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secure_url: uploadData.secure_url,
          public_id: uploadData.public_id
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message, { id: toastId });
        fetchSellers();
        setFile(null);
      } else {
        toast.error(data.error || 'Failed to process', { id: toastId });
      }
    } catch (error: any) {
      toast.error(error.message || 'Upload process failed', { id: toastId });
    } finally {
      setIsUploading(false);
    }
  };

  const filteredSellers = sellers.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.seller_id.includes(search) ||
    s.domain.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-primary/20">
      
      {/* Top Navigation specific for Admin */}
      <header className="sticky top-0 z-50 w-full border-b border-line/40 bg-surface/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center font-bold tracking-tighter">
              E
            </div>
            <span className="font-display font-semibold text-lg tracking-tight">Admin Portal</span>
          </div>
          
          <Button variant="ghost" size="sm" onClick={handleLogout} className="text-fog hover:text-foreground">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Controls (4 cols) */}
          <div className="lg:col-span-4 flex flex-col h-[calc(100vh-140px)] gap-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface border border-line/40 rounded-2xl p-6 shadow-sm shrink-0"
            >
              <h2 className="text-lg font-semibold mb-4">{isEditing ? 'Edit Seller' : 'Add Seller'}</h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-fog">Seller ID</label>
                  <div className="relative">
                    <Database className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fog" />
                    <Input 
                      required 
                      value={formData.seller_id} 
                      onChange={e => setFormData({...formData, seller_id: e.target.value})} 
                      disabled={isEditing}
                      placeholder="e.g. 20241127"
                      className="pl-9 bg-background"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-fog">Name</label>
                  <Input 
                    required 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                    placeholder="e.g. Acme Media"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-fog">Domain</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fog" />
                    <Input 
                      required 
                      value={formData.domain} 
                      onChange={e => setFormData({...formData, domain: e.target.value})} 
                      placeholder="acme.com"
                      className="pl-9 bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-fog">Type</label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fog" />
                    <Input 
                      required 
                      value={formData.seller_type} 
                      onChange={e => setFormData({...formData, seller_type: e.target.value.toUpperCase()})} 
                      placeholder="PUBLISHER"
                      className="pl-9 bg-background uppercase"
                    />
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <Button type="submit" className="flex-1 bg-brand-primary text-primary-foreground hover:bg-brand-primary/90">
                    {isEditing ? <Edit2 className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
                    {isEditing ? 'Save Changes' : 'Create Seller'}
                  </Button>
                  {isEditing && (
                    <Button type="button" variant="outline" onClick={() => {
                      setIsEditing(false);
                      setFormData({ id: 0, seller_id: '', name: '', domain: '', seller_type: 'PUBLISHER' });
                    }}>
                      Cancel
                    </Button>
                  )}
                </div>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-surface border border-line/40 rounded-2xl p-6 shadow-sm flex-1 flex flex-col"
            >
              <h2 className="text-lg font-semibold mb-2 shrink-0">Bulk Import</h2>
              <p className="text-sm text-fog mb-4 shrink-0">Upload a CSV to process thousands of records instantly.</p>
              
              <form onSubmit={handleFileUpload} className="flex-1 flex flex-col gap-4">
                <div className="relative group flex-1 flex">
                  <input 
                    type="file" 
                    accept=".csv, text/csv" 
                    id="csv-upload"
                    className="hidden"
                    onChange={e => {
                      const selected = e.target.files?.[0] || null;
                      if (selected && !selected.name.toLowerCase().endsWith('.csv')) {
                        toast.error('Only CSV files are allowed');
                        e.target.value = '';
                        setFile(null);
                      } else {
                        setFile(selected);
                      }
                    }}
                  />
                  <label 
                    htmlFor="csv-upload"
                    className={`flex flex-col items-center justify-center w-full flex-1 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${file ? 'border-brand-primary bg-brand-primary/5' : 'border-line/60 bg-background hover:bg-surface hover:border-brand-primary/50'}`}
                  >
                    <UploadCloud className={`w-8 h-8 mb-2 ${file ? 'text-brand-primary' : 'text-fog'}`} />
                    <span className="text-sm font-medium text-foreground">
                      {file ? file.name : 'Click to browse CSV'}
                    </span>
                    {!file && <span className="text-xs text-fog mt-1 text-center px-4">Direct Secure Upload (No size limit)</span>}
                  </label>
                </div>

                <Button 
                  type="submit" 
                  variant="secondary" 
                  className="w-full shrink-0" 
                  disabled={!file || isUploading}
                >
                  {isUploading ? 'Processing...' : 'Upload & Sync Database'}
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Right Column: Data Table (8 cols) */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-surface border border-line/40 rounded-2xl shadow-sm overflow-hidden flex flex-col h-[calc(100vh-140px)]"
            >
              {/* Table Header / Toolbar */}
              <div className="p-4 border-b border-line/40 flex items-center justify-between bg-surface/50">
                <div className="flex items-center gap-3">
                  <h2 className="font-semibold text-lg">Sellers Registry</h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-medium">
                    {sellers.length} total
                  </span>
                </div>
                
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fog" />
                  <Input 
                    placeholder="Search registry..." 
                    className="pl-9 h-9 bg-background text-sm rounded-lg"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              {/* Table Content */}
              <div className="flex-1 overflow-auto">
                {isLoading ? (
                  <div className="flex items-center justify-center h-full text-fog">
                    Loading registry...
                  </div>
                ) : filteredSellers.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-fog p-8 text-center">
                    <Database className="w-12 h-12 mb-4 opacity-20" />
                    <p className="text-foreground font-medium mb-1">No sellers found</p>
                    <p className="text-sm">Add your first seller using the form or upload a CSV.</p>
                  </div>
                ) : (
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-fog uppercase bg-background/50 sticky top-0 z-10">
                      <tr>
                        <th className="px-6 py-4 font-medium">ID</th>
                        <th className="px-6 py-4 font-medium">Name & Domain</th>
                        <th className="px-6 py-4 font-medium">Type</th>
                        <th className="px-6 py-4 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line/30">
                      {filteredSellers.map((s) => (
                        <tr key={s.seller_id} className="hover:bg-background/50 transition-colors group">
                          <td className="px-6 py-4 font-mono text-xs">{s.seller_id}</td>
                          <td className="px-6 py-4">
                            <div className="font-medium text-foreground">{s.name}</div>
                            <div className="text-fog text-xs mt-0.5 flex items-center gap-1">
                              {s.domain}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide ${
                              s.seller_type.toUpperCase() === 'PUBLISHER' 
                                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                                : s.seller_type.toUpperCase() === 'INTERMEDIARY'
                                ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                                : 'bg-gray-500/10 text-gray-600 dark:text-gray-400'
                            }`}>
                              {s.seller_type}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => {
                                  setFormData(s);
                                  setIsEditing(true);
                                }} 
                                className="h-8 px-2 text-fog hover:text-foreground"
                              >
                                <Edit2 className="w-4 h-4 mr-1.5" /> Edit
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleDelete(s.id)} 
                                className="h-8 px-2 text-destructive hover:bg-destructive/10"
                              >
                                <Trash2 className="w-4 h-4 mr-1.5" /> Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </motion.div>
          </div>

        </div>
      </main>
    </div>
  );
}
