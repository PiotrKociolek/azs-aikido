import { Lora } from "next/font/google";

const display = Lora({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  display: "swap",
});

export default function StudentSection() {
  return (
    <section
      id="studenci"
      className="border-b border-neutral-200 bg-white py-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border-l-4 border-[#D4AF37] bg-neutral-50 p-6 shadow-sm">
            <h3 className={`${display.className} text-xl font-bold uppercase tracking-wide text-black`}>
              Treningi dla studentów i nie tylko
            </h3>

            <p className="mt-2 leading-relaxed text-neutral-600">
              Nasze drzwi są otwarte dla każdego. Niezależnie od wieku
              czy kondycji fizycznej, każdy znajdzie tu miejsce dla siebie.
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-[#C8102E] bg-neutral-50 p-6 shadow-sm">
            <h3 className={`${display.className} text-xl font-bold uppercase tracking-wide text-black`}>
              Zaliczenie WF na ANS
            </h3>

            <p className="mt-2 leading-relaxed text-neutral-600">
              Jesteś studentem Akademii Nauk Stosowanych w Nowym Sączu?
              Trenując regularnie aikido w naszej sekcji,{" "}
              <span className="font-semibold text-black">
                możesz bezproblemowo zaliczyć obowiązkowe zajęcia
                z wychowania fizycznego (WF)*
              </span>
              .
            </p>
          </div>
        </div>

        <p className="mt-6 rounded bg-neutral-100 px-4 py-3 text-center text-sm font-medium text-neutral-700">
          💡{" "}
          <span className="font-bold">
            Ważna informacja:
          </span>{" "}
          Treningi są całkowicie{" "}
          <span className="font-bold text-[#C8102E]">
            darmowe
          </span>
          ! Jeśli formuła zajęć Ci się spodoba i postanowisz zostać
          z nami na stałe, wymagane jest jedynie wyrobienie członkostwa
          w AZS.
        </p>
      </div>
    </section>
  );
}
