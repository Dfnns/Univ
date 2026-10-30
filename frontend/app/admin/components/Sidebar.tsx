'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Bisnisdig = [
  {
    label: 'Berita Bisnis Digital',
    href: '/admin/berita',
  },
];
const TRPL = [
  {
    label: 'Berita TRPL',
    href: '/admin/berita-trpl',
  },
];
const Logbis = [
  {
    label: 'Berita Logistik Bisnis',
    href: '/admin/berita',
  },
];

const Berut = [
  {
    label: 'Berita Utama',
    href: '/admin/berita-utama',
  },
];

const Hero = [
  {
    label: 'Hero',
    href: '/admin/hero',
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-gray-100 min-h-screen py-6 px-5">

      {/* LOGO */}
      <div className="flex items-center gap-2 mb-15">
        <Image
          src="/logo.png"
          alt="Logo Politeknik Bisnis Digital Indonesia"
          width={36}
          height={36}
          className="rounded-full flex-shrink-0 object-cover"
        />

        <div className="text-xs font-extrabold text-[#243E80] leading-tight ml-1">
          Politeknik Bisnis Digital
          <br />
          Indonesia
        </div>
      </div>


      {/* TITLE */}
      <p className="text-xs text-gray-400 px-2 mb-4 font-semibold mb-6">
        Management Content
      </p>



<p className="text-xs text-[#243E80] px-2 mb-4 mt-3 font-semibold ">
        Home Page
      </p>
      {/* BERITA UTAMA */}
      <nav>
        {Berut.map((item) => {
          const active =
            pathname === item.href ||
            pathname?.startsWith(`${item.href}/`);

          return (
            <Link
            key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-sm mb-1 ${
                active
                  ? 'bg-gray-100 text-blue-900 font-medium border-l-4 border-blue-900'
                  : 'text-gray-600'
              }`}
              >
              {item.label}
            </Link>
          );
        })}
      </nav>


      {/* HERO */}
      <nav>
        {Hero.map((item) => {
          const active =
            pathname === item.href ||
            pathname?.startsWith(`${item.href}/`);

          return (
            <Link
            key={item.href}
            href={item.href}
            className={`block px-3 py-2 rounded-md text-sm mb-1 ${
                active
                  ? 'bg-gray-100 text-blue-900 font-medium border-l-4 border-blue-900'
                  : 'text-gray-600'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <p className="text-xs text-[#243E80] px-2 mb-4 mt-9 font-semibold">
        Prodi
      </p>
                {/* BERITA BISNIS DIGITAL */}
                <nav>
                  {Bisnisdig.map((item) => {
                    const active =
                      pathname === item.href ||
                      pathname?.startsWith(`${item.href}/`);
          
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-3 py-2 rounded-md text-sm mb-1 ${
                          active
                            ? 'bg-gray-100 text-blue-900 font-medium border-l-4 border-blue-900'
                            : 'text-gray-600'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                <nav>
                  {TRPL.map((item) => {
                    const active =
                      pathname === item.href ||
                      pathname?.startsWith(`${item.href}/`);
          
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-3 py-2 rounded-md text-sm mb-1 ${
                          active
                            ? 'bg-gray-100 text-blue-900 font-medium border-l-4 border-blue-900'
                            : 'text-gray-600'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
                <nav>
                  {Logbis.map((item) => {
                    const active =
                      pathname === item.href ||
                      pathname?.startsWith(`${item.href}/`);
          
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-3 py-2 rounded-md text-sm mb-1 ${
                          active
                            ? 'bg-gray-100 text-blue-900 font-medium border-l-4 border-blue-900'
                            : 'text-gray-600'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

    </aside>
  );
}