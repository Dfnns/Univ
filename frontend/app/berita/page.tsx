async function getBerita() {
  const res = await fetch('http://127.0.0.1:8000/api/berita', {
    cache: 'no-store', // biar selalu ambil data terbaru, nggak di-cache
  });
  const data = await res.json();
  return data;
}

export default async function BeritaPage() {
  const berita = await getBerita();
  const beritaUtama = berita[0]; // berita paling baru
  const beritaLain = berita.slice(1); // sisanya

  return (
    <section style={{ padding: '40px 20px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: 'bold' }}>
        Kabar Bisnis Digital
      </h2>

      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        {/* Card besar - berita utama */}
        {beritaUtama && (
          <div style={{ flex: 1, position: 'relative' }}>
            {beritaUtama.gambar && (
              <img
                src={`http://127.0.0.1:8000/storage/${beritaUtama.gambar}`}
                alt={beritaUtama.judul}
                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }}
              />
            )}
            <div style={{ position: 'absolute', bottom: 0, background: 'rgba(0,0,50,0.7)', color: 'white', padding: '15px', width: '100%' }}>
              <p>{beritaUtama.judul}</p>
            </div>
          </div>
        )}

        {/* List kecil - berita lainnya */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {beritaLain.map((item: any) => (
            <div key={item.id} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              {item.gambar && (
                <img
                  src={`http://127.0.0.1:8000/storage/${item.gambar}`}
                  alt={item.judul}
                  style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }}
                />
              )}
              <div>
                <p style={{ fontSize: '12px', color: 'gray' }}>{item.tanggal}</p>
                <p style={{ fontWeight: 'bold', fontSize: '14px' }}>{item.judul}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}