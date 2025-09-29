import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full h-118 bg-[#0371c8] text-white px-26 py-20">
            {/* Bagian atas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

                {/* Kiri: Logo + Alamat */}
                <div className="flex flex-col gap-4">
                    <Image
                        src="/logo2.png"
                        alt="logo"
                        width={160}
                        height={50}
                        className="scale-120 ml-5"
                    />
                    <p className="font-normal text-[25px] mt-5">PT Lancar Wiguna Sejahtera</p>
                    <p className="text-[23px] font-normal mt-5">
                        Gedung Alfa Tower Lantai 30 Jl. Jalur Sutera Barat Kav. 7-9,
                        Panunggangan Timur, Pinang, Kota Tangerang Banten
                    </p>
                </div>

                {/* Tengah: Menu */}
                <div className="flex flex-col gap-3 ml-30">
                    <h3 className="font-bold text-[25px]">Menu</h3>
                    <a href="#" className="text-[22px]">
                        Career Opportunity
                    </a>
                    <a href="#" className="text-[22px]">
                        B2B System
                    </a>
                </div>

                {/* Kanan: Get In Touch */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-[25px]">Get In Touch</h3>
                    <div className="flex gap-20 mt-2">
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center cursor-pointer">
                            <Facebook className="w-9 h-9 text-[#0371c8]" />
                        </div>
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center cursor-pointer">
                            <Twitter className="w-9 h-9 text-[#0371c8]" />
                        </div>
                        <Instagram className="w-12 h-12 cursor-pointer mt-1" />
                        <div className="w-15 h-10 rounded-[15px] bg-white flex items-center justify-center cursor-pointer mt-1">
                            <Youtube className="w-12 h-12 text-[#0371c8]" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Garis Gradient */}
            <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#E9B3FB] to-transparent"></div>

            {/* Teks bawah */}
            <div className="pt-4 flex flex-col md:flex-row justify-between items-center">
                <p className="font-semibold text-[16px]">
                    &copy; 2025 PT. Lancar Wiguna Sejahtera
                </p>
                <p className="font-semibold text-[16px]">
                    All Right Reserved | Terms and Conditions | Privacy Policy
                </p>
            </div>

        </footer>
    );
}
