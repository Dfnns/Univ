
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';
import localFont from "next/font/local";



const apacih = localFont({
  src: "/../../font/frizOG.ttf",
});

export default function SejarahPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Banner Header */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/gedung-polbis.jpeg"
          alt="Gedung Politeknik Bisnis Digital Indonesia"
          className="absolute inset-0 w-700 h-100 object-cover"
        />
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-l from-[#007BC0]/76 to-[#243E80]" />


        <div className="relative z-10 h-full flex items-end px-6 md:px-16 pb-6 md:pb-8">
          <h1 className={`${apacih.className} text-white text-[50px] md:text-5xl  mt-42 ms-6`}>Sejarah</h1>
        </div>
      </div>
         
      {/* Konten */}
      <div className="relative max-w-3xl mx-auto px-6 md:px-16 py-16 md:py-20 text-center overflow-hidden">
        <img
          src="/logo.png"
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] opacity-10 pointer-events-none"
        />

        <h2 className= {`${apacih.className} text-xl text-[50px] font-bold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent mb-20 mt-20`}>Sejarah</h2>

        <div className="relative space-y-6 text-sm text-gray-600 leading-relaxed">
          <p>
            <span className="font-bold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent">18 Oktober 2023</span> didirikan Politeknik Bisnis
            Digital dengan visi menjadi institusi pendidikan vokasi terdepan dalam
            menghasilkan tenaga profesional di bidang bisnis digital dan teknologi
            informasi.
          </p>

          <p>
            Berawal dari kebutuhan industri akan tenaga ahli yang kompeten di era
            transformasi digital, kami hadir dengan program studi yang dirancang khusus
            untuk menjawab tantangan dunia kerja modern.
          </p>

          <p>
            Dalam perjalanannya, Politeknik Bisnis Digital terus mengejar prestasi untuk
            menghadapi perubahan dunia yang semakin modern.
          </p>

          <p>
            Politeknik Bisnis Digital merupakan institusi pendidikan vokasi yang
            berfokus pada pengembangan sumber daya manusia unggul di bidang bisnis
            digital dan teknologi informasi menuju pendidikan yang berorientasi pada
            kebutuhan industri.
          </p>
        </div>
      </div>
      <Footer />
      
    </div>
  );
}