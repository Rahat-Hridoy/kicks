"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const categories = [
  {
    id: "lifestyle",
    name: "LIFESTYLE\nSHOES",
    image: "/image/banner1.png",
  },
  {
    id: "basketball",
    name: "BASKETBALL\nSHOES",
    image: "/image/banner2.png",
  },
  {
    id: "running",
    name: "RUNNING\nSHOES",
    image: "/image/newDropImage1.png",
  },
  {
    id: "training",
    name: "TRAINING\nSHOES",
    image: "/image/newDropImage2.png",
  },
];

export function Categories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-primary md:pt-[90px] ">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl md:text-[74px] font-semibold text-light-background md:uppercase ">
            Categories
          </h2>
          <div className="flex gap-2 opacity-100">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-[10px]  transition-colors flex items-center justify-center text-light-text hover:text-primary bg-background/30 hover:bg-background"
              aria-label="Previous Category"
            >
              <ChevronLeft className="w-5 h-5 shrink-0" strokeWidth={2.5} />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-[10px]  transition-colors flex items-center justify-center text-light-text hover:text-primary bg-background/30 hover:bg-background"
              aria-label="Next Category"
            >
              <ChevronRight className="w-5 h-5 shrink-0" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="mx-auto max-w-[1320px] pl-4 sm:pl-6 lg:pl-8  w-full">
        <div className="bg-background rounded-tl-[24px] md:rounded-tl-[64px] overflow-hidden flex flex-col md:flex-row mt-[24px] md:mt-[64px] ">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((cat, index) => (
              <div
                key={cat.id}
                className={`min-w-[80vw] md:min-w-[50%] shrink-0 snap-start flex flex-col justify-end relative h-[348px] md:h-[600px] p-8 md:p-12 md:pb-7.5! ${
                  index % 2 === 0
                    ? "bg-card-bg-secondary"
                    : "bg-card-bg-tertiary"
                }`}
              >
                {/* Product Image */}
                <div className="absolute inset-0 flex items-center justify-center pb-20 px-8 pointer-events-none">
                  <div className="relative w-full h-[60%] mt-8 transition-transform duration-500 hover:scale-105">
                    <Image
                      src={cat.image}
                      alt={cat.name.replace("\n", " ")}
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 w-full flex justify-between items-end">
                  <h3 className="text-primary uppercase leading-none tracking-tight whitespace-pre-line text-2xl md:text-4xl font-semibold ">
                    {cat.name}
                  </h3>
                  <Link
                    href={`/categories/${cat.id}`}
                    className="w-8 h-8 md:w-12 md:h-12 rounded-sm md:rounded-lg bg-primary hover:bg-primary/90 transition-transform hover:scale-105 flex items-center justify-center text-white shrink-0"
                  >
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
