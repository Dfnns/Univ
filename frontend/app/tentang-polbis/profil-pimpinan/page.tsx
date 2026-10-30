import Navbar from '../../components/navbar';

const pimpinan = [
  { nama: 'Dr. Budi Santoso, M.M.', jabatan: 'Direktur', foto: '/dosens.png' },
  { nama: 'Dr. Budi Santoso, M.M.', jabatan: 'Direktur', foto: '/dosens.png' },
  { nama: 'Dr. Budi Santoso, M.M.', jabatan: 'Direktur', foto: '/dosens.png' },
  { nama: 'Dr. Budi Santoso, M.M.', jabatan: 'Direktur', foto: '/dosens.png' },
  { nama: 'Dr. Budi Santoso, M.M.', jabatan: 'Direktur', foto: '/dosens.png' },
  { nama: 'Dr. Budi Santoso, M.M.', jabatan: 'Direktur', foto: '/dosens.png' },
];

export default function ProfilPimpinanPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <Navbar />


       <div className="relative h-42 md:h-70 overflow-hidden bg-gradient-to-l from-[#007BC0] to-[#243E80]">
      <img
        src="/logo.png"
        alt=""
        className="absolute left-265 top-1/2 -translate-y-1/2 w-64 md:w-145 opacity-13 pointer-events-none"
      />
      <div className="relative z-10 h-full flex items-end px-6 md:px-16 pb-6 md:pb-8">
        <h1 className="text-white text-2xl md:text-[38px] font-bold mb-2 ">Profil Pimpinan</h1>
      </div>
    </div>

      <div className="max-w-4xl mx-auto px-6 py-16 mt-30">

        <div className="grid grid-cols-3 gap-6">
          {pimpinan.map((item, index) => (
            <div
              key={index}
              className={`relative w-full sm:w-56 h-74 rounded-xl overflow-hidden flex-shrink-0 mb-8 ${
                index >= 3 ? 'translate-x-1/2' : ''
              }`}
            >
              <img src={item.foto} alt={item.nama} className="w-full h-full object" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030C20]/95 via-[#103283]/55 to-transparent" />
              <div className="absolute bottom-3 left-4 right-3">
                <p className="text-white text-xs font-bold leading-snug">{item.nama}</p>
                <p className="text-white text-xs font-semibold">{item.jabatan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}