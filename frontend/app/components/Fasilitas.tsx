import localFont from "next/font/local";



const apacih = localFont({
  src: "/../font/frizOG.ttf",
});


export default function Fasilitas() {
  return (
<section className="max-w-5xl mx-auto px-6 md:px-10 py-12 md:py-16">

      <div className="max-w-2xl mx-[1px] text-left mt-23 mb-1">
          <span className="bg-white/20 text-[#4F89A9] font-semibold text-xs px-5 py-1.5 rounded-full border border-[#C4C4C4] ">
            Kampus
          </span>
          <h1 className={`${apacih.className} text-xl text-[48px] font-bold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent md:mb-6 mt-10`}>
            Fasilitas Kampus
          </h1>
      </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
    <div className="md:col-span-1 relative rounded-2xl overflow-hidden h-50 bg-gray-300">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <img src="/ruang.png" alt="Fasilitas 1" className="w-full h-full object-cover" />
      <p className="absolute bottom-4 left-4 text-white text-base font-semibold">
        Ruang Kelas
      </p>
    </div>

    <div className="md:col-span-2 relative rounded-2xl overflow-hidden h-50 bg-gray-300">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <img src="/perpus.png" alt="Fasilitas 1" className="w-full h-full object-cover" />
      <p className="absolute bottom-4 left-4 text-white text-base font-semibold">
        Perpustakaan
      </p>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="md:col-span-2 relative rounded-2xl overflow-hidden h-50 bg-gray-300">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <img src="/aula.png" alt="Fasilitas 1" className="w-full h-full object-cover" />
      <p className="absolute bottom-4 left-4 text-white text-base font-semibold">
        Aula
      </p>
    </div>

    <div className="md:col-span-1 relative rounded-2xl overflow-hidden h-50 bg-gray-300">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <img src="/lapangan.png" alt="Fasilitas 1" className="w-full h-full object-cover" />
      <p className="absolute bottom-4 left-4 text-white text-base font-semibold">
        Lapangan
      </p>
    </div>
  </div>
</section>

 );
}
