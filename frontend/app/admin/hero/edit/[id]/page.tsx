'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function EditHeroSectionPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [judul, setJudul] = useState('');
  const [subJudul, setSubJudul] = useState('');
  const [gambarLama, setGambarLama] = useState('');
  const [gambarBaru, setGambarBaru] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    color: '#111827',
    backgroundColor: '#ffffff',
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://127.0.0.1:8000/api/hero-sections/${id}`);
      const data = await res.json();
      setJudul(data.judul || '');
      setSubJudul(data.sub_judul || '');
      setGambarLama(data.gambar || '');
      setFetching(false);
    }
    fetchData();
  }, [id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('judul', judul);
    formData.append('sub_judul', subJudul);
    if (gambarBaru) formData.append('gambar', gambarBaru);
    formData.append('_method', 'PUT'); // lihat penjelasan di bawah

    const res = await fetch(`http://127.0.0.1:8000/api/hero-sections/${id}`, {
      method: 'POST',
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      alert('Berhasil diupdate!');
      router.push('/admin/hero');
    } else {
      alert('Gagal update');
    }
  }

  if (fetching) return <p>Memuat data...</p>;

  return (
    <div style={{ maxWidth: '500px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#111827' }}>
        Edit Hero Section
      </h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ color: '#111827' }}>Judul</label>
          <input type="text" value={judul} onChange={(e) => setJudul(e.target.value)} required style={inputStyle} />
        </div>

        <div>
          <label style={{ color: '#111827' }}>Sub Judul</label>
          <input type="text" value={subJudul} onChange={(e) => setSubJudul(e.target.value)} style={inputStyle} />
        </div>


        {gambarLama && (
          <div>
            <label style={{ color: '#111827' }}>Gambar Saat Ini</label>
            <img
              src={`http://127.0.0.1:8000/storage/${gambarLama}`}
              alt="Gambar lama"
              style={{ width: '150px', borderRadius: '8px', marginTop: '4px' }}
            />
          </div>
        )}

        <div>
          <label style={{ color: '#111827' }}>Ganti Gambar (kosongkan jika tidak ganti)</label>
          <input type="file" accept="image/*" onChange={(e) => setGambarBaru(e.target.files?.[0] || null)} style={{ width: '100%' }} />
        </div>

        <button type="submit" disabled={loading} style={{ padding: '10px', background: '#1e3a8a', color: 'white', border: 'none', borderRadius: '4px' }}>
          {loading ? 'Menyimpan...' : 'Update'}
        </button>
      </form>
    </div>
  );
}