import type { ReactNode } from "react";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/footer/Footer";

interface LayoutSectionProps {
  children: ReactNode;
}

export default function LayoutSection({ children }: LayoutSectionProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed NavBar — always on top */}
      <NavBar />

      {/* Page content — pt-16 offsets the 64px fixed navbar height */}
      <main className="flex-1 pt-16">{children}</main>

      {/* Footer — sticks to bottom */}
      <Footer />
    </div>
  );
}