import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="relative w-full py-20 px-6 flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f2a5a 0%, #1a4a9a 100%)",
      }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(46,122,204,0.25) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-4 max-w-2xl">
        <h2
          className="text-white font-bold font-playfair leading-tight"
          style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
        >
          Ready to Start Your Farm?
        </h2>
        <p className="text-white/75 font-lato text-base leading-relaxed">
          Contact us today for a free consultation on shrimp seed requirements.
        </p>
        <Link
          href="/contact"
          className="mt-2 px-10 py-3.5 bg-white text-[#1a3a7a] text-sm font-bold font-lato rounded-md border-2 border-white hover:bg-transparent hover:text-white transition-all duration-200 hover:-translate-y-0.5"
        >
          Enquire Now
        </Link>
      </div>
    </section>
  );
}