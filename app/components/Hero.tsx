import { Lora } from "next/font/google";

const display = Lora({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  display: "swap",
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C8102E]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <span className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
          Tradycja • Dyscyplina • Rozwój
        </span>

        <h1
          className={`${display.className} mt-3 text-5xl font-bold leading-tight sm:text-7xl`}
        >
          Droga do harmonii
          <br />
          ciała i umysłu
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          Dołącz do sekcji AZS Aikido w Nowym Sączu. Treningi dopasowane
          do każdego poziomu zaawansowania. Zapraszamy studentów oraz
          wszystkich chętnych, którzy chcą rozpocząć swoją przygodę ze
          sztukami walki.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#grafik"
            className="rounded bg-[#C8102E] px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-[#A00D24]"
          >
            Zobacz grafik
          </a>

          <a
            href="#studenci"
            className="rounded border border-[#D4AF37] px-6 py-3 font-semibold text-[#D4AF37] transition-all hover:bg-[#D4AF37]/10"
          >
            Strefa Studenta ANS
          </a>
        </div>
      </div>
    </section>
  );
}
