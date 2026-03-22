const stats = [
  { value: "15+", label: "YEARS EXPERIENCE" },
  { value: "98%", label: "SURVIVAL RATE" },
  { value: "500+", label: "HAPPY FARMERS" },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-3 divide-x divide-gray-200">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-8 px-6"
            >
              <span
                className="text-4xl md:text-5xl font-bold text-[#1a4a3a] font-playfair"
              >
                {value}
              </span>
              <span className="text-[11px] font-bold tracking-[2px] text-gray-400 uppercase mt-2 font-lato">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}