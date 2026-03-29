type ImportStatus = "In Transit" | "Scheduled" | "Arrived";

const statusStyles: Record<ImportStatus, string> = {
  "In Transit": "bg-[#e8eef8] text-[#1a3a7a]",
  Scheduled:    "bg-[#fef3e2] text-[#b45309]",
  Arrived:      "bg-[#e8f0fd] text-[#2a5abf]",
};

const imports: {
  origin: string;
  species: string;
  quantity: string;
  arrival: string;
  status: ImportStatus;
}[] = [
  { origin: "Thailand",  species: "L. vannamei", quantity: "500 pairs", arrival: "Mar 18, 2026", status: "In Transit" },
  { origin: "Singapore", species: "L. monodon",  quantity: "300 pairs", arrival: "Mar 25, 2026", status: "Scheduled"  },
  { origin: "Indonesia", species: "L. vannamei", quantity: "400 pairs", arrival: "Mar 10, 2026", status: "Arrived"    },
];

const videos = [
  { label: "Hatchery Operations Tour" },
  { label: "Broodstock Import Process" },
];

export default function MediaSection() {
  return (
    <>
      {/* ── Video Section ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c8a84b] text-xs font-bold tracking-[3px] uppercase font-lato mb-3">
              Media
            </p>
            <h2
              className="text-[#1a3a7a] font-playfair font-normal"
              style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
            >
              See Our Hatchery in Action
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map(({ label }) => (
              <div
                key={label}
                className="group relative bg-[#0f2a5a] rounded-2xl overflow-hidden aspect-video flex flex-col items-center justify-center cursor-pointer hover:bg-[#1a3a7a] transition-colors duration-300"
              >
                {/* Dot pattern */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />

                {/* Play button */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 mb-4">
                  <svg width="20" height="20" fill="white" viewBox="0 0 24 24" className="ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <p className="relative z-10 text-white/80 text-sm font-lato tracking-wide">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Broodstock Imports Table ── */}
      <section className="bg-[#f4f6fb] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">

          {/* Header row */}
          <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-[#c8a84b] text-sm font-bold tracking-[3px] uppercase font-lato mb-3">
                Live Update
              </p>
              <h2
                className="text-[#1a3a7a] font-playfair font-normal"
                style={{ fontSize: "clamp(26px, 4vw, 38px)" }}
              >
                Broodstock Imports
              </h2>
            </div>

            {/* Live badge */}
            <span className="flex items-center gap-2 bg-white border border-gray-200 text-[#1a3a7a] text-xs font-bold tracking-[1.5px] uppercase font-lato px-4 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#2e7acc] animate-pulse" />
              Live Status
            </span>
          </div>

          {/* Table */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full text-md font-lato">
              <thead>
                <tr className="bg-[#0f2a5a] text-white">
                  {["Origin", "Species", "Quantity", "Arrival", "Status"].map((h) => (
                    <th
                      key={h}
                      className="text-left text-[13px] font-bold tracking-[2px] uppercase px-6 py-4"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {imports.map(({ origin, species, quantity, arrival, status }) => (
                  <tr key={origin} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 text-gray-800 font-medium">{origin}</td>
                    <td className="px-6 py-4 text-gray-600 italic">{species}</td>
                    <td className="px-6 py-4 text-gray-600">{quantity}</td>
                    <td className="px-6 py-4 text-gray-600">{arrival}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${statusStyles[status]}`}>
                        {status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>
    </>
  );
}