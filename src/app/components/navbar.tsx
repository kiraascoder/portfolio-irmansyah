"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          lr
        </Link>

        <nav className="hidden gap-8 text-md md:flex">
          <Link href="/" className="opacity-80 hover:opacity-100">
            Personal
          </Link>
          <Link href="/project" className="opacity-80 hover:opacity-100">
            Project
          </Link>
          <Link href="/contact" className="opacity-80 hover:opacity-100">
            Contact
          </Link>
          <Link href="/about" className="opacity-80 hover:opacity-100">
            About
          </Link>
          <Link href="/blog" className="opacity-80 hover:opacity-100">
            Blog
          </Link>
        </nav>

        <Button asChild variant="customOutline">
          <Link href="/login">Sign In</Link>
        </Button>
      </div>
    </header>
  );
}
