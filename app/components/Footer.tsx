export default function Footer() {
  return (
    <footer className="border-t-4 border-[#D4AF37] bg-black py-8 text-center text-sm text-white/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p>
          © 2026 AZS Aikido Nowy Sącz. Wszelkie prawa zastrzeżone.
        </p>

        <p className="text-xs text-white/40">
          Zaprojektowane z szacunkiem do tradycji.
        </p>
      </div>
    </footer>
  );
}