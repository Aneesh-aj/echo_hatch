"use client";

import { useState } from "react";

const contactDetails = [
  {
    id: "phone",
    icon: (
      <svg width="18" height="18" fill="none" stroke="#1a7a50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "Phone",
    lines: ["+91 98765 43210", "+91 94321 87654"],
  },
  {
    id: "email",
    icon: (
      <svg width="18" height="18" fill="none" stroke="#1a7a50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: "Email",
    lines: ["info@ecohatch.in", "sales@ecohatch.in"],
  },
  {
    id: "address",
    icon: (
      <svg width="18" height="18" fill="none" stroke="#1a7a50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Address",
    lines: ["No. 12, Hatchery Road,", "Kumarapalayam, Tamil Nadu 638183"],
  },
  {
    id: "hours",
    icon: (
      <svg width="18" height="18" fill="none" stroke="#1a7a50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: "Working Hours",
    lines: ["Mon–Sat: 8:00 AM – 6:00 PM", "Sunday: Closed"],
  },
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "Shrimp Seeds",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle submission
  };

  return (
    <section className="bg-[#f7f6f1] py-20 px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* ── Left: Find Us ── */}
        <div>
          <p className="text-[#c8a84b] text-xs font-bold tracking-[3px] uppercase font-lato mb-3">
            Our Details
          </p>
          <h2
            className="text-[#1a4a3a] font-playfair font-normal leading-tight mb-8"
            style={{ fontSize: "clamp(26px, 4vw, 38px)" }}
          >
            Find Us
          </h2>

          {/* Contact items */}
          <div className="flex flex-col gap-7 mb-8">
            {contactDetails.map(({ id, icon, label, lines }) => (
              <div key={id} className="flex gap-4 items-start">
                {/* Icon box */}
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#e8f5f0] flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <p className="text-[#1a4a3a] text-sm font-bold font-lato mb-0.5">
                    {label}
                  </p>
                  {lines.map((line) => (
                    <p key={line} className="text-gray-500 text-sm font-lato leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="bg-[#c8e6df] rounded-2xl h-[168px] flex items-center justify-center gap-2 px-6">
            <span className="text-lg">📍</span>
            <span className="text-[#1a7a50] text-sm font-bold font-lato tracking-wide">
              Google Maps Embed — Kumarapalayam
            </span>
          </div>
        </div>

        {/* ── Right: Send Enquiry Form ── */}
        <div>
          <p className="text-[#c8a84b] text-xs font-bold tracking-[3px] uppercase font-lato mb-3">
            Quick Form
          </p>
          <h2
            className="text-[#1a4a3a] font-playfair font-normal leading-tight mb-7"
            style={{ fontSize: "clamp(26px, 4vw, 38px)" }}
          >
            Send an Enquiry
          </h2>

          <div className="bg-white rounded-2xl border border-gray-100 p-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Row 1: Name + Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-[1.5px] uppercase text-gray-500 font-lato">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-lato text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#1a7a50] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-[1.5px] uppercase text-gray-500 font-lato">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-lato text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#1a7a50] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email + Enquiry Type */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-[1.5px] uppercase text-gray-500 font-lato">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-lato text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#1a7a50] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-[1.5px] uppercase text-gray-500 font-lato">
                    Enquiry Type
                  </label>
                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-lato text-gray-700 focus:outline-none focus:border-[#1a7a50] transition-colors bg-white"
                  >
                    <option>Shrimp Seeds</option>
                    <option>Consultancy</option>
                    <option>Ecotech Shop</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold tracking-[1.5px] uppercase text-gray-500 font-lato">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm font-lato text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#1a7a50] transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#1a6a4a] hover:bg-[#145a3e] text-white text-sm font-bold font-lato py-3.5 rounded-lg transition-colors duration-200"
              >
                Submit Enquiry
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}