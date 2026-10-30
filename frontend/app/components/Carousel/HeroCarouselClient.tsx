'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import localFont from "next/font/local";



const apacih = localFont({
  src: "/../../font/frizOG.ttf",
});




interface Hero {
  id: number;
  judul: string;
  sub_judul: string;
  gambar: string;
}

interface HeroCarouselClientProps {
  hero: Hero[];
}

const DURATION = 5000;

export default function HeroCarouselClient({
  hero,
}: HeroCarouselClientProps) {

  // ==========================================
  // MAXIMAL 4 BERITA
  // ==========================================

  const heroList = hero.slice(0, 4);


  // ==========================================
  // STATE
  // ==========================================

  const [activeIndex, setActiveIndex] = useState(0);

  const [progress, setProgress] = useState(0);


  // ==========================================
  // AUTO SLIDE
  // ==========================================

  useEffect(() => {

    if (heroList.length < 2) {
      return;
    }


    // Reset progress setiap berita berubah

    setProgress(0);


    // Mulai animasi progress

    const progressTimer = setTimeout(() => {

      setProgress(100);

    }, 50);


    // Setelah 5 detik pindah ke berita berikutnya

    const slideTimer = setTimeout(() => {

      setActiveIndex((prevIndex) => {

        return (prevIndex + 1) % heroList.length;

      });

    }, DURATION);


    // Bersihkan timer

    return () => {

      clearTimeout(progressTimer);

      clearTimeout(slideTimer);

    };

  }, [activeIndex, heroList.length]);


  // ==========================================
  // CLICK BERITA
  // ==========================================

  const handleSelectHero = (index: number) => {

    setActiveIndex(index);

    setProgress(0);

  };


  // ==========================================
  // MINIMAL 2 BERITA
  // ==========================================

  if (heroList.length < 2) {

    return null;

  }


  // ==========================================
  // BERITA YANG SEDANG AKTIF
  // ==========================================

  const heroUtama = heroList[activeIndex];


  return (
    <div id="hero" className="relative h-screen overflow-hidden">

      {/* ======================================
          BACKGROUND
      ====================================== */}

      <img
        key={heroUtama.id}
        src={`http://127.0.0.1:8000/storage/${heroUtama.gambar}`}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />


      <div className="absolute inset-0 bg-gradient-to-r from-[#00072d]/95 via-[#00072d]/60 to-[#00072d]/18" />


      {/* ======================================
          HEADING
      ====================================== */}

      <div className="absolute inset-y-0 left-6 md:left-16 max-w-md ml-20 flex items-center">

  <div>
    <span className="bg-white/5 text-[#4F89A9] text-xs px-3 py-1.5 rounded-full border border-[#C4C4C4]/20">
      Kabar Kampus
    </span>

    <h1
      className={`${apacih.className} text-white md:text-[50px] font-medium flex flex-wrap items-center mt-8`}
    >
      <span className="leading-[63px]">
        {heroUtama.judul}
      </span>
    </h1>

    <p className="text-white/70 text-sm leading-relaxed mb-4 mt-4">
      {heroUtama.sub_judul}
    </p>
  </div>

</div>


      {/* ======================================
          SUBTEXT + CTA
      ====================================== */}

      <div className="absolute bottom-24 right-6 md:right-16 max-w-xs mb-10 mr-20">

      

        <button
          className="inline-flex items-center gap-3 
            bg-[#007BC0]/60 text-white 
            text-sm font-medium 
            pl-5 pr-5 py-3 rounded-full 
            backdrop-blur-xl border border-white/20 
            hover:bg-white hover:text-gray-900 
            transition-colors duration-300"
        >

          Baca Selengkapnya


        </button>

      </div>


      {/* ======================================
          CAROUSEL BAR
      ====================================== */}

      <div className="absolute bottom-5 left-6 right-6 md:left-7 md:right-7">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">


          {heroList.map((item, index) => {

            const isActive = index === activeIndex;


            return (

              <button
                key={item.id}
                onClick={() => handleSelectHero(index)}
                className="group text-left"
              >


                {/* BAR */}

                <div className="relative h-[2px] w-full bg-white/20 overflow-hidden">


                  {/* PROGRESS BAR AKTIF */}

                  {isActive && (

                    <div
                      className="absolute left-0 top-0 h-full bg-white transition-[width] duration-[5000ms] ease-linear"
                      style={{
                        width: `${progress}%`,
                      }}
                    />

                  )}

                </div>


                {/* TEXT BERITA */}

                <p
                  className={`mt-2 text-[11px] uppercase tracking-tight font-semibold transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-white/30'
                  }`}
                >

                  {item.judul}

                </p>


              </button>

            );

          })}


        </div>

      </div>


    </div>

  );
}