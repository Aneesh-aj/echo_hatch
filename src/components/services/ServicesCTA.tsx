import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section
      className="relative w-full py-20 px-6 flex items-center justify-center overflow-hidden"
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
            "radial-gradient(ellipse at 30% 50%, rgba(46,122,204,0.2) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-5 max-w-xl">
        <h2
          className="text-white font-bold font-playfair leading-tight m-0"
          style={{ fontSize: "clamp(22px, 4vw, 36px)" }}
        >
          Interested in Our Services?
        </h2>
        <p
          className="text-white/80 font-lato font-light leading-relaxed m-0"
          style={{ fontSize: "clamp(14px, 1.8vw, 17px)" }}
        >
          Fill out our enquiry form and we'll get back to you within 24 hours.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <Link
            href="/contact"
            className="px-8 py-3.5 text-sm font-bold font-lato bg-white text-[#1a3a7a] rounded-md border-2 border-white hover:bg-[#f0f4ff] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Send Enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}