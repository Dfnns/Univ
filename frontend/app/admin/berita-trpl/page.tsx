'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Trash2, Pencil, Plus } from 'lucide-react';

export default function AdminBeritaTrplPage() {
  const [beritatrpl, setBeritaTrpl] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchBeritaTrpl() {
    setLoading(true);
    const res = await fetch('http://127.0.0.1:8000/api/berita-trpl');
    const data = await res.json();
    setBeritaTrpl(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchBeritaTrpl();
  }, []);

  async function handleDelete(id: number) {
    if (!confirm('Yakin mau hapus berita ini?')) return;
    const res = await fetch(`http://127.0.0.1:8000/api/berita-trpl/${id}`, { method: 'DELETE' });
    if (res.ok) fetchBeritaTrpl();
    else alert('Gagal menghapus berita');
  }

  if (loading) return <p>Memuat data...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-4xl font-bold text-blue-900">Berita TRPL</h1>
        <Link
          href="/admin/berita-trpl/tambah"
          className="flex items-center gap-2 bg-gray-400 hover:bg-gray-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition"
        >
          <Plus size={16} /> Tambah
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        {beritatrpl.map((item) => (
          <div
            key={item.id}
            className="flex bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 rounded-3xl overflow-hidden"
          >          
            <div className="w-64 h-40 flex-shrink-0 bg-black/20">
              {item.gambar && (
                <img
                  src={`http://127.0.0.1:8000/storage/${item.gambar}`}
                  alt={item.judul}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="flex-1 flex flex-col justify-between p-6 text-white">
              <div>
                <p className="text-sm leading-relaxed opacity-90">{item.judul}</p>
                <p className="text-sm mt-3 opacity-70">{item.tanggal}</p>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
                >
                  <Trash2 size={16} />
                </button>
                <Link
                  href={`/admin/berita-trpl/edit/${item.id}`}
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
                >
                  <Pencil size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}