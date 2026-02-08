import Image from "next/image";
import { HeartIcon } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ea-accent bg-ea-light">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo-ea.jpeg"
              alt="Esperanza Animal"
              width={28}
              height={28}
              className="size-7 rounded-full object-cover"
            />
            <span className="font-bold text-ea-primary">Esperanza Animal</span>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-ea-text/60">
            &copy; {year} Esperanza Animal. Todos los derechos reservados.
          </p>

          {/* Developer credit */}
          <p className="text-sm text-ea-text/60">
            Desarrollado con{" "}
            <HeartIcon className="inline size-3.5 text-ea-secondary" /> por{" "}
            <a
              href="https://github.com/ArturoCSDev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ea-primary hover:text-ea-secondary transition-colors"
            >
              ArturoCSDev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
