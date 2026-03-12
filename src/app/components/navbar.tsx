"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/project", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "20px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        background: scrolled ? "rgba(14,14,14,0.85)" : "transparent",
        transition: "border-color var(--transition), background var(--transition)",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "22px",
          color: "var(--text)",
          letterSpacing: "-0.02em",
        }}
      >
        Irman<span style={{ color: "var(--accent)" }}>.</span>
      </Link>

      <ul
        style={{
          display: "flex",
          gap: "36px",
          listStyle: "none",
        }}
      >
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              style={{
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: pathname === href ? "var(--text)" : "var(--text-muted)",
                textDecoration: "none",
                transition: "color var(--transition)",
                position: "relative",
              }}
            >
              {label}
              {pathname === href && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    width: "100%",
                    height: "1px",
                    background: "var(--accent)",
                  }}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        style={{
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "0.05em",
          color: "var(--bg)",
          background: "var(--accent)",
          padding: "10px 22px",
          borderRadius: "100px",
          transition: "transform var(--transition), background var(--transition)",
        }}
      >
        Let&apos;s Talk
      </Link>
    </nav>
  );
}
