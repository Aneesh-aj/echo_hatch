"use client";

import { useState } from "react";

const categories = ["All", "News", "Hatchery", "Tips", "Trends"];

const posts = [
  {
    id: 1,
    emoji: "🦐",
    bgColor: "bg-[#dce6f5]",
    category: "HATCHERY UPDATES",
    categoryKey: "Hatchery",
    categoryColor: "text-[#c8a84b]",
    title: "New Broodstock Batch Arrives from Thailand",
    excerpt:
      "Our latest import of certified L. vannamei broodstock has arrived, promising superior growth genetics.",
    date: "March 15, 2026",
    readTime: "3 min read",
  },
  {
    id: 2,
    emoji: "🌿",
    bgColor: "bg-[#fdf6e8]",
    category: "AQUACULTURE TIPS",
    categoryKey: "Tips",
    categoryColor: "text-[#c8a84b]",
    title: "5 Ways to Improve Survival Rates in Grow-Out Ponds",
    excerpt:
      "Practical tips from our consultancy team on reducing mortality and boosting FCR in shrimp ponds.",
    date: "March 10, 2026",
    readTime: "5 min read",
  },
  {
    id: 3,
    emoji: "📈",
    bgColor: "bg-[#e8eef8]",
    category: "INDUSTRY TRENDS",
    categoryKey: "Trends",
    categoryColor: "text-[#c8a84b]",
    title: "India's Shrimp Export Growth: Opportunities for Farmers",
    excerpt:
      "India's shrimp exports continue to rise. Here's what it means for small and medium hatcheries.",
    date: "March 5, 2026",
    readTime: "4 min read",
  },
  {
    id: 4,
    emoji: "🧪",
    bgColor: "bg-[#edf1fb]",
    category: "NEWS",
    categoryKey: "News",
    categoryColor: "text-[#c8a84b]",
    title: "New Disease-Resistant Strains Show Promise in Tamil Nadu Trials",
    excerpt:
      "Latest field trials of SPF shrimp seed show 12% improved survival in high-salinity environments.",
    date: "Feb 28, 2026",
    readTime: "4 min read",
  },
  {
    id: 5,
    emoji: "💧",
    bgColor: "bg-[#dce6f5]",
    category: "AQUACULTURE TIPS",
    categoryKey: "Tips",
    categoryColor: "text-[#c8a84b]",
    title: "Water Quality Management: The Foundation of Healthy Shrimp",
    excerpt:
      "Understanding how to balance alkalinity, pH, and dissolved oxygen for maximum shrimp health.",
    date: "Feb 20, 2026",
    readTime: "6 min read",
  },
  {
    id: 6,
    emoji: "🌍",
    bgColor: "bg-[#e8eef8]",
    category: "TRENDS",
    categoryKey: "Trends",
    categoryColor: "text-[#c8a84b]",
    title: "EMS & WSSV: What Farmers Need to Know in 2026",
    excerpt:
      "A field update on disease pressure and the preventive protocols our hatchery follows.",
    date: "Feb 14, 2026",
    readTime: "5 min read",
  },
];

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.categoryKey === activeCategory);

  return (
    <section className="bg-[#f4f6fb] py-16 px-6">
      <div className="max-w-[1100px] mx-auto">

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold font-lato transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-[#1a4a9a] text-white border-[#1a4a9a]"
                  : "bg-white text-[#1a4a9a] border-gray-200 hover:border-[#1a4a9a]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Blog Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filtered.map(
            ({ id, emoji, bgColor, category, categoryColor, title, excerpt, date, readTime }) => (
              <div
                key={id}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Card image area */}
                <div
                  className={`${bgColor} h-[148px] flex items-center justify-center`}
                >
                  <span className="text-5xl">{emoji}</span>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <p
                    className={`text-xs font-bold tracking-[2px] uppercase font-lato ${categoryColor}`}
                  >
                    {category}
                  </p>
                  <h3 className="text-[#1a3a7a] text-base font-bold font-lato leading-snug">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm font-lato leading-relaxed flex-1">
                    {excerpt}
                  </p>
                  <p className="text-gray-400 text-xs font-lato pt-1">
                    {date} · {readTime}
                  </p>
                </div>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}