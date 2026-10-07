import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StudentSection from "./components/StudentSection";
import TrainingSchedule from "./components/TrainingSchedule";
import Instructor from "./components/Instructor";
import Location from "./components/Location";
import Footer from "./components/Footer";

import { TRAININGS } from "./data/club";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A]">
      <Navbar />

      <main>
        <Hero />

        <StudentSection />

        <TrainingSchedule trainings={TRAININGS} />

        <Instructor />

        <Location />
      </main>

      <Footer />
    </div>
  );
}

