"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const relatedProducts = [
  {
    id: 1,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    image: "/image/newDropImage1.png",
    isNew: true,
    discount: null,
  },
  {
    id: 2,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    image: "/image/newDropImage2.png",
    isNew: false,
    discount: "10% off",
  },
  {
    id: 3,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    image: "/image/newDropImage3.png",
    isNew: true,
    discount: null,
  },
  {
    id: 4,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    image: "/image/newDropImage4.png",
    isNew: true,
    discount: null,
  },
];

export function RelatedProducts() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = relatedProducts.length;

  const allProducts = Array.from({ length: totalSlides }).flatMap((_, i) =>
    relatedProducts.map((p) => ({ ...p, uniqueId: `${i}-${p.id}` })),
  );

  const currentProducts = allProducts.slice(
    activeSlide * 4,
    activeSlide * 4 + 4,
  );

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="px-4 pb-4 md:pb-[60px] ">
      <div className="mx-auto max-w-[1320px] w-full mt-6 md:mt-0">
        <div className="flex justify-between items-center mb-4 md:mb-8 mt-6 md:mt-0">
          <h2 className="md:uppercase text-[24px] md:text-[48px] font-semibold text-primary">
            You may also like
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-8 h-8 md:w-10 md:h-10 rounded-[8px] md:rounded-[10px] transition-colors flex items-center justify-center bg-gray-400 hover:bg-[#232323]"
              aria-label="Previous Slide"
            >
              <ChevronLeft
                className="w-5 h-5 md:w-6 md:h-6 shrink-0 text-white"
                strokeWidth={2.5}
              />
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 md:w-10 md:h-10 rounded-[8px] md:rounded-[10px] transition-colors flex items-center justify-center bg-[#232323] hover:bg-black"
              aria-label="Next Slide"
            >
              <ChevronRight
                className="w-5 h-5 md:w-6 md:h-6 shrink-0 text-white"
                strokeWidth={2.5}
              />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-4">
          {currentProducts.map((product) => (
            <div key={product.uniqueId} className="flex flex-col group">
              {/* Image Card */}
              <div className="bg-card-bg-primary p-2 relative rounded-[28px] mb-4">
                <div className="relative aspect-square w-full rounded-2xl md:rounded-[24px] bg-card-bg-secondary p-4 md:p-8 flex items-center justify-center">
                  {product.isNew && (
                    <div className="absolute top-0 left-0 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-tl-[12px] rounded-br-[12px] md:rounded-tl-[24px] md:rounded-br-[24px] z-10">
                      New
                    </div>
                  )}
                  {product.discount && (
                    <div className="absolute top-0 left-0 bg-secondary text-primary text-[11px] md:text-[13px] font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-tl-[12px] rounded-br-[12px] md:rounded-tl-[24px] md:rounded-br-[24px] z-10">
                      {product.discount}
                    </div>
                  )}
                  <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <h3 className="text-base md:text-2xl font-semibold uppercase text-dark-text mb-2 md:mb-4 leading-snug">
                {product.name}
              </h3>

              {/* Action Button */}
              <button className="w-full bg-primary hover:bg-primary/90 transition-colors text-accent-foreground rounded-lg md:rounded-[8px] tracking-[0.25px] flex items-center justify-center gap-1 uppercase whitespace-nowrap text-xs md:text-sm font-medium mt-0.5 py-[13px] md:py-[16px]">
                <span>VIEW PRODUCT -</span>
                <span className="text-secondary">${product.price}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Dots (Mobile Only) */}
        <div className="flex justify-center items-center gap-2 mt-8 mb-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-[4px] rounded-full transition-all ${
                activeSlide === index ? "w-10 bg-accent" : "w-10 bg-[#C4C4C4]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
