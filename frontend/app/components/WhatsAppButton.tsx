'use client';
import { MessageCircle } from 'lucide-react';



import { useEffect, useState } from 'react';

const NOMOR_WA = '6285772244697';

const PESAN_DEFAULT =
  'Halo, saya ingin bertanya seputar Politeknik Bisnis Digital Indonesia';

export default function WhatsAppButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  const link = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(
    PESAN_DEFAULT
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');

      if (!hero) return;

      const heroTop =
        hero.getBoundingClientRect().top + window.scrollY;

      const heroHeight = hero.offsetHeight;

      // Muncul setelah melewati 50% Hero
      const triggerPoint = heroTop + heroHeight / 2;

      setIsScrolled(window.scrollY >= triggerPoint);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className={`
        fixed bottom-6 right-6 z-40
        w-16 h-16
        bg-[#25D366]
        rounded-full
        flex items-center justify-center
        shadow-lg
        hover:scale-110
        transition-all duration-500
        ${
          isScrolled
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
        }
      `}
    >
      <img
        src="/whatsapp-logo.webp"
        alt="WhatsApp"
        className="w-16 h-16"
      />
    </a>
  );
}