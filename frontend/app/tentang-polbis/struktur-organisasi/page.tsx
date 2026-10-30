import Navbar from '../../components/navbar';

import Footer from '../../components/Footer';
import localFont from "next/font/local";



const apacih = localFont({
  src: "/../../font/frizOG.ttf",
});


// ===============================
// DATA STRUKTUR ORGANISASI
// ===============================

const yayasan = {
  jabatan: 'Yayasan',
  nama: 'Dr. H. E.K. Budi Santoso, S.E., M.M.',
};

const direktur = {
  jabatan: 'Direktur',
  nama: 'Kusmayanti, S.E., M.M.',
};

const wakil = {
  jabatan: 'Wakil Direktur',
  nama: 'Muhammad Zahriyanto, S.E., M.M.',
};

const bagian = [
  {
    jabatan: 'LPIPM',
    nama: 'Fathur Rozi, S.E., M.M.',
  },
  {
    jabatan: 'BAK',
    nama: 'Muhammad Zahriyanto, S.E., M.M.',
  },
  {
    jabatan: 'BAAK',
    nama: 'Rima Aulia, S.pd,, Mpd.',
  },
  {
    jabatan: 'BTI',
    nama: 'Fasar Khoiru, S.Kom',
  },
];

const kaprodi = [
  {
    jabatan: 'Kaprodi',
    nama: 'Fathur Rozi, S.E., M.M.',
    prodi: 'Bisnis Digital',
  },
  {
    jabatan: 'Kaprodi',
    nama: 'Zuhrin',
    prodi: 'Logistik Bisnis',
  },
  {
    jabatan: 'Kaprodi',
    nama: 'Adelia Alviyana M.Kom',
    prodi: 'Teknologi Rekayasa Perangkat Lunak',
  },
];

export default function StrukturOrganisasiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="relative h-42 md:h-80 overflow-hidden bg-gradient-to-l from-[#007BC0] to-[#243E80]">
        <img
          src="/logo.png"
          alt=""
          className="absolute left-265 top-1/2 -translate-y-1/2 w-64 md:w-145 opacity-13 pointer-events-none"
        />

        <div className="relative z-10 h-full flex items-end px-6 md:px-16 pb-6 md:pb-8">
          <h1 className={`${apacih.className} text-white text-2xl md:text-[50px] mb-2`}>
            Struktur Organisasi
          </h1>
        </div>
      </div>

      {/* Struktur Organisasi */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 mt-10">

        {/* ===============================
            1. YAYASAN
        =============================== */}

        <div className="flex flex-col items-center">
          <p className="text-xs text-gray-700 font-semibold">
            {yayasan.jabatan}
          </p>

          <p
            className={`${apacih.className} text-[18px] font-bold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent`}
          >
            {yayasan.nama}
          </p>
        </div>

        {/* Garis Yayasan → Direktur */}
        <div className="w-px h-18 bg-blue-300 mx-auto" />


        {/* ===============================
            2. DIREKTUR
        =============================== */}

        <div className="flex flex-col items-center">
          <p className="text-xs text-gray-700 font-semibold">
            {direktur.jabatan}
          </p>

          <p
            className={`${apacih.className} text-[18px] font-bold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent`}
          >
            {direktur.nama}
          </p>
        </div>

        {/* Garis Direktur → Wakil */}
        <div className="w-px h-18 bg-blue-300 mx-auto" />


        {/* ===============================
            3. WAKIL DIREKTUR
        =============================== */}

        <div className="flex flex-col items-center">
          <p className="text-xs text-gray-700 font-semibold">
            {wakil.jabatan}
          </p>

          <p
            className={`${apacih.className} text-[18px] font-bold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent`}
          >
            {wakil.nama}
          </p>
        </div>

        {/* Garis Wakil → Bagian */}
        <div className="w-px h-19 bg-blue-300 mx-auto" />


        {/* ===============================
            4. LPIPM - BAK - BAAK - BTI
        =============================== */}

        {/* Garis horizontal */}
        <div className="relative h-8">
          <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-blue-300" />

          <div className="absolute top-0 left-[12.5%] w-px h-8 bg-blue-300" />

          <div className="absolute top-0 left-[37.5%] w-px h-8 bg-blue-300" />

          <div className="absolute top-0 left-[62.5%] w-px h-8 bg-blue-300" />

          <div className="absolute top-0 right-[12.5%] w-px h-8 bg-blue-300" />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {bagian.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <p className="text-xs text-gray-700 font-semibold">
                {item.jabatan}
              </p>

              <p
                className={`${apacih.className} text-[16px] font-bold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent`}
              >
                {item.nama}
              </p>
            </div>
          ))}
        </div>


        {/* Garis dari bagian → Kaprodi */}
        <div className="w-px h-19 bg-blue-300 mx-auto" />


        {/* ===============================
            5. KAPRODI
        =============================== */}

        {/* Garis horizontal */}
        <div className="relative h-8">
          <div className="absolute top-0 left-[16.666%] right-[16.666%] h-px bg-blue-300" />

          <div className="absolute top-0 left-[16.666%] w-px h-8 bg-blue-300" />

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-blue-300" />

          <div className="absolute top-0 right-[16.666%] w-px h-8 bg-blue-300" />
        </div>

        <div className="grid grid-cols-3 gap-6">
          {kaprodi.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <p className="text-xs text-gray-700 font-semibold">
                {item.jabatan}
              </p>

              <p
                className={`${apacih.className} text-[16px] font-bold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent`}
              >
                {item.nama}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                {item.prodi}
              </p>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}