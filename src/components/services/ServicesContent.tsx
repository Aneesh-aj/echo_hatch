const services = [
  {
    id: 1,
    emoji: "🦐",
    bgColor: "bg-[#dce6f5]",
    title: "Shrimp Hatchery",
    description:
      "Production of high-quality shrimp seeds using certified broodstock. Our hatchery maintains strict biosecurity protocols and advanced water quality management.",
    tag: "Core Service",
    tagStyle: "bg-[#e8eef8] text-[#1a3a7a]",
  },
  {
    id: 2,
    emoji: "👨‍🌾",
    bgColor: "bg-[#fdf6e8]",
    title: "Farm Consultancy",
    description:
      "Expert guidance for shrimp farming and hatchery setup. We provide site assessment, water quality analysis, and stocking density recommendations.",
    tag: "Advisory",
    tagStyle: "bg-[#fdf0d8] text-[#b45309]",
  },
  {
    id: 3,
    emoji: "🏪",
    bgColor: "bg-[#e8eef8]",
    title: "Ecotech Associate Shop",
    description:
      "Premium aquaculture inputs including specialized feed, probiotics, water treatment chemicals, and disease prevention products.",
    tag: "Retail",
    tagStyle: "bg-[#e8eef8] text-[#1a3a7a]",
  },
];

const qualityItems = [
  {
    id: 1,
    emoji: "🏅",
    title: "Disease-Free Certification",
    description:
      "All broodstock tested and certified free from major shrimp pathogens including WSSV and EMS.",
  },
  {
    id: 2,
    emoji: "🌊",
    title: "Optimal Water Quality",
    description:
      "Controlled hatchery environment with continuous monitoring of salinity, pH, and dissolved oxygen.",
  },
  {
    id: 3,
    emoji: "🧬",
    title: "Genetic Excellence",
    description:
      "Imported broodstock from certified genetics programs ensuring high growth rates and disease resistance.",
  },
  {
    id: 4,
    emoji: "📦",
    title: "Reliable Delivery",
    description:
      "Safe transport with oxygen-packed bags and temperature-controlled delivery to your farm gate.",
  },
];

export default function ServicesContent() {
  return (
    <section className="bg-[#f4f6fb] py-16 px-6">
      <div className="max-w-[1100px] mx-auto">

        {/* ── Service Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {services.map(({ id, emoji, bgColor, title, description, tag, tagStyle }) => (
            <div
              key={id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col shadow-sm"
            >
              <div className={`${bgColor} h-[148px] flex items-center justify-center`}>
                <span className="text-5xl">{emoji}</span>
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-[#1a3a7a] text-base font-bold font-lato">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm font-lato leading-relaxed flex-1">
                  {description}
                </p>
                <div className="pt-1">
                  <span className={`inline-block text-xs font-semibold font-lato px-3 py-1 rounded-full ${tagStyle}`}>
                    {tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Quality Standards ── */}
        <div>
          <p className="text-[#c8a84b] text-xs font-bold tracking-[3px] uppercase font-lato mb-3">
            Why Choose Us
          </p>
          <h2
            className="text-[#1a3a7a] font-playfair font-normal leading-tight mb-10"
            style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
          >
            Our Quality Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {qualityItems.map(({ id, emoji, title, description }) => (
              <div
                key={id}
                className="bg-white rounded-xl border border-gray-100 px-6 py-5 flex flex-col gap-2 shadow-sm"
              >
                <h4 className="text-[#1a3a7a] text-sm font-bold font-lato flex items-center gap-2">
                  <span>{emoji}</span>
                  {title}
                </h4>
                <p className="text-gray-500 text-sm font-lato leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}