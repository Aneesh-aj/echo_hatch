export default function BlogCTA() {
  return (
    <section className="bg-[#f4f6fb] pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div
          className="rounded-2xl px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background:
              "linear-gradient(135deg, #0f2a5a 0%, #1a4a9a 60%, #2e7acc 100%)",
          }}
        >
          <div className="flex flex-col gap-3 max-w-xl">
            <p className="text-[#c8a84b] text-xs font-bold tracking-[3px] uppercase font-lato">
              Stay Informed
            </p>
            <h2
              className="text-white font-playfair font-normal leading-tight m-0"
              style={{ fontSize: "clamp(22px, 3.5vw, 34px)" }}
            >
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/70 text-sm font-lato leading-relaxed m-0">
              Get the latest aquaculture insights, hatchery updates, and
              industry news delivered directly to your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-xl text-sm font-lato bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 min-w-[240px]"
            />
            <button className="bg-[#c8a84b] hover:bg-[#b8983b] text-white font-semibold font-lato text-sm px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}