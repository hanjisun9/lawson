import Image from "next/image";

export default function AppBar() {
  return (
    <header className="w-full fixed top-0 left-0 bg-[#0371c8] h-22 z-50">
  <div className="mx-auto flex justify-end items-center py-2 px-25">
    <button className="h-12 w-21 flex items-center gap-2 bg-white text-[#526D82] px-3 py-1 rounded-full shadow-sm">
      <Image
        src="/globe.png"
        alt="globe"
        width={27}
        height={27}
      />
      <span className="text-lg font-normal font-rubik">EN</span>
    </button>
  </div>
</header>

  );
}
