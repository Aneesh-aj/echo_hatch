const services = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 36 36" width="26" height="26" fill="none">
        <path d="M6 26 C9 18, 18 14, 26 17 C30 18.5, 32 22, 28 26 C24 30, 15 30, 11 25" stroke="#e07a3a" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M26 17 C28 13, 26 8, 22 10" stroke="#e07a3a" strokeWidth="2" strokeLinecap="round"/>
        <path d="M11 25 C8 27, 6 31, 9 33" stroke="#e07a3a" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="13" r="1.5" fill="#e07a3a"/>
      </svg>
    ),
    title: "Shrimp Hatchery",
    description: "Production of high-quality shrimp seeds with strict biosecurity and quality controls.",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 36 36" width="24" height="24" fill="none">
        <rect x="8" y="8" width="20" height="22" rx="2" stroke="#4a9a8a" strokeWidth="2"/>
        <path d="M13 8 L13 6 Q13 4 15 4 L21 4 Q23 4 23 6 L23 8" stroke="#4a9a8a" strokeWidth="2"/>
        <line x1="13" y1="16" x2="23" y2="16" stroke="#4a9a8a" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="13" y1="20" x2="20" y2="20" stroke="#4a9a8a" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="13" y1="24" x2="21" y2="24" stroke="#4a9a8a" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Consultancy",
    description: "Expert guidance for shrimp farming and hatchery setup tailored to your scale.",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 36 36" width="26" height="26" fill="none">
        <rect x="6" y="18" width="24" height="13" rx="1" stroke="#4a7a9a" strokeWidth="2"/>
        <path d="M4 18 L8 9 L28 9 L32 18 Z" stroke="#4a7a9a" strokeWidth="2"/>
        <rect x="14" y="22" width="8" height="9" rx="1" stroke="#e07a3a" strokeWidth="1.8"/>
        <rect x="8" y="21" width="4" height="4" rx="0.5" stroke="#4a7a9a" strokeWidth="1.5"/>
        <rect x="24" y="21" width="4" height="4" rx="0.5" stroke="#4a7a9a" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Ecotech Shop",
    description: "Premium feed, probiotics, and aquaculture inputs for optimal farm performance.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f7f6f1] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#c8a84b] text-xs font-bold tracking-[3px] uppercase font-lato mb-3">
            What We Do
          </p>
          <h2
            className="text-[#1a4a3a] font-playfair font-normal leading-tight mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Complete Shrimp Aquaculture Services
          </h2>
          <p className="text-gray-500 font-lato text-[15px] leading-relaxed max-w-[620px]">
            From hatchery production to farm consultancy, we provide end-to-end
            solutions for shrimp farming success. Our certified broodstock imports
            ensure the highest genetic quality.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="bg-white rounded-xl border border-gray-200 p-7 flex flex-col gap-4"
            >
              {/* Icon box */}
              <div className="w-12 h-12 rounded-lg bg-[#e8f5f0] flex items-center justify-center">
                {icon}
              </div>

              {/* Title */}
              <h3 className="text-[#1a7a50] text-base font-bold font-lato">
                {title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm font-lato leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}