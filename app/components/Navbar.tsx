import { Lora } from "next/font/google";

const display = Lora({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  display: "swap",
});

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b-4 border-[#C8102E] bg-black text-white shadow-md">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4">
        <span
          aria-hidden="true"
          className="h-5 w-5 rounded-full bg-[#C8102E]"
        />

        <span
          className={`${display.className} text-xl font-bold sm:text-2xl flex flex-wrap items-center`}
        >
          <span className="mr-6">AZS Aikido</span>
          <span className="text-[#D4AF37]">
            Nowy Sącz
          </span>
        </span>
      </div>
    </nav>
  );
}
