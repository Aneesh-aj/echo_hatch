"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/home" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        {/* ── Brand ── */}
        <Link href="/home" className="flex flex-col leading-tight">
          <span className="text-[22px] font-bold text-[#1a4a3a] tracking-tight font-playfair">
            Eco<span className="text-[#c8a84b]">Hatch</span>
          </span>
          <span className="text-[9px] font-bold tracking-[2px] text-[#c8a84b] uppercase mt-0.5 font-lato">
            Shrimp Seed Producer
          </span>
        </Link>

        {/* ── Desktop Links ── */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`text-sm font-lato tracking-[0.8px] transition-colors duration-200 pb-0.5 ${
                    isActive
                      ? "text-[#1a3a7a] font-bold border-b-2 border-[#1a3a7a]"
                      : "text-[#2d2d2d] font-normal hover:text-[#1a3a7a]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Hamburger ── */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#1a4a3a] rounded transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#1a4a3a] rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#1a4a3a] rounded transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white border-t border-gray-100 px-6 pb-6 pt-2">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-[15px] font-lato tracking-[0.8px] border-b border-gray-100 transition-colors duration-200 ${
                  isActive
                    ? "text-[#1a3a7a] font-bold"
                    : "text-[#2d2d2d] hover:text-[#1a3a7a]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}