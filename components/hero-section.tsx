"use client";

import Image from "next/image";
import { HeartIcon, PawPrintIcon } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const floatPaw = (delay: number) => ({
  y: [0, -12, 0],
  opacity: [0.08, 0.15, 0.08],
  transition: {
    duration: 4,
    delay,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
});

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-ea-primary via-ea-primary to-ea-secondary pt-16"
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10"
          animate={floatPaw(0)}
        >
          <PawPrintIcon className="size-24 text-white" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20"
          animate={floatPaw(1)}
        >
          <PawPrintIcon className="size-16 text-white" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4"
          animate={floatPaw(2)}
        >
          <PawPrintIcon className="size-20 text-white" />
        </motion.div>
        <motion.div
          className="absolute right-10 bottom-20"
          animate={floatPaw(0.5)}
        >
          <HeartIcon className="size-14 text-white" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3"
          animate={floatPaw(1.5)}
        >
          <HeartIcon className="size-10 text-white" />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        {/* Logo + org name */}
        <motion.div
          className="mb-4 flex flex-col items-center gap-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Image
            src="/logo-ea.jpeg"
            alt="Esperanza Animal"
            width={80}
            height={80}
            className="size-20 rounded-full border-2 border-white/30 object-cover shadow-lg"
          />
          <span className="text-lg font-semibold tracking-wide text-white/90">
            Esperanza Animal presenta
          </span>
        </motion.div>

        {/* Badge */}
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <PawPrintIcon className="size-4" />
          <span>Por los que no tienen voz</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Gran Desfile de{" "}
          <span className="text-ea-accent">Adopción</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Ven a conocer a nuestros perritos rescatados que buscan un hogar lleno
          de amor. Cada uno tiene una historia y un corazón enorme esperando por
          ti.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-ea-accent px-8 text-base font-semibold text-ea-primary shadow-lg transition-transform hover:scale-105 hover:bg-ea-accent/90"
          >
            <a href="#perritos">
              <PawPrintIcon className="mr-2 size-5" />
              Ver perritos disponibles
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-14 rounded-full border-white/30 bg-transparent px-8 text-base font-semibold text-white transition-transform hover:scale-105 hover:bg-white/10"
          >
            <a href="#evento">Sobre el evento</a>
          </Button>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8">
          {[
            { value: "150+", label: "Perritos rescatados" },
            { value: "80+", label: "Adopciones exitosas" },
            { value: "5", label: "Años de labor" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              custom={5 + i}
            >
              <p className="text-3xl font-bold text-ea-accent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F5F3F0"
          />
        </svg>
      </div>
    </section>
  );
}
