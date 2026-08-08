import { cookies } from 'next/headers';
import AdminClient from './AdminClient';
import LoginClient from './LoginClient';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token');
  const isAuthenticated = token?.value === 'authenticated';

  if (!isAuthenticated) {
    return <LoginClient />;
  }

  return <AdminClient />;
}
