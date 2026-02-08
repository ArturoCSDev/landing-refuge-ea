"use client";

import { useState } from "react";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Evento", href: "#evento" },
  { label: "Perritos", href: "#perritos" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-ea-primary/10 bg-ea-light/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <Image
            src="/logo-ea.jpeg"
            alt="Esperanza Animal"
            width={40}
            height={40}
            className="size-10 rounded-full object-cover"
          />
          <span className="text-lg font-bold text-ea-primary">
            Esperanza Animal
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ea-text transition-colors hover:bg-ea-accent/50 hover:text-ea-primary"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="ml-3 bg-ea-secondary hover:bg-ea-primary">
            <a href="#perritos">Adopta</a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-ea-text md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-ea-primary/10 bg-ea-light px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-3 text-sm font-medium text-ea-text transition-colors hover:bg-ea-accent/50"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="mt-2 w-full bg-ea-secondary hover:bg-ea-primary"
          >
            <a href="#perritos" onClick={() => setMobileOpen(false)}>
              Adopta
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
