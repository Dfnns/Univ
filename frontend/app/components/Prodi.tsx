import Link from 'next/link';
import localFont from "next/font/local";



const apacih = localFont({
  src: "/../font/frizOG.ttf",
});


const programs = [
  { title: 'D4 Bisnis Digital', img: '/bisdig.png', href: '/program-studi/bisnis-digital' },
  { title: 'D4 Logistik Bisnis', img: '/logbis.png', href: '/program-studi/Log-bis' },
  { title: 'D4 Teknologi Rekayasa Perangkat Lunak', img: '/trpl.png', href: '#' },
];

export default function Prodi() {
  return (
<section className="px-6 md:px-24 py-12 md:py-20 mt-25">
        <div className="max-w-2xl mx-69 text-left">
          <span className="bg-white/20 text-[#4F89A9] text-xs font-semibold px-5 py-1.5 rounded-full border border-[#C4C4C4] ">
            Program Studi
          </span>
          <h1 className={`${apacih.className} text-xl text-[52.5px] font-bold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent leading-tight mb-4 md:mb- mt-10`}>
            Program Sarjana<br />Terapan (D4)
          </h1>
          <p className="text-[#D3D3D3]/85 text-[14px] mb-8 md:mb-17">
            Pilih program studi yang sesuai dengan <br></br>
            passion dan impian karirmu.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6">
          {programs.map((program) => (
            <Link
            key={program.title}
            href={program.href}
            className="relative w-full sm:w-62 h-82 rounded-xl overflow-hidden flex-shrink-0"
            >
              <img src={program.img} alt={program.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00669F]/55 via-[#00669F]10 to-transparent" />
              <span className="absolute bottom-4 left-0 right-0 text-center text-white text-sm font-semibold px-3">
                {program.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
  )
}
