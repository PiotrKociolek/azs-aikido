import { Lora } from "next/font/google";

const display = Lora({
  subsets: ["latin", "latin-ext"], // Gwarantuje poprawne wyświetlanie polskich znaków
  weight: ["500", "700"],          // Podmieniono z 800 na maksymalne dla Lora pogrubienie 700
  display: "swap",
});

type Training = {
  day: string;
  sessions: {
    time: string;
    group: string;
  }[];
};

type TrainingScheduleProps = {
  trainings: Training[];
};

export default function TrainingSchedule({
  trainings,
}: TrainingScheduleProps) {
  return (
    <section
      id="grafik"
      className="relative overflow-hidden py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C8102E]/5 blur-2xl"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center sm:text-left">
          <h2
            className={`${display.className} text-4xl font-bold leading-tight sm:text-5xl`}
          >
            Harmonogram treningów
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 bg-[#D4AF37] sm:mx-0" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {trainings.map(({ day, sessions }) => (
            <article
              key={day}
              className="rounded-b-md border-t-8 border-[#C8102E] bg-black p-8 text-white shadow-xl sm:p-10"
            >
              <h3
                className={`${display.className} text-3xl font-bold text-[#D4AF37] sm:text-4xl`}
              >
                {day}
              </h3>

              <ul className="mt-8 divide-y divide-white/10">
                {sessions.map((session) => (
                  <li
                    key={session.time}
                    className="py-5 first:pt-0 last:pb-0"
                  >
                    <p className="text-2xl font-semibold tabular-nums text-white">
                      {session.time}
                    </p>

                    <p className="mt-1.5 text-sm tracking-wide text-white/70">
                      {session.group}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
