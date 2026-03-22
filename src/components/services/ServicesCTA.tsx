import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section
      className="relative w-full py-20 px-6 flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f4a38 0%, #1a7a50 100%)",
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

      <div className="relative z-10 flex flex-col items-center text-center gap-4 max-w-xl">
        <h2
          className="text-white font-bold font-playfair leading-tight"
          style={{ fontSize: "clamp(22px, 4vw, 36px)" }}
        >
          Interested in Our Services?
        </h2>
        <p className="text-white/80 font-lato text-[15px] leading-relaxed">
          Fill out our enquiry form and we'll get back to you within 24 hours.
        </p>
        <Link
          href="/contact"
          className="mt-2 px-10 py-3 bg-white text-[#1a4a3a] text-sm font-bold font-lato rounded-md border-2 border-white hover:bg-transparent hover:text-white transition-all duration-200"
        >
          Send Enquiry
        </Link>
      </div>
    </section>
  );
}