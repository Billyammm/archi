"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="container nav-wrap island">
        <Link className="brand" href="/" aria-label="JCCHUA and Associates home">
          <span className="brand-mark">JC</span>
          <span className="brand-text">JCCHUA & Associates</span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={pathname === item.href ? "active" : ""}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          id="menuToggle"
          className="menu-toggle"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobileMenu"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          type="button"
        >
          Menu
        </button>
      </div>

      <nav
        id="mobileMenu"
        className={isMobileMenuOpen ? "mobile-nav open" : "mobile-nav"}
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            className={pathname === item.href ? "active" : ""}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
