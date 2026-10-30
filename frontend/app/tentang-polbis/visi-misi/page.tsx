
import Navbar from '../../components/navbar';
import Footer from '@/app/components/Footer';
import localFont from "next/font/local";



const apacih = localFont({
  src: "/../../font/frizOG.ttf",
});


const misi = [
  'Menyelenggarakan pendidikan tinggi vokasi di bidang teknologi digital dan bisnis yang kondusif sebagai bentuk inkubator untuk membentuk karakter dan kepribadian lulusan yang kreatif, memiliki komitmen terhadap pengembangan ilmu dan pengaplikasiannya serta berjiwa wirausaha bagi peningkatan ekonomi dan kesejahteraan Masyarakat.',
  'Menyelenggarakan penelitian dan pengabdian kepada masyarakat dengan mengembangkan jejaring industri, pemerintah dan swasta serta instansi lain yang relevan, berbasis penelitian dalam bidang teknologi dan bisnis.',
  'Menjalin kemitraan dengan dunia usaha / dunia industri dan instansi pemerintah yang berkualitas dalam mendukung penyelenggaraan Pendidikan, penelitian dan pengabdian kepada masyarakat.',
  'Menyelenggarakan tata kelola perguruan tinggi yang kredibel, transparan, akuntabel, dan responsibel dalam rangka mencapai kemandirian melalui pengembangan kelembagaan manajemen yang berorientasi pada mutu dan kemampuan bersaing internasional.',
];

export default function VisiMisiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      

      {/* Banner Header */}
      <div className="relative h-42 md:h-80 overflow-hidden bg-gradient-to-l from-[#007BC0] to-[#243E80]">
      {/* <img
        src="/logo.png"
        alt=""
        className="absolute left-265 top-1/2 -translate-y-1/2 w-64 md:w-145 opacity-13 pointer-events-none"
      /> */}
      <div className="relative z-10 h-full flex items-end px-6 md:px-16 pb-6 md:pb-8">
        <h1 className={`${apacih.className} text-white text-2xl md:text-[50px] mb-2 `}>Visi & Misi</h1>
      </div>
    </div>

      {/* Konten */}
      <div className="max-w-3xl mx-auto px-6 md:px-16 py-12 md:py-16 mt-20">
        <h2 className={`${apacih.className} text-xl text-[43px] font-bold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent mb-4 `}>Visi</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-12 mt-3">
          Menjadi Politeknik yang Unggul di Tingkat Internasional Pada Tahun 2043
          dalam Bidang Teknologi Digital dan Bisnis yang Berbasis Ekonomi Kreatif
          dan Kewirausahaan
        </p>

        <h2 className={`${apacih.className} text-xl text-[43px] font-bold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent mb-4`}>Misi</h2>
        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
  <li className="flex gap-2">
    <span className="flex-shrink-0">•</span>
    <span>Menyelenggarakan pendidikan tinggi vokasi di bidang teknologi digital dan bisnis yang kondusif sebagai bentuk inkubator untuk membentuk karakter dan kepribadian lulusan yang kreatif, memiliki komitmen terhadap pengembangan ilmu dan pengaplikasiannya serta berjiwa wirausaha bagi peningkatan ekonomi dan kesejahteraan Masyarakat.</span>
  </li>
  <li className="flex gap-2">
    <span className="flex-shrink-0">•</span>
    <span>Menyelenggarakan penelitian dan pengabdian kepada masyarakat dengan mengembangkan jejaring industri, pemerintah dan swasta serta instansi lain yang relevan, berbasis penelitian dalam bidang teknologi dan bisnis.</span>
  </li>
  <li className="flex gap-2">
    <span className="flex-shrink-0">•</span>
    <span>Menjalin kemitraan dengan dunia usaha / dunia industri dan instansi pemerintah yang berkualitas dalam mendukung penyelenggaraan Pendidikan, penelitian dan pengabdian kepada masyarakat.</span>
  </li>
  <li className="flex gap-2">
    <span className="flex-shrink-0">•</span>
    <span>Menyelenggarakan tata kelola perguruan tinggi yang kredibel, transparan, akuntabel, dan responsibel dalam rangka mencapai kemandirian melalui pengembangan kelembagaan manajemen yang berorientasi pada mutu dan kemampuan bersaing internasional.</span>
  </li>
</ul>
      </div>
<Footer />
    </div>
  );
}