"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  CheckCircleIcon,
  XCircleIcon,
  HeartIcon,
  RulerIcon,
  WeightIcon,
  PawPrintIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import type { Dog } from "@/lib/types";

interface DogDetailProps {
  dog: Dog | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function StatusBadge({ ok, label }: { ok: boolean; label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-sm">
      {ok ? (
        <CheckCircleIcon className="size-4 text-ea-secondary" />
      ) : (
        <XCircleIcon className="size-4 text-muted-foreground" />
      )}
      <span className={ok ? "text-ea-text" : "text-muted-foreground"}>
        {label}
      </span>
    </div>
  );
}

function DogDetailContent({ dog }: { dog: Dog }) {
  return (
    <div className="space-y-4">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={dog.image}
          alt={`Foto de ${dog.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 500px"
        />
      </div>

      {/* Quick info */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-ea-accent/40 p-3 text-center">
          <PawPrintIcon className="mx-auto size-5 text-ea-primary" />
          <p className="mt-1 text-xs text-ea-text/60">Raza</p>
          <p className="text-sm font-semibold text-ea-text">{dog.breed}</p>
        </div>
        <div className="rounded-lg bg-ea-accent/40 p-3 text-center">
          <RulerIcon className="mx-auto size-5 text-ea-primary" />
          <p className="mt-1 text-xs text-ea-text/60">Tamaño</p>
          <p className="text-sm font-semibold text-ea-text">{dog.size}</p>
        </div>
        <div className="rounded-lg bg-ea-accent/40 p-3 text-center">
          <WeightIcon className="mx-auto size-5 text-ea-primary" />
          <p className="mt-1 text-xs text-ea-text/60">Peso</p>
          <p className="text-sm font-semibold text-ea-text">{dog.weight}</p>
        </div>
      </div>

      {/* Description */}
      <div>
        <h4 className="font-semibold text-ea-primary">Sobre {dog.name}</h4>
        <p className="mt-1 text-sm leading-relaxed text-ea-text/80">
          {dog.description}
        </p>
      </div>

      {/* Personality */}
      <div className="flex flex-wrap gap-2">
        {dog.personality.map((trait) => (
          <span
            key={trait}
            className="rounded-full bg-ea-secondary/10 px-3 py-1 text-sm font-medium text-ea-secondary"
          >
            {trait}
          </span>
        ))}
      </div>

      {/* Health status */}
      <div className="rounded-lg border border-ea-accent p-4">
        <h4 className="mb-2 text-sm font-semibold text-ea-primary">
          Estado de salud
        </h4>
        <div className="flex flex-wrap gap-4">
          <StatusBadge ok={dog.vaccinated} label="Vacunado" />
          <StatusBadge ok={dog.sterilized} label="Esterilizado" />
          <StatusBadge ok={dog.dewormed} label="Desparasitado" />
        </div>
      </div>

      {/* CTA */}
      <Button
        asChild
        className="w-full bg-ea-secondary hover:bg-ea-primary"
        size="lg"
      >
        <a href="#contacto">
          <HeartIcon className="mr-2 size-4" />
          Quiero adoptar a {dog.name}
        </a>
      </Button>
    </div>
  );
}

export function DogDetail({ dog, open, onOpenChange }: DogDetailProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!dog) return null;

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="max-h-[90vh]">
          <DrawerHeader>
            <DrawerTitle className="text-ea-primary">
              {dog.name} — {dog.age}, {dog.sex}
            </DrawerTitle>
            <DrawerDescription>
              {dog.breed} · {dog.size}
            </DrawerDescription>
          </DrawerHeader>
          <div className="overflow-y-auto px-4 pb-6">
            <DogDetailContent dog={dog} />
          </div>
          <div className="p-4 pt-0">
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
                Cerrar
              </Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-ea-primary">
            {dog.name} — {dog.age}, {dog.sex}
          </DialogTitle>
          <DialogDescription>
            {dog.breed} · {dog.size}
          </DialogDescription>
        </DialogHeader>
        <DogDetailContent dog={dog} />
      </DialogContent>
    </Dialog>
  );
}
