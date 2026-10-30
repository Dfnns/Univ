import Link from 'next/link';
import Navbar from './components/navbar';
import { Ancizar_Serif } from 'next/font/google';
import WhatsAppButton from './components/WhatsAppButton';
import HeroCarouselPage from './components/Carousel/HeroCarouselPage';
import SambutanDirektur from './components/SambutanDirektur';
import Fasilitas from './components/Fasilitas';
import BeritaUtama from './components/BeritaUtama';
import Admisi from './components/Admisi';
import Prodi from './components/Prodi';
import Footer from './components/Footer';
import { ChevronRight } from 'lucide-react';




const ancizarSerif = Ancizar_Serif({ subsets: ['latin'], weight: ['400', '700'] });


export default function HomePage() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-[center_-10%] bg-fixed bg-no-repeat"
      style={{
        backgroundImage: "url('/polbis-bg.png')",
      }}
    >
      {/* Overlay untuk menggelapkan background */}
      <div className="absolute inset-0 bg-black/90 pointer-events-none" />

      {/* Isi Home */}
      <div className="relative z-10">
        <Navbar />

        <HeroCarouselPage />

        <WhatsAppButton />

        {/* Sambutan Direktur */}
        <SambutanDirektur />

        {/* Program Studi */}
        <Prodi />

        {/* Fasilitas Kampus */}
        <Fasilitas />

        {/* Kabar Polbis */}
        <BeritaUtama />

        {/* Admisi */}
        <Admisi />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}