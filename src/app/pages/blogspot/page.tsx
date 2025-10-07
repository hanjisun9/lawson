import Image from "next/image";

export default function BlogSpot() {
  return (
    <div className="min-h-screen mx-25 flex items-center justify-start">
      <div className="relative mt-8 px-10 h-130 w-390 flex flex-col md:flex-row items-center justify-center gap-8 bg-gradient-to-r from-[#0371c8] to-[#8DD8FF]">
        
        {/* Layer background pattern transparan */}
        <div className="absolute inset-0 bg-[url('/bulat.png')] bg-repeat bg-center bg-[length:1100px_400px] opacity-30"></div>

        {/* Bagian kiri */}
        <div className="relative z-10 flex-1 text-white flex flex-col justify-center items-start gap-4">
          <h1 className="text-[65px] font-semibold leading-tight mb-5 font-rubik">
            LAWSON <br /> INDONESIA
          </h1>
          <p className="text-2xl mt-3">
            Lawson Station, the Authentic Japanese Food~
          </p>
          <button className="mt-8 bg-white text-[#0371c8] h-15 px-6 py-2 rounded-full font-bold text-[20px]">
            Read More
          </button>
        </div>

        {/* Bagian kanan */}
        <div className="relative z-10 flex-1 flex justify-center items-center">
          <Image
            src="/torichizu.jpg"
            alt="Tori Chizu"
            width={450}
            height={300}
            className="object-cover scale-205 ml-[-15] mt-0.5"
          />
        </div>
      </div>
    </div>
  );
}
