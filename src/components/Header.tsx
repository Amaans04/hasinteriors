"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/assets/images/logo.png";
import { contact, navLinks } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  // Shadow once scrolled; slide away while scrolling down, back on any scroll up.
  // Frees up screen space on phones without losing the menu.
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 320);
        lastY = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}${hidden && !open ? " is-hidden" : ""}`}
    >
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="HAS Interiors home">
          <Image className="brand-logo" src={logo} alt="" width={56} height={56} />
          <span className="brand-name">
            HAS <span>Interiors</span>
          </span>
        </Link>

        <nav className="site-nav" id="site-nav" aria-label="Main">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "is-active" : undefined}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a className="btn btn--accent nav-cta" href={contact.whatsapp} target="_blank" rel="noopener">
            Get a Quote
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-controls="site-nav"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
