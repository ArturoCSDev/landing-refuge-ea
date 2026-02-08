import Image from "next/image";
import { PawPrintIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dog } from "@/lib/types";

interface DogCardProps {
  dog: Dog;
  onSelect: (dog: Dog) => void;
}

export function DogCard({ dog, onSelect }: DogCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={dog.image}
          alt={`Foto de ${dog.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute top-3 right-3 rounded-full bg-ea-secondary px-3 py-1 text-xs font-semibold text-white shadow-md">
          {dog.size}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-ea-primary">{dog.name}</h3>
          <span className="text-sm text-ea-text/60">{dog.age}</span>
        </div>
        <p className="mt-1 text-sm text-ea-secondary">{dog.breed}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ea-text/70">
          {dog.description}
        </p>

        {/* Personality tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {dog.personality.map((trait) => (
            <span
              key={trait}
              className="rounded-full bg-ea-accent/60 px-2.5 py-0.5 text-xs font-medium text-ea-primary"
            >
              {trait}
            </span>
          ))}
        </div>

        <Button
          onClick={() => onSelect(dog)}
          className="mt-4 w-full bg-ea-primary hover:bg-ea-secondary"
        >
          <PawPrintIcon className="mr-2 size-4" />
          Conoce más
        </Button>
      </div>
    </div>
  );
}
