export default function AboutHero() {
  return (
    <section className="bg-[#d9eeea] w-full py-20 px-6 flex flex-col items-center justify-center text-center">
      <p className="text-[#c8a84b] text-xs font-bold tracking-[3px] uppercase font-lato mb-3">
        Our Story
      </p>
      <h1
        className="text-[#1a4a3a] font-playfair font-normal leading-tight mb-4"
        style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
      >
        About EcoHatch
      </h1>
      <p className="text-[#3a5a52] font-lato text-base leading-relaxed max-w-[480px]">
        Pioneering sustainable shrimp aquaculture with over 15 years of hatchery
        expertise.
      </p>
    </section>
  );
}