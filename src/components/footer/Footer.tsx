export default function Footer() {
  return (
    <footer className="bg-[#0f2a5a] w-full py-6 px-4">
      <div className="flex flex-col items-center gap-1.5 text-center">

        {/* Brand */}
        <p className="text-white text-sm font-semibold tracking-wide font-lato">
          EcoHatch – Shrimp Seed Producer
        </p>

        {/* Contact */}
        <p className="text-white/70 text-sm font-lato">
         East Coast Rd, Chettinagar, Tamil Nadu 604303
        </p>

        {/* Copyright */}
        <p className="text-white/40 text-xs mt-1 font-lato">
          © {new Date().getFullYear()} EcoHatch. All rights reserved.
        </p>

      </div>
    </footer>
  );
}