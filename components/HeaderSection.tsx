import ButtonSection from "./ButtonSection";

export function HeaderSection() {
  return (
    <div className="bg-primary px-4 py-3">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white">
          50roadtrips
        </h1>
        <ButtonSection />
      </div>
    </div>
  );
}
