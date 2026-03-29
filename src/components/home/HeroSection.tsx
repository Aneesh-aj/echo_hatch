import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative w-full py-5 flex items-center justify-center overflow-hidden"
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
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 max-w-3xl gap-5">

        {/* Badge */}
        <span className="inline-block border border-white/50 rounded-full px-5 py-2 text-[11px] bg-white/10 font-bold tracking-[2.5px] uppercase text-white/90 font-lato">
          Premium Aquaculture Solutions
        </span>

        {/* Headline */}
        <h1
          className="text-white font-bold leading-[1.15] tracking-tight m-0 font-playfair b"
          style={{ fontSize: "clamp(36px, 6vw, 64px)" }}
        >
          Quality Shrimp Seeds
          <br />
          From Trusted Hatchery
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/80 leading-relaxed max-w-[480px] m-0 font-lato font-light"
          style={{ fontSize: "clamp(14px, 1.8vw, 18px)" }}
        >
          We produce high-quality shrimp seeds with optimal survival rates,
          backed by decades of expertise in aquaculture and hatchery operations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <Link
            href="/contact"
            className="px-8 py-3.5 text-sm md:text-sm font-bold font-lato bg-white text-[#1a3a7a] rounded-md border-2 border-white hover:bg-[#f0f4ff] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get a Quote
          </Link>
          <Link
            href="/services"
            className="px-8 py-3.5 text-sm md:text-sm font-bold font-lato bg-transparent text-white rounded-md border-2 border-white/70 hover:bg-white/10 hover:border-white transition-all duration-200 hover:-translate-y-0.5"
          >
            Our Services
          </Link>
        </div>

      </div>
    </section>
  );
}