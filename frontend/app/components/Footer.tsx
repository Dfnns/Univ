import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const tentangPolbis = [
  { label: 'Sejarah', href: '/tentang-polbis/sejarah' },
  { label: 'Visi dan Misi', href: '/tentang-polbis/visi-misi' },
  { label: 'Struktur Organisasi', href: '#' },
  { label: 'Profil Pimpinan', href: '#' },
];

const tautanCepat = [
  { label: 'Berita', href: '/berita' },
  { label: 'Mahasiswa', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200 bg-gray-50 overflow-hidden pt-10 mt-47">
      {/* Foto gedung - muncul di pojok kiri bawah */}
      <img
        src="/gedung.png"
        alt=""
        className="absolute left-[-100] bottom-0 w-80 md:w-99 opacity-50 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pb-10 mt-10 h-74 ">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo & Nama */}
          <div className="flex items-start gap-2 ">
            <img src="/univtiara.png" alt="Logo" className="w-11 h-11 rounded-full flex-shrink-0 mr-2" />
            <p className="text-blue-900 font-bold text-sm leading-snug">
              Universitas Tiara <br></br> Bunda
            </p>
          </div>

          {/* Hubungi Kami */}
          <div className="ms-5">
            <h3 className="text-blue-900 font-bold text-sm mb-3">Hubungi Kami</h3>
            <p className="text-gray-600 text-[13px] leading-relaxed mb-3 font-semibold mb-5">
              Jl. Galur No. 8, Krukut, Limo, Kota Depok, Jawa Barat
            </p>
            {/* <p className="text-gray-600 text-[13px] leading-relaxed font-semibold">
              Phone : +62 21 8047 3871<br />
              Mail : info@polbis.ac.id
            </p> */}
          </div>

          {/* Tentang POLBIS */}
          <div className="ms-5">
            <h3 className="text-blue-900 font-bold text-sm mb-3">Tentang POLBIS</h3>
            <ul className="flex flex-col gap-2">
              {tentangPolbis.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-600 text-xs hover:text-blue-700">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tautan Cepat */}
          <div>
            <h3 className="text-blue-900 font-bold text-sm mb-3">Tautan Cepat</h3>
            <ul className="flex flex-col gap-2">
              {tautanCepat.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-600 text-xs hover:text-blue-700">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
       <div className="flex justify-end gap-3 mt-8">
 <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition">
  <FaFacebookF size={16} color="white" />
</a>
<a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition">
  <FaInstagram size={16} color="white" />
</a>
<a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition">
  <FaYoutube size={16} color="white" />
</a>
</div>
      </div>
    </footer>
  );
}