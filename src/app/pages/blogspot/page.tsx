import Image from "next/image";

export default function BlogSpot() {
  return (
    <div className="min-h-screen mx-25 flex items-center justify-start">
      <div className="mt-8 bg-gradient-to-r from-[#0371c8] to-[rgba(59, 130, 246, 0.5)] px-10 h-130 w-390 flex flex-col md:flex-row items-center justify-center gap-8">
        
        {/* Bagian kiri */}
        <div className="flex-1 text-white flex flex-col justify-center items-start gap-4">
          <h1 className="text-6xl font-bold leading-tight">
            LAWSON <br /> INDONESIA
          </h1>
          <p className="text-2xl mt-5">
            Lawson Station, the Authentic Japanese Food~
          </p>
          <button className="mt-8 bg-white text-[#0371c8] h-15 px-6 py-2 rounded-full font-bold text-[20px]">
            Read More
          </button>
        </div>

        {/* Bagian kanan */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/torichizu.jpg"
            alt="Tori Chizu"
            width={450}
            height={300}
            className="object-cover scale-205 ml-[-15]"
          />
        </div>
      </div>
    </div>
  );
}
