import Link from 'next/link';
import localFont from "next/font/local";
import { ChevronRight } from 'lucide-react';



const apacih = localFont({
  src: "/../font/frizOG.ttf",
});


export default function Admisi() {
  return (
<section className="max-w-5xl mx-auto px-6 md:px-10 py-12 md:py-16 mt-19">
  <div className="flex justify-center mb-8">
    <span className="bg-white/20 font-semibold text-[#4F89A9] text-xs px-5 py-1.5 rounded-full border border-[#C4C4C4] mb-8">
      Admisi
    </span>
  </div>

  <div className="grid md:grid-cols-2 gap-10 items-center">
    {/* Kolom Teks */}
    <div>
      <h2 className={`${apacih.className} text-[48px] font-semibold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent leading-tight mb-5`}>
        Siap Membangun Karier Profesional Anda?
      </h2>

      <p className="text-[14px] text-[#D3D3D3]/90 leading-relaxed mb-6 mt-6">
        Wujudkan potensi dan raih masa depan bersama kami. Bergabunglah dengan para mahasiswa yang terus
         mengembangkan kompetensi dan mempersiapkan diri untuk berkarier di industri digital, logistik, dan teknologi.
      </p>
      <Link
        href="#"
        className="inline-flex items-center gap-2 bg-[#4F89A9]/10 text-[#4F89A9] text-sm font-medium px-5 py-2.5 rounded-full mt-2.5"
      >
        Informasi Pendaftaran Selengkapnya
        <ChevronRight size={15} />
      </Link>
    </div>

    {/* Kolase Foto - 2 kolom independen, tinggi beda-beda */}
    <div className="flex gap-3 mt-5">
      <img src="/fotbar.png" alt="Admisi 2" className="h-80" />
    </div>
  </div>
</section>
 );
}

