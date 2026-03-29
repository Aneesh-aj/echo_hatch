const milestones = [
  {
    year: "2009",
    title: "Founded Allwin Aquatech Hatchery",
    description:
      "Started with 2 hatchery tanks and a small broodstock program in Kumarapalayam.",
  },
  {
    year: "2014",
    title: "First International Broodstock Import",
    description:
      "Established partnerships with certified genetics programs in Thailand and Singapore.",
  },
  {
    year: "2018",
    title: "Launched Consultancy Division",
    description:
      "Expanded services to include full farm setup consultancy and technical training for farmers.",
  },
  {
    year: "2023",
    title: "Opened Allwin Aquatech Associate Shop",
    description:
      "Launched retail division supplying premium feed, probiotics and aquaculture inputs.",
  },
];

export default function AboutMilestones() {
  return (
    <section className="bg-[#f4f6fb] pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">

        {/* ── Milestones Timeline ── */}
        <div className="mb-20">
          <p className="text-[#c8a84b] text-xs font-bold tracking-[3px] uppercase font-lato mb-3">
            Our Journey
          </p>
          <h2
            className="text-[#1a3a7a] font-playfair font-normal leading-tight mb-10"
            style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
          >
            Milestones
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[9px] top-3 bottom-3 w-[2px] bg-[#c5d5ee]" />

            <div className="flex flex-col gap-10">
              {milestones.map(({ year, title, description }) => (
                <div key={year} className="flex gap-6 items-start relative">
                  {/* Circle dot */}
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border-[2.5px] border-[#1a3a7a] bg-white flex items-center justify-center z-10 mt-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a3a7a]" />
                  </div>

                  {/* Content */}
                  <div>
                    <span className="text-[#1a3a7a] text-sm font-bold font-lato block mb-0.5">
                      {year}
                    </span>
                    <h4 className="text-[#0f2a5a] text-[15px] font-bold font-lato mb-1">
                      {title}
                    </h4>
                    <p className="text-gray-500 text-sm font-lato leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mission & Vision ── */}
        <div>
          <p className="text-[#c8a84b] text-xs font-bold tracking-[3px] uppercase font-lato mb-3">
            Our Values
          </p>
          <h2
            className="text-[#1a3a7a] font-playfair font-normal leading-tight mb-8"
            style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
          >
            Mission &amp; Vision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Mission — blue left border */}
            <div className="bg-white rounded-xl border border-gray-100 pl-5 pr-6 py-6 border-l-4 border-l-[#1a3a7a]">
              <h3 className="text-[#0f2a5a] text-base font-bold font-lato mb-3">
                Our Mission
              </h3>
              <p className="text-gray-500 text-sm font-lato leading-relaxed">
                To empower shrimp farmers with superior quality seeds and
                knowledge, enabling sustainable and profitable aquaculture
                throughout India.
              </p>
            </div>

            {/* Vision — gold left border */}
            <div className="bg-white rounded-xl border border-gray-100 pl-5 pr-6 py-6 border-l-4 border-l-[#c8a84b]">
              <h3 className="text-[#0f2a5a] text-base font-bold font-lato mb-3">
                Our Vision
              </h3>
              <p className="text-gray-500 text-sm font-lato leading-relaxed">
                To be the most trusted name in shrimp hatchery operations in
                South Asia, setting the benchmark for quality, sustainability
                and farmer support.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}