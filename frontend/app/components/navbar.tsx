'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const menuItems = [
  {
    label: 'Tentang Polbis',
    items: [
      { label: 'Sejarah', href: '/tentang-polbis/sejarah' },
      { label: 'Visi & Misi', href: '/tentang-polbis/visi-misi' },
      { label: 'Struktur Organisasi', href: '/tentang-polbis/struktur-organisasi' },
    ],
  },
  {
    label: 'Berita',
    href: '/beritapage',
    items: [],
  },
  {
    label: 'Program Studi',
    items: [
      { label: 'Bisnis Digital', href: '/program-studi/bisnis-digital' },
      { label: 'Logistik Bisnis', href: '/program-studi/Log-bis' },
      { label: 'Teknologi Rekayasa Perangkat Lunak', href: '/program-studi/trpl' },
    ],
  },
  {
    label: 'Lainnya',
    items: [
      {
        label: 'Perpustakaan',
        href: 'https://perpustakaanpbd.page.gd/beranda.php',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'Pengajuan Cuti',
        href: 'https://perpustakaanpbd.page.gd/beranda.php',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  // Cek apakah sedang berada di Home
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');

      // Kalau bukan Home, navbar selalu solid
      if (!hero || !isHomePage) {
        setIsScrolled(true);
        return;
      }

      const heroTop =
        hero.getBoundingClientRect().top + window.scrollY;

      const heroHeight = hero.offsetHeight;

      // Navbar berubah setelah melewati 50% tinggi Hero
      const triggerPoint = heroTop + heroHeight / 2;

      setIsScrolled(window.scrollY >= triggerPoint);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-30
        px-4 md:px-10 py-3
        transition-all duration-500 ease-in-out
        ${
          !isHomePage || isScrolled
            ? 'bg-[#ffffff]/85'
            : 'bg-transparent backdrop-blur-none'
        }
      `}
    >
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 md:gap-3"
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
            <img
              src="/univtiara.png"
              alt="Logo"
              className="w-9 h-9 rounded-full"
            />
          </div>

          <div
            className={`
              hidden sm:block
              w-px h-6
              transition-colors duration-500
              ${
                !isHomePage
                  ? 'bg-black/45'
                  : isScrolled
                    ? 'bg-black/45'
                    : 'bg-white/30'
              }
            `}
          />

          <span
            className={`
              hidden sm:block
              font-semibold
              text-[13.5px]
              leading-tight
              transition-colors duration-500
              ${
                !isHomePage
                  ? 'text-black'
                  : isScrolled
                    ? 'text-black'
                    : 'text-white'
              }
            `}
          >
            Universitas Tiara Bunda<br />
          
          </span>
        </Link>


        {/* MENU */}
        <div className="flex items-center gap-8">

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">

            {menuItems.map((menu) => (
              <div
                key={menu.label}
                className="relative group"
              >

                {/* MENU YANG PUNYA SUBMENU */}
                {menu.items.length > 0 ? (
                  <>
                    <button
                      className={`
                        flex items-center gap-1
                        text-sm
                        whitespace-nowrap
                        py-2
                        transition-colors
                        duration-500
                        ${
                          !isHomePage
                            ? 'text-black'
                            : isScrolled
                              ? 'text-black'
                              : 'text-white'
                        }
                      `}
                    >
                      {menu.label}

                      <ChevronDown size={14} />
                    </button>

                    {/* DROPDOWN */}
                    <div
                      className="
                        absolute left-0 top-full
                        w-56
                        bg-white
                        rounded-lg
                        shadow-lg
                        py-2
                        opacity-0
                        invisible
                        translate-y-1
                        group-hover:opacity-100
                        group-hover:visible
                        group-hover:translate-y-0
                        transition-all
                        duration-200
                        z-50
                      "
                    >
                      {menu.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="
                            block
                            px-4 py-2
                            text-sm
                            text-[#0a1a3d]
                            hover:bg-gray-50
                          "
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : menu.href ? (

                  /* MENU LINK BIASA */
                  <Link
                    href={menu.href}
                    className={`
                      text-sm
                      whitespace-nowrap
                      py-2
                      block
                      transition-colors
                      duration-500
                      ${
                        !isHomePage
                          ? 'text-black'
                          : isScrolled
                            ? 'text-black'
                            : 'text-white'
                      }
                    `}
                  >
                    {menu.label}
                  </Link>

                ) : (

                  /* MENU TANPA LINK */
                  <button
                    className={`
                      flex items-center gap-1
                      text-sm
                      whitespace-nowrap
                      py-2
                      transition-colors
                      duration-500
                      ${
                        !isHomePage
                          ? 'text-black'
                          : isScrolled
                            ? 'text-black'
                            : 'text-white'
                      }
                    `}
                  >
                    {menu.label}

                    <ChevronDown size={14} />
                  </button>

                )}

              </div>
            ))}

          </div>

          

          {/* PENDAFTARAN */}
          <a
            href="https://pmb.polbis.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden sm:flex
              items-center justify-center
              gap-1.5
              bg-white
              text-[#3d5a74]
              text-xs md:text-sm
              font-medium
              px-3 md:px-4
              py-1.5
              rounded-full
              whitespace-nowrap
            "
          >
            Pendaftaran

            <img
              src="/univtiara.png"
              alt="Pendaftaran"
              className="w-4 h-4 md:w-5 md:h-5 ml-2"
            />
          </a>


          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              lg:hidden
              transition-colors
              duration-500
              ${
                !isHomePage
                  ? 'text-white'
                  : isScrolled
                    ? 'text-black'
                    : 'text-white'
              }
            `}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>
      </div>


      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden mt-4 pb-2 flex flex-col gap-1">

          {menuItems.map((menu) => (
            <div
              key={menu.label}
              className={`
                border-b
                transition-colors
                duration-500
                ${
                  !isHomePage
                    ? 'border-white/10'
                    : isScrolled
                      ? 'border-black/10'
                      : 'border-white/10'
                }
              `}
            >

              {/* MOBILE SUBMENU */}
              {menu.items.length > 0 ? (
                <>
                  <button
                    onClick={() =>
                      setMobileSubmenu(
                        mobileSubmenu === menu.label
                          ? null
                          : menu.label
                      )
                    }
                    className={`
                      w-full
                      flex items-center justify-between
                      text-sm
                      font-medium
                      py-2.5
                      px-2
                      transition-colors
                      duration-500
                      ${
                        !isHomePage
                          ? 'text-white'
                          : isScrolled
                            ? 'text-black'
                            : 'text-white'
                      }
                    `}
                  >
                    {menu.label}

                    <ChevronDown
                      size={14}
                      className={`
                        transition-transform
                        ${
                          mobileSubmenu === menu.label
                            ? 'rotate-180'
                            : ''
                        }
                      `}
                    />
                  </button>

                  {mobileSubmenu === menu.label && (
                    <div className="pb-2 pl-4 flex flex-col gap-1">

                      {menu.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="
                            text-[#0a1a3d]
                            text-sm
                            py-2
                          "
                        >
                          {item.label}
                        </Link>
                      ))}

                    </div>
                  )}
                </>
              ) : (

                /* MOBILE LINK BIASA */
                <Link
                  href={menu.href || '#'}
                  onClick={() => setIsOpen(false)}
                  className={`
                    block
                    text-sm
                    font-medium
                    py-2.5
                    px-2
                    transition-colors
                    duration-500
                    ${
                      !isHomePage
                        ? 'text-white'
                        : isScrolled
                          ? 'text-black'
                          : 'text-white'
                    }
                  `}
                >
                  {menu.label}
                </Link>

              )}

            </div>
          ))}


          {/* MOBILE PENDAFTARAN */}
          <button
            className="
              sm:hidden
              bg-white
              text-[#3d5a74]
              text-sm
              font-medium
              px-4
              py-2.5
              rounded-full
              mt-3
            "
          >
            Pendaftaran
          </button>

        </div>
      )}

    </nav>
  );
}