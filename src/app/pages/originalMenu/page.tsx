"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Menu() {
    const menu = [
        {
            img: "/odeng.jpg",
            title: "Odeng",
            decs: "Odeng adalah fishcake merupakan kue yang terbuat dari campuran daging ikan dan tepung yang mempunyai cita rasa gurih dan bertekstur kenyal yang khas."
        },
        {
            img: "/oden.jpg",
            title: "Oden",
            decs: "Oden adalah salah satu masakan Jepang jenis nabemono. Oden merupakan campuran beberapa bahan yang direbus di dalam kuah dari dashi dan kecap asin. Bahan-bahan dimasukkan dalam oden adalah lobak, konnyaku, telur rebus, chikuwa, chikuwabu, dan lain sebagainya."
        },
        {
            img: "/onigiri.jpg",
            title: "Onigiri",
            decs: "Onigiri adalah nama Jepang untuk makanan berupa nasi yang dipadatkan sewaktu masih hangat sehingga berbentuk segitiga, bulat, atau seperti karung beras. Onigiri juga dikenal dengan nama lain omusubi. Istilah yang kabarnya dulu digunakan kalangan wanita di istana kaisar untuk menyebut onigiri."
        },
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % menu.length)
        }, 4000) // ganti tiap 4 detik
        return () => clearInterval(interval)
    }, [menu.length])

    return (
        <div className="w-full bg-gradient-to-r from-[#50589C] via-[#91ADC8] to-[#7A73D1] bg-[length:400%_400%] animate-gradient text-white h-120 py-10">
            <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                {/* Bagian kiri */}
                <div className="md:w-1/2 space-y-4 pl-25">
                    <h1 className="text-[50px] font-semibold text-center text-shadow-lg">Original Menu</h1>
                    <h3 className="text-[35px] font-semibold text-shadow">{menu[index].title}</h3>
                    <p className="text-[24px] leading-relaxed">
                        {menu[index].decs}
                    </p>
                </div>

                {/* Bagian kanan */}
                <div className="md:w-1/2 flex justify-end relative">
  {/* Kotak gambar utama */}
  <div className="relative w-[800px] h-[400px] ml-20 z-10">
    <Image
      src={menu[index].img}
      alt={menu[index].title}
      fill
      className="object-cover shadow-lg transition-opacity duration-700 rounded-lg"
    />
  </div>

  {/* Gambar tutul */}
  <Image
    src="/tutul.png"
    alt="extra"
    width={200}
    height={120}
    className="absolute bottom-[-30px] right-[20px] opacity-70 z-0"
  />
</div>


            </div>
        </div>
    )
}
