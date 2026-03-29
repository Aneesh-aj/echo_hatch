export default function AboutHero() {
  return (
    <section
      className="relative w-full py-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f2a5a 0%, #1a4a9a 50%, #2e7acc 100%)",
      }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(46,122,204,0.2) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 max-w-2xl">
        <span className="inline-block border border-white/50 rounded-full px-5 py-2 text-[11px] bg-white/10 font-bold tracking-[2.5px] uppercase text-white/90 font-lato">
          Our Story
        </span>
        <h1
          className="text-white font-bold font-playfair leading-tight m-0"
          style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
        >
          About Allwin Aquatech
        </h1>
        <p
          className="text-white/80 font-lato font-light leading-relaxed max-w-[480px] m-0"
          style={{ fontSize: "clamp(14px, 1.8vw, 17px)" }}
        >
          Pioneering sustainable shrimp aquaculture with over 15 years of
          hatchery expertise.
        </p>
      </div>
    </section>
  );
}