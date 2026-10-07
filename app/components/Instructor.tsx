import { Lora } from "next/font/google";
import Image from "next/image"; // Import komponentu Image dla optymalizacji zdjęć
import { INSTRUCTOR } from "../data/club";

const display = Lora({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  display: "swap",
});

export default function Instructor() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-100 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-3">
          <div className="flex justify-center">
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-[#C8102E] bg-neutral-200 shadow-xl sm:h-64 sm:w-64">
              <Image
                src="/assets/instruktor.jpg" 
                alt={`Zdjęcie instruktora: ${INSTRUCTOR.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 224px, 256px"
                priority 
              />
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded bg-black/80 px-3 py-1 text-center text-xs font-bold tracking-wider text-white backdrop-blur-sm border border-white/10">
                <span className={display.className}>{INSTRUCTOR.rank}</span>
              </div>
            </div>
          </div>

          <div className="text-center md:col-span-2 md:text-left">
            <span className="text-sm font-bold uppercase tracking-widest text-[#C8102E]">
              Prowadzący zajęcia
            </span>

            <h2
              className={`${display.className} mt-2 text-4xl font-bold`}
            >
              {INSTRUCTOR.name}
            </h2>

            <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
              {INSTRUCTOR.rank}
            </p>

            <p className="mt-4 leading-relaxed text-neutral-600">
              {INSTRUCTOR.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
