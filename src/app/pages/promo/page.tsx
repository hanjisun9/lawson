import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Promo() {
    const promos = [
        { img: "/promo_minum.jpeg", link: "#" },
        { img: "/promo_ramen.jpeg", link: "#" },
        { img: "/promo_chicken.jpeg", link: "#" },
        { img: "/promo_kopi.jpeg", link: "#" },
        { img: "/promo_tori.jpeg", link: "#" },
        { img: "/promo_yakitori.png", link: "#" },
        { img: "/promo_coconut.png", link: "#" },
        { img: "/promo_capt.jpeg", link: "#" },
        { img: "/promo_spicy.jpg", link: "#" },
    ];

    return (
        <div className="px-26 py-12">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-[43px] font-semibold text-[#1D1616]">
                    Hot <span className="text-[#0371c8]"> Promo</span>
                </h1>
                <Link href="#" className="text-[#0371c8] text-[35px]">
                    View All
                </Link>
            </div>

            {/* Promo Scroll Area */}
            <div className="mt-10 overflow-auto h-[420px] pb-4 scrollbar-thin scrollbar-thumb-[#0371c8] scrollbar-track-gray-200">
                <div className="flex gap-6">
                    {promos.map((promo, index) => (
                        <div
                        key={index}
                            className="min-w-[300px] max-w-[300px] flex flex-col transition-all duration-300 hover:scale-[1.02]"
                        >
                            {/* Bagian gambar (tanpa background putih) */}
                            <Image
                                src={promo.img}
                                alt=""
                                width={300}
                                height={350}
                                className="rounded-t-xl object-cover"
                            />

                            {/* Bagian bawah putih */}
                            <div className="rounded-b-xl shadow-md hover:shadow-[#0371c8] overflow-hidden">
                                <div className="flex justify-between items-center p-4 bg-white cursor-pointer transition-colors duration-300 group">
                                    <span className="text-xl text-[#1D1616] transition-colors duration-300 group-hover:text-[#0371c8]">
                                        Learn More
                                    </span>
                                    <button className="bg-[#0371c8] text-white rounded-[12px] w-12 h-10 p-2">
                                        <ArrowRight size={30} strokeWidth={2} className="mt-[-4px]" />
                                    </button>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
