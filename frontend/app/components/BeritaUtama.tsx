import localFont from "next/font/local";

const apacih = localFont({
  src: "../font/frizOG.ttf",
  display: "swap",
});

async function getBeritaUtama() {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/berita-utama", {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      return [];
    }

    const data = await res.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Gagal mengambil berita utama:", error);
    return [];
  }
}

const formatTanggal = (tanggal: string) => {
  return new Date(tanggal).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default async function BeritaUtama() {
  const dataBerita = await getBeritaUtama();

  // Urut berdasarkan siapa yang ditambah duluan,
  // lalu ambil maksimal 4 berita.
  const urut = [...dataBerita]
    .sort((a, b) => a.id - b.id)
    .slice(0, 4);

  const beritaBesar = urut[0] || null;

  const slotKecil = Array.from(
    { length: 3 },
    (_, i) => urut[i + 1] || null
  );

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 py-12 md:py-16 mt-20">
      <div className="flex flex-col items-center mb-10">
        <span className="bg-white/20 font-semibold text-[#4F89A9] text-xs px-5 py-1.5 rounded-full border border-[#C4C4C4] mb-8">
          Berita
        </span>

        <h1
          className={`${apacih.className} text-[45px] font-semibold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent leading-tight mb-3.5`}
        >
          Berita Polbis
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Card besar - berita utama */}
        <div className="relative rounded-2xl overflow-hidden h-30 md:h-89 bg-gray-100">
          {beritaBesar && (
            <>
              {beritaBesar.gambar && (
                <img
                  src={`http://127.0.0.1:8000/storage/${beritaBesar.gambar}`}
                  alt={beritaBesar.judul}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/95 via-[#1e3a5f]/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
  <p className="text-[#ffffff]/80 text-xs font-semibold mb-2">
    {formatTanggal(beritaBesar.tanggal)}
  </p>
                <p className="text-white text-[20px] font-semibold leading-snug mb-4">
                  {beritaBesar.judul}
                </p>

                <button className="inline-block text-[#0C64C2] text-xs font-semibold border border-[#C4C4C4] bg-[#ffffff]/80 rounded-[10px] px-4 py-1">
                  Selengkapnya
                </button>
              </div>
            </>
          )}
        </div>

        {/* List kecil - 3 slot */}
        <div className="flex flex-col justify-between h-full ms-4.5">
          {slotKecil.map((item, index) => (
            <div
              key={item?.id ?? `kosong-${index}`}
              className={`flex gap-4 items-start ${
                item ? "" : "invisible"
              }`}
            >
              <div className="w-35 h-27 rounded-lg bg-gray-200 flex-shrink-0 overflow-hidden">
                {item?.gambar && (
                  <img
                    src={`http://127.0.0.1:8000/storage/${item.gambar}`}
                    alt={item.judul}
                    className="w-full h-full object-cover object-top"
                  />
                )}
              </div>

              <div>
                <p className="text-xs text-[#107cf0]/80 font-semibold mb-1">
  {item?.tanggal ? formatTanggal(item.tanggal) : "Tanggal"}
</p>

                <p className="text-[13px] font-semibold text-[#D3D3D3]/80 leading-snug mb-1">
                  {item?.judul ?? "Judul"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}