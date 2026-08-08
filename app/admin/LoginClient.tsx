'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function LoginClient() {
  const [id, setId] = useState('');
  const [key, setKey] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, key }),
      });

      if (res.ok) {
        toast.success('Access Granted');
        window.location.reload(); 
      } else {
        toast.error('Invalid Credentials');
      }
    } catch (error) {
      toast.error('Login Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-3xl opacity-50" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md p-8 md:p-12 mx-4 bg-surface/40 backdrop-blur-xl border border-line/50 rounded-3xl shadow-2xl"
      >
        <div className="flex flex-col items-center mb-8">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-brand-primary/20"
          >
            <ShieldCheck className="w-8 h-8 text-brand-primary" />
          </motion.div>
          <h1 className="text-3xl font-display font-semibold tracking-tight text-paper mb-2">Welcome Back</h1>
          <p className="text-fog text-center text-sm">Secure access to the Emonetiser dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-fog uppercase tracking-wider">Admin ID</label>
            <Input 
              type="text" 
              required 
              value={id} 
              onChange={e => setId(e.target.value)} 
              placeholder="Enter your ID"
              className="h-12 bg-background/50 border-line focus:ring-brand-primary/30 transition-all rounded-xl"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-fog uppercase tracking-wider">Access Key</label>
            <Input 
              type="password" 
              required 
              value={key} 
              onChange={e => setKey(e.target.value)} 
              placeholder="••••••••"
              className="h-12 bg-background/50 border-line focus:ring-brand-primary/30 transition-all rounded-xl"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12 mt-4 bg-foreground text-background hover:bg-foreground/90 rounded-xl font-medium transition-all group" 
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <span className="flex items-center gap-2">
                Authenticate
                <motion.span
                  className="inline-block transition-transform group-hover:translate-x-1"
                >
                  →
                </motion.span>
              </span>
            )}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
