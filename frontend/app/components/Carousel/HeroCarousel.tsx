// import { Leaf, ArrowRight } from 'lucide-react';
// import { Ancizar_Serif } from 'next/font/google';


// const DURASI_SLIDE = 5000; // 5 detik per berita, ganti sesuai selera

// const ancizarSerif = Ancizar_Serif({ subsets: ['latin'], weight: ['400', '700'] });

// async function getHero() {
//   const res = await fetch('http://127.0.0.1:8000/api/hero-sections', {
//     cache: 'no-store', // biar selalu ambil data terbaru, nggak di-cache
//   });
//   const data = await res.json();
//   return data;
// }

// export default async function HeroCarouselPage() {
//   const hero = await getHero();
//   const heroUtama = hero[0] || null;

  
//   return (
//     <div className="relative h-screen overflow-hidden">

//       <img
//         src={`http://127.0.0.1:8000/storage/${heroUtama.gambar}`}
//         alt="Hero"
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#010A1E] via-[#073090]/70 to-transparent" />


//       {/* Heading */}
//       <div className="absolute top-28 md:top-32 left-6 md:left-16 max-w-md mt-24 ml-20">
//        <span className="bg-white/2 text-[#4F89A9] text-xs px-5 py-1.5 rounded-full border border-[#C4C4C4]/">
//             Berita Kampus
//           </span>
//         <h1 className= "text-white  md:text-6xl font-bold leading-tight flex flex-wrap items-center gap-x-3 ]leading-[90px] mt-7">
//           <span className= "leading-[68px]  " >
//             {heroUtama.judul}
//             </span>
//         </h1>
//           <p className="text-white/70 text-sm leading-relaxed mb-4 mt-6">
//           {heroUtama.sub_judul}
//         </p>
      
//       </div>
        
//       {/* Subtext + CTA */}
//       <div className="absolute bottom-24 right-6 md:right-16 max-w-xs mb-10 mr-20">
//         <p className="text-white/70 text-sm leading-relaxed mb-4 ">
//           {heroUtama.sub_judul2}
//         </p>
//         <button className="inline-flex items-center gap-3 bg-[#007BC0]/30 text-white text-sm font-medium pl-5 pr-2 py-2 rounded-full backdrop-blur-xl border border-white/20 hover:bg-white/50
//          transition-colors duration-300">
//           Baca Selengkapnya
//           <span className="w-8 h-8 rounded-f  ull flex items-center justify-center">
//             <ArrowRight size={16} className="text-white " />
//           </span>
//         </button>
//       </div>

  

//         </div>
  
//   );
// }