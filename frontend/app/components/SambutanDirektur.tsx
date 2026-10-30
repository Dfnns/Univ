import { Ancizar_Serif } from 'next/font/google';
import localFont from "next/font/local";



const apacih = localFont({
  src: "/../font/frizOG.ttf",
});

const ancizarSerif = Ancizar_Serif({ subsets: ['latin'], weight: ['400', '700'] })

const SambutanDirektur = () => {
  return (
    
<section className="w-full flex justify-center py-10 px-24 mt-25">
  <div className="relative w-[887px] h-[325px]">

    {/* Judul */}
    <h2
      className={`${apacih.className} absolute top-[64px] left-[190px] text-[37px] leading-none font-bold bg-gradient-to-b from-[#007BC0] to-[#243E80] bg-clip-text text-transparent`}
    >
      Sambutan Rektor   
    </h2>

    {/* Box Sambutan */}
    <div className="absolute top-[121px] left-1/2 -translate-x-1/2 w-[540px] min-h-[190px] rounded-[24px] border border-[#5CA4D4] z-0 px-[70px] py-[30px]">

      {/* Isi Sambutan */}
      <p className="text-[13px] text-white/80 leading-[20px] font-medium">
        “Selamat datang di Politeknik Bisnis Digital Indonesia. Kami
        berkomitmen menghadirkan pendidikan vokasi yang inovatif,
        relevan dengan kebutuhan industri, serta membentuk generasi
        yang kompeten, kreatif, dan siap menghadapi tantangan di era digitalll.”
      </p>

      {/* Nama Direktur */}
      <div className="mt-5 text-right mt-8">
        <p className={`${apacih.className}text-[13px] font-semibold text-white`}>
          Dr. Bdn. Lusy Pratiwi, S.Tr.Keb., M.K.M


        </p>
        <p className="text-[11px] text-white/70">
        Rektor Universitas Tiara Bunda
        </p>
      </div>

    </div>

    {/* Efek Blur */}
    <div className="absolute top-[10px] left-[160px] w-[100px] h-[120px] bg-[#42679C]/50 blur-[30px] z-10 pointer-events-none" />

  </div>
</section>
  );
};

export default SambutanDirektur;