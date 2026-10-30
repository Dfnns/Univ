import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <main className="p-10">{children}</main>
      </div>
    </div>
  );
}