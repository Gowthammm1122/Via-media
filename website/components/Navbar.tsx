"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      {/* 1920px container with responsive horizontal padding matching the 100px Figma margin */}
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[100px] h-28 flex items-center justify-between">
        
        {/* Left Side: Logo + Navigation Links */}
        <div className="flex items-center gap-12 lg:gap-20">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center" aria-label="VIAMEDIA Home">
            <Image
              src="/logo/VIAMEDIA.svg"
              alt="VIAMEDIA"
              width={144}
              height={21}
              priority
              style={{ width: "auto", height: "auto" }}
              className="h-5 object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-black text-base lg:text-lg font-normal hover:text-zinc-600 transition-colors font-sans"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side: "Lets Talk" Pill Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-7 py-3.5 rounded-full text-base lg:text-lg font-normal hover:bg-zinc-800 transition-all active:scale-[0.98]"
          >
            <span>Lets Talk</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-black hover:text-zinc-600 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-2 pb-6 border-b border-zinc-100 bg-white shadow-lg space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-black text-lg py-1 font-medium hover:text-zinc-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full bg-black text-white px-6 py-3.5 rounded-full text-base font-medium hover:bg-zinc-800 transition-colors"
            >
              <span>Lets Talk</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
