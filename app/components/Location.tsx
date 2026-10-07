import { Lora } from "next/font/google";
import { LOCATION } from "../data/club";

const display = Lora({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  display: "swap",
});

export default function Location() {
  return (
    <section id="lokalizacja" className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="border-l-4 border-[#C8102E] pl-6">
          <span className="text-sm font-bold uppercase tracking-widest text-neutral-400">
            Dojazd
          </span>

          <h2
            className={`${display.className} mt-1 text-3xl font-bold sm:text-4xl`}
          >
            Gdzie nas znaleźć?
          </h2>
        </div>

        <div className="mt-10 grid items-center gap-6 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm sm:p-10 md:grid-cols-2">
          <div>
            <h3 className={`${display.className} text-2xl font-bold text-[#1A1A1A]`}>
              {LOCATION.name}
            </h3>

            <p className="mt-2 text-lg font-medium text-neutral-700">
              {LOCATION.address}
            </p>

            <p className="mt-4 rounded border-l-2 border-[#D4AF37] bg-neutral-50 p-4 text-sm text-neutral-500 leading-relaxed">
              {LOCATION.note}
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/GpxMCGnPY2Kx7cNo9"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-52 overflow-hidden rounded-lg border border-neutral-300 shadow-sm transition-transform hover:scale-[1.01] md:h-64"
          >
            {/* Warstwa maskująca z wycentrowanym przyciskiem akcji */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-4 transition-colors group-hover:bg-black/40">
              <span className="rounded bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-md transition-all duration-300 group-hover:bg-[#C8102E] group-hover:text-white group-hover:scale-105">
                Otwórz w Mapach Google
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
