import Image from "next/image";

export default function Lawson() {
    return (
        <div className="px-26 py-4">
            <div className="bg-white/15 h-200 flex gap-12">
            <div className="w-2/5">
                <Image
                    src="/toko.jpg"
                    alt=""
                    width={500}
                    height={500}
                    quality={100}
                    className="object-contain object-left h-full w-full"
                />
                </div>
                
                <div className="w-1/2">
                <h1 className="text-[45px] font-semibold text-[#1D1616] mt-10">
                    Welcome to Lawson
                </h1>
                <p className="text-[22px] text-[#1D1616] mt-3">
                    Lawson adalah convenience store yang menjual makanan dan minuman siap saji, serta menyediakan tempat yang nyaman untuk makan dan minum. 
                    Lawson merupakan ritel papan atas di Jepang yang mengembangkan usahanya ke berbagai negara dan resmi memasuki pasar ritel di Indonesia dengan menggandeng PT Midi Utama Indonesia Tbk pada 31 Juli 2011. 
                    Pada 12 Maret 2018, Lawson Indonesia resmi berdiri sebagai badan usaha dengan nama PT Lancar Wiguna Sejahtera dan operasional gerai mulai aktif Oktober 2018.
                </p>
                </div>
            </div>

        </div>
    )
}