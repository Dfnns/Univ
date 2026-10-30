'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TambahBeritaUtamaPage() {
  const router = useRouter();
  const [judul, setJudul] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [gambar, setGambar] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    color: '#111827',
    backgroundColor: '#ffffff',
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('judul', judul);
    formData.append('tanggal', tanggal);
    if (gambar) formData.append('gambar', gambar);

    const res = await fetch('http://127.0.0.1:8000/api/berita-utama', {
      method: 'POST',
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      alert('Berita berhasil ditambahkan!');
      router.push('/admin/berita-utama');
    } else {
      alert('Gagal menambahkan berita');
    }
  }

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#111827' }}>
        Tambah Berita Baru
      </h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ color: '#111827' }}>Judul</label>
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label style={{ color: '#111827' }}>Tanggal</label>
          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            required
            style={inputStyle}
          />
        </div>


        <div>
          <label style={{ color: '#111827' }}>Gambar</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setGambar(e.target.files?.[0] || null)}
            style={{ width: '100%', color: '#111827' }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{ padding: '10px', background: '#1e3a8a', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          {loading ? 'Menyimpan...' : 'Simpan Berita'}
        </button>
      </form>
    </div>
  );
}