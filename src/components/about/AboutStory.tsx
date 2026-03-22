const highlights = [
  "Certified broodstock imports",
  "ISO-compliant hatchery",
  "Sustainable practices",
  "Post-sale farmer support",
];

export default function AboutStory() {
  return (
    <section className="bg-[#f7f6f1] py-20 px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* ── Left: Text ── */}
        <div>
          <p className="text-[#c8a84b] text-xs font-bold tracking-[3px] uppercase font-lato mb-3">
            Who We Are
          </p>
          <h2
            className="text-[#1a4a3a] font-playfair font-normal leading-[1.2] mb-6"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Built on Expertise &amp; Trust
          </h2>

          <p className="text-gray-600 font-lato text-[15px] leading-relaxed mb-5">
            EcoHatch began as a small family-run hatchery with a vision to bring
            world-class shrimp seed genetics to local farmers. Over the years, we
            have grown into one of the region's most trusted shrimp seed
            producers, serving over 500 farmers across Tamil Nadu and beyond.
          </p>
          <p className="text-gray-600 font-lato text-[15px] leading-relaxed mb-8">
            Our team of aquaculture scientists and hatchery technicians combine
            international best practices with deep local knowledge to deliver
            consistent, high-quality results.
          </p>

          {/* Checkmarks grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#e8f5f0] flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5.2L4 7.2L8 3"
                      stroke="#1a7a50"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-gray-600 text-sm font-lato leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Two photo placeholders ── */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#c8e6df] rounded-2xl h-[188px] flex items-center justify-center">
            <span className="text-[#3a7a6a] text-xs font-bold tracking-[2px] uppercase font-lato">
              Hatchery Facility Photo
            </span>
          </div>
          <div className="bg-[#c8e6df] rounded-2xl h-[160px] flex items-center justify-center">
            <span className="text-[#3a7a6a] text-xs font-bold tracking-[2px] uppercase font-lato">
              Team Photo
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}