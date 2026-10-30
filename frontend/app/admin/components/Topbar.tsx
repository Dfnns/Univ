export default function Topbar() {
  return (
    <header className="flex justify-end items-center px-10 py-5 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-200" />
        <span className="text-sm font-medium text-gray-700">Admin</span>
      </div>
    </header>
  );
}