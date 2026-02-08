"use client";

import { useState } from "react";
import { dogs } from "@/lib/data/dogs";
import { DogCard } from "@/components/dog-card";
import { DogDetail } from "@/components/dog-detail";
import type { Dog } from "@/lib/types";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const DOGS_PER_PAGE = 4;

export function DogsGrid() {
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dogs.length / DOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * DOGS_PER_PAGE;
  const currentDogs = dogs.slice(startIndex, startIndex + DOGS_PER_PAGE);

  function handleSelect(dog: Dog) {
    setSelectedDog(dog);
    setDetailOpen(true);
  }

  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  return (
    <section id="perritos" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-ea-secondary">
            Encuentra a tu compañero
          </p>
          <h2 className="mt-2 text-3xl font-bold text-ea-primary sm:text-4xl">
            Perritos en Adopción
          </h2>
          <p className="mt-4 text-lg text-ea-text/70">
            Cada uno de ellos fue rescatado y rehabilitado con mucho amor.
            ¿Cuál robará tu corazón?
          </p>
        </div>

        {/* Dogs grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {currentDogs.map((dog) => (
            <DogCard key={dog.id} dog={dog} onSelect={handleSelect} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => goToPage(currentPage - 1)}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => goToPage(page)}
                        isActive={page === currentPage}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => goToPage(currentPage + 1)}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>

      {/* Detail dialog/drawer */}
      <DogDetail
        dog={selectedDog}
        open={detailOpen}
        onOpenChange={setDetailOpen}
      />
    </section>
  );
}
