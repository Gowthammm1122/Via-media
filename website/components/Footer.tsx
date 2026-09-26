import Link from "next/link";
import Image from "next/image";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "Insights", href: "/insights" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#121212] text-white">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-[100px] pt-16 sm:pt-20 pb-10">
        
        {/* Top Header Row (Labels above the divider line) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-4 border-b border-neutral-800">
          <div className="hidden lg:block lg:col-span-4" />
          <div className="lg:col-span-8 grid grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-white text-xs sm:text-sm font-semibold tracking-wider uppercase">
                MENU
              </h3>
            </div>
            <div>
              <h3 className="text-white text-xs sm:text-sm font-semibold tracking-wider uppercase">
                SOCIALS
              </h3>
            </div>
            <div>
              <h3 className="text-white text-xs sm:text-sm font-semibold tracking-wider uppercase">
                BUSINESS ENQUIRIES
              </h3>
            </div>
          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 pb-16 lg:pb-24">
          
          {/* Left Column: Logo & Address (Top-aligned with links) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block" aria-label="VIAMEDIA Home">
              <Image
                src="/logo/VIAMEDIA.svg"
                alt="VIAMEDIA"
                width={160}
                height={24}
                className="brightness-0 invert h-6 sm:h-7 w-auto object-contain"
              />
            </Link>

            <address className="not-italic text-neutral-400 text-sm sm:text-base font-normal leading-relaxed max-w-xs">
              24, Goutham Centre,<br />
              1055 Avinashi Road,<br />
              Coimbatore - 641018.
            </address>
          </div>

          {/* Right Columns: Menu, Socials, Business Enquiries */}
          <div className="lg:col-span-8 grid grid-cols-3 gap-6 sm:gap-8">
            
            {/* Column 1: MENU */}
            <div>
              <ul className="space-y-3">
                {menuLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-white text-sm sm:text-base font-normal transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: SOCIALS */}
            <div>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-300 hover:text-white text-sm sm:text-base font-normal transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: BUSINESS ENQUIRIES */}
            <div>
              <div className="space-y-3">
                <div>
                  <a
                    href="mailto:admin@viamedia.in"
                    className="text-neutral-300 hover:text-white text-sm sm:text-base font-normal transition-colors block break-all"
                  >
                    admin@viamedia.in
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+919790332292"
                    className="text-neutral-300 hover:text-white text-sm sm:text-base font-normal transition-colors block"
                  >
                    +91 9790332292
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-400 text-xs sm:text-sm">
          <p>© 2026 VIAMEDIA. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
