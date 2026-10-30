
import Navbar from '../components/navbar';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import localFont from "next/font/local";
import Footer from '../components/Footer';



const apacih = localFont({
  src: "/../font/frizOG.ttf",
});

const latestPosts = [
  {
    image: '/kartini.jpg',
    title: 'Kegiatan Hari Kartini di Kampus Polbis Berlangsung Meriah',
    date: '23 Agustus 2020',
  },
  {
    image: '/juara.jpg',
    title: 'Bukan Sekadar Kuliah: Mahasiswa Logistik Bisnis POLBIS Terlibat Langsung Menata Sistem Inventaris Koperasi Kementerian Koperasi.',
    date: '10 Agustus 2025',
  },
];

const founders = [
  {
    image: '/bisdig.jpg',
    title: 'Our people make the difference',
  },
  {
    image: '/bisdig.jpg',
    title: 'Our people make the difference',
  },
  {
    image: '/bisdig.jpg',
    title: 'Our people make the difference',
  },
];

export default function BeritaPage() {
  return (


    <main className="min-h-screen bg-white px-6 py-8 mt-8">

        <Navbar />

      <div className="mx-auto max-w-[1100px]">

        {/* ========================= */}
        {/* TOP SECTION */}
        {/* ========================= */}

        <section className="grid grid-cols-[1fr_500px] gap-5 mt-30">

          {/* BIG FEATURE */}
          <div className="relative h-[390px] w-[600px] overflow-hidden rounded-[10px]">

            <Image
              src="/bogor.jpg"
              alt="Featured post"
              fill
              className="object-cover"
              priority
            />

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/20 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-5 left-5 right-5">


              <p className="mt-1 text-[12px] font-semibold text-white/90 mb-1">
                11 Agustus 2020
              </p>

              <h1 className="max-w-[500px] text-[21px] font-semibold leading-[1.2] text-[#ffffff]/90 mb-3.5">
                Dosen Bersama Mahasiswa Prodi TRPL POLBIS Dorong Akselerasi Transformasi Digital Berbasis Kearifan Lokal di Bogor Timur
              </h1>

              <button className="inline-block text-[#0C64C2] text-xs font-semibold border border-[#C4C4C4] bg-[#ffffff]/80 rounded-[10px] px-4 py-1">
                  Selengkapnya
                </button>


            </div>
          </div>


          {/* ========================= */}
          {/* LATEST POST */}
          {/* ========================= */}

          
<div className="flex flex-col">
  <h2 
    className={`${apacih.className} mb-3 text-[30px] font-semibold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent`}
  >
    Trending
  </h2>

  <div className="flex flex-col gap-6">
    {latestPosts.slice(0, 2).map((post, index) => (
      <article key={index} className="flex gap-3">
        <div className="relative h-[157px] w-[200px] flex-shrink-0 overflow-hidden rounded-[5px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="mt-1 text-[10px] text-[#0C64C2] font-semibold mb-0.5">
            {post.date} 
          </p>
          <h3 className="line-clamp-3 text-[13px] font-medium leading-[1.25] text-[#202020]">
            {post.title}
          </h3>

        </div>
      </article>
    ))}
  </div>
</div>
        </section>


        {/* ========================= */}
        {/* FOUNDERS CORNER TITLE */}
        {/* ========================= */}

        <section className="mt-7">

          <div className="mb-3 flex items-center justify-between">

            <h2 className= {`${apacih.className} text-[32px] font-semibold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent mb-3 mt-5`}>
              Berita Terbaru
            </h2>

            <div className="flex gap-2">

            </div>

          </div>


          {/* ========================= */}
          {/* FOUNDERS CARDS */}
          {/* ========================= */}

          <div className="grid grid-cols-3 gap-5">

            {founders.map((founder, index) => (
              <article
                key={index}
                className="
                  overflow-hidden
                  rounded-[7px]
                  border
                  border-gray-100
                  bg-white
                  shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                "
              >

                {/* IMAGE */}

                <div className="relative h-[155px] w-full">

                  <Image
                    src={founder.image}
                    alt={founder.title}
                    fill
                    className="object-cover"
                  />

                </div>


                {/* CONTENT */}

                <div className="p-3">

                  <div className="inline-flex items-center rounded-full bg-[#fff4ed] px-1 py-[3px]">

                  </div>


                  <h3 className="text-[16px] font-semibold leading-[1.25] text-[#202020]">
                    {founder.title}
                  </h3>


                  <p className="mt-2 text-[11px] leading-[1.45] text-gray-400">
                    We are an extension of your customer service team,
                    with all of your services at the ready. Chat to our
                    friendly team 24/7 when you need help.
                  </p>


                  <p className="mt-2 text-[10px] text-[#C5DFF3]">
                    Aug 10 • 12 min read
                  </p>

                </div>

              </article>
            ))}

          </div>

        </section>


        {/* ========================= */}
        {/* PAGINATION */}
        {/* ========================= */}

        <div className="mt-8 border-t border-gray-100 pt-5">

          <div className="flex items-center justify-between">

            {/* LEFT ARROW */}



            {/* PAGINATION */}



            {/* RIGHT ARROW */}

            <button className="text-gray-400">
              <ArrowRight size={11} />
            </button>

          </div>

        </div>

      </div>
      <Footer />

    </main>
  );
}