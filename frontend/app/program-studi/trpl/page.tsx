import Navbar from '../../components/navbar';
import localFont from "next/font/local";
import Footer from '../../components/Footer';
import Berita from '../../components/berita-prodi/berita-trpl';


const apacih = localFont({
  src: "/../../font/frizOG.ttf",
});

const kurikulum = [
  'Programming Fundamentals',
  'Database Systems',
  'Web Development',
  'Mobile App Development',
  'System Analysis',
  'Software Engineering',
  'Cloud Computing',
  'DevOps & CI/CD',
  'Software Testing',
];

const prospekKarir = [
  'Software Engineer',
  'Web Developer',
  'Mobile Developer',
  'Database Administrator',
  'System Analyst',
  'Content Strategist',
];




export default async function TRPLPage() {



  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Banner Header */}
      <div className="relative h-48 md:h-86 overflow-hidden bg-gradient-to-l from-[#007BC0] to-[#243E80]">
      <img
        src="/univtiara.png"
        alt=""
        className="absolute left-265 top-1/2 -translate-y-1/2 w-64 md:w-145 opacity-12 pointer-events-none"
      />
      <div className="relative z-10 h-full flex items-end px-6 md:px-16 pb-6 md:pb-8">
        <h1 className={`${apacih.className} text-white text-[50px] md:text-5xl mb-2`}>
          Teknologi Rekayasa Perangkat Lunak</h1>
      </div>
    </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-10 md:py-16">

        {/* Welcome Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-6 mt-33">
          <div>
            <h2 className={`${apacih.className} text-xl text-[43px] font-bold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent mb-5`}>
              Selamat Datang Di Prodi TRPL
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
             Membentuk software engineer profesional dengan keahlian dalam pengembangan aplikasi web, mobile, dan sistem informasi menggunakan teknologi terkini.

            </p>
          </div>
           <div className="flex justify-center md:justify-end">
            <div className="flex flex-col items-center">
              <img
                src="/buadel.png"
                className="w-40 h-40 rounded-xl object-cover"
              />

              <p className="text-xs font-semibold text-gray-700  mb-1 mt-10">
                Ketua Prodi TRPL
              </p>
              <p className="text-xs text-gray-500 ">Adelia Alviyana M.Kom</p>
            
           </div>
        </div>
  </div>

        <div className="max-w-3xl mx-auto px-6 md:px-16 py-12 md:py-16"></div>
        <div className="max-w-2xl   py-12 md:py-16">
        <h2 className={`${apacih.className} text-xl text-[43px] font-bold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent mb-4 `}>Visi</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-12 mt-3">
          Menghasilkan calon programmer bidang teknologi rekayasa perangkat lunak yang unggul 
          dalam perencanaan, pengembangan dan implementasi sistem dengan penekanan pada pengembangan
           perangkat lunak, pengembangan web, maupun analisis sistem.
        </p>

        <h2 className={`${apacih.className} text-xl text-[43px] font-bold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent mb-4`}>Misi</h2>
        <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
  <li className="flex gap-2">
    <span className="flex-shrink-0">•</span>
    <span>Menyelenggarakan pendidikan bermutu di bidang Teknologi Rekayasa Perangkat Lunak yang berorientasi untuk pembentukan karakter </span>
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


        {/* Kurikulum & Prospek Karir */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 mt-40 mb-45">
          <div className="flex flex-col items-start">
            <span className="bg-gray-100 text-[#4F89A9] text-[13px] px-4 py-1 rounded-full border border-[#C4C4C4] font-bold mb-10">
              Kurikulum
            </span>
            <div className="bg-[#EDEDED] rounded-2xl p-6 w-full shadow-sm flex-1">
              <ul className="space-y-3">
                {kurikulum.map((item) => (
                  <li key={item} className="flex items-start gap-5 text-sm text-gray-700 ">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#007BC0] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <span className="bg-gray-100 text-[#4F89A9] text-[13px] px-4 py-1 rounded-full  border border-[#C4C4C4] font-bold mb-10">
              Prospek Karir
            </span>
            <div className="bg-[#EDEDED] rounded-2xl p-6 w-full shadow-sm flex-1">
              <ul className="space-y-3">
                {prospekKarir.map((item) => (
                  <li key={item} className="flex items-start gap-5 text-sm text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#007BC0] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Berita Section */}
                <Berita />

          </div>
      <Footer />
  </div>
  );
}