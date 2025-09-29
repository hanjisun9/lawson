import Image from "next/image";
import Link from "next/link";

export default function News() {
  const news = [
    {
      img: "/hadirkan.png",
      title:
        "Lawson Hadirkan Sensasi Baru: Jadi yang Pertama Inovasi Oden dan Ramen Rasa...",
      desc: "Perpaduan Unik: Oden & Ramen Rasa Matcha Kini Hadir di Lawson",
      date: "25-Sep-2025",
    },
    {
      img: "/botol.png",
      title:
        "83 Ribu Botol Plastik Berhasil di Tukar Oleh Sekitar Seribu Warga Melalui RVM di Lawso...",
      desc: "Dua Tahun RVM Lawson: 83 Ribu Botol Plastik Terkumpul, 8,2 Juta Gram Karbon Berhasil Dikurangi",
      date: "17-Sep-2025",
    },
    {
      img: "/espresso.png",
      title:
        "Espresso Gold, Tren Baru Kopi Americano dari Lawson untuk Pecinta Kopi",
      desc: "Espresso Gold Lawson: Perpaduan Cita Rasa Arabica dan Keanggunan Budaya Indonesia",
      date: "12-Sep-2025",
    },
  ];

  return (
    <div className="px-26 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-[43px] font-semibold text-[#1D1616]">
          Check out our <span className="text-[#0371c8]"> latest news</span>
        </h1>
        <Link href="#" className="text-[#0371c8] text-[35px]">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-6 ">
        {news.map((item, idx) => (
          <div
            key={idx}
            className="group overflow-hidden rounded-xl cursor-pointer transition duration-300"
          >
            <div className="relative w-full h-73 overflow-hidden ">
              <Image
                src={item.img}
                alt=""
                width={600}
                height={500}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

              <span className="absolute bottom-5 left-5 bg-white text-[#1D1616] px-4 py-1 rounded-full text-[18px] h-10">
                Information
              </span>

              <span className="absolute bottom-8 right-5 text-white text-[18px]">
                {item.date}
              </span>
            </div>

            <div className="p-4 bg-white/10 group-hover:bg-white transition-colors duration-500 shadow-md hover:shadow-[#0371c8] rounded-b-xl">
              <h2 className="font-semibold text-[23px] text-[#1D1616] line-clamp-2">
                {item.title}
              </h2>
              <p className="text-lg text-[#1D1616] mt-1 line-clamp-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
