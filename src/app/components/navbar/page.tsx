"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const navItems = [
    "Home",
    "Article",
    "News",
    "Promo",
    "Our Store",
    "Contact Us",
    "Corporate",
    "B2B",
    "Career",
  ];

  return (
      <nav className="w-full fixed top-16 left-0 bg-white z-50 border-b border-gray-200">
      <div className="flex justify-between items-center h-22 px-12">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="LAWSON"
          width={150}
          height={40}
          className="object-contain scale-120 ml-10"
        />

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-[23px] font-bold text-[#1D1616] mr-18">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={() => setActive(item)}
                className={`transition-colors flex items-center ${
                  active === item
                    ? "font-rubik text-[#0071CE] relative after:content-[''] after:absolute after:bottom-[-28px] after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[4px] after:bg-[#F49BAB] after:mx-auto after:mt-2 after:rounded cursor-pointer"
                    : "text-[#1D1616] hover:text-[#0071CE]"
                } ${
                  item === "B2B" || item === "Career"
                    ? "font-normal text-[20px] mt-1"
                    : "font-semibold"
                }`}
              >
                {item}
                {item === "Corporate" && (
                  <ChevronDown size={25} strokeWidth={3} className="ml-3 text-[#0071CE]" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
