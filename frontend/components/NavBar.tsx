"use client"
import Link from "next/link"
import { User } from "lucide-react";
import { useState } from "react";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-900 to-purple-900 shadow-lg">
      <div className="flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-4">
          <span className="text-white font-bold text-2xl tracking-tight flex items-center gap-2">
            <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-indigo-700 font-extrabold">LM</span>
            Lead Manager
          </span>
          <div className="hidden md:flex space-x-8 ml-10">
            <Link href="/" className="text-white hover:text-purple-300 transition">Home</Link>
            <Link href="/" className="text-white hover:text-purple-300 transition">Leads</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <User className="w-6 h-6 text-white cursor-pointer hover:text-purple-300 transition" />
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(v => !v)} aria-label="Toggle menu">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-indigo-950 px-6 pb-4 flex flex-col gap-2 animate-fade-in-down">
          <Link href="/" className="text-white py-2 hover:text-purple-300 transition" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/" className="text-white py-2 hover:text-purple-300 transition" onClick={() => setMobileMenuOpen(false)}>Leads</Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;