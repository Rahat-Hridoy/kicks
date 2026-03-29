"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

interface Product {
  id: string | number;
  name?: string;
  title?: string;
  price: number;
  image?: string;
  images?: string[];
  description?: string;
  category?: {
    id: number;
    name: string;
    image: string;
  };
}

export default function ProductPage({
  id,
  product,
}: {
  id: string;
  product?: Product;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="mx-auto max-w-[1320px] px-4 mt-[100px] md:mt-[160px] mb-[24px] md:mb-[128px] ">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side: Images Grid */}
        <div className="w-full md:w-[65%]">
          {/* Mobile Layout (Hidden on md) */}
          <div className="flex md:hidden flex-col gap-6">
            {/* Main Image Banner */}
            <div className="w-full bg-card-bg-secondary rounded-[24px] relative flex flex-col items-center justify-center p-6 max-h-[273px] ">
              <Image
                src={
                  (product?.images && product.images[activeImageIndex]) ||
                  product?.image ||
                  productImages[activeImageIndex].src
                }
                alt={product?.title || product?.name || "Main Product Image"}
                width={800}
                height={1000}
                className="w-full h-auto object-cover overflow-hidden"
              />
              {/* Pagination Dots */}
              <div className="absolute bottom-6 flex gap-2">
                {(product?.images ? product.images : productImages).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        activeImageIndex === index
                          ? "bg-accent"
                          : "bg-primary/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ),
                )}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-2">
              {(product?.images ? product.images : productImages).map(
                (img, index) => (
                  <button
                    key={typeof img === "string" ? img : img.id}
                    onClick={() => setActiveImageIndex(index)}
                    className={`bg-card-bg-secondary rounded-[12px] aspect-square overflow-hidden flex items-center justify-center p-2 transition-all ${
                      activeImageIndex === index
                        ? "ring-2 ring-accent"
                        : "hover:ring-1 ring-gray-400"
                    }`}
                  >
                    <Image
                      src={typeof img === "string" ? img : img.src}
                      alt={
                        typeof img === "string"
                          ? `Thumbnail ${index + 1}`
                          : img.alt
                      }
                      width={200}
                      height={200}
                      className="w-full h-auto object-cover rounded-[8px]"
                    />
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Desktop Layout (Hidden on mobile) */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {(product?.images ? product.images : productImages).map(
              (img, index) => {
                const src = typeof img === "string" ? img : img.src;
                const alt =
                  typeof img === "string"
                    ? `Product Image ${index + 1}`
                    : img.alt;
                const cornerClass =
                  typeof img !== "string"
                    ? img.cornerClass
                    : "rounded-[16px] sm:rounded-[24px] md:rounded-[32px]";

                return (
                  <div
                    key={typeof img === "string" ? img : img.id}
                    className={`bg-card-bg-secondary w-full min-h-[510px] overflow-hidden ${cornerClass}`}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={800}
                      height={1000}
                      className="w-full h-auto object-cover object-center"
                    />
                  </div>
                );
              },
            )}
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full md:w-[35%] flex flex-col  gap-6 md:gap-8 ">
          <div>
            <span className="inline-block bg-accent hover:bg-accent/90 transition-colors cursor-pointer text-accent-foreground text-[11px] md:text-xs font-semibold px-4 py-3 rounded-[12px] mb-4">
              New Release
            </span>
            <h1 className="text-[20px] md:text-[32px] font-semibold text-primary  leading-[1.2] tracking-tight uppercase mb-4">
              {product?.title ||
                product?.name ||
                "ADIDAS 4DFWD X PARLEY RUNNING SHOES"}
            </h1>
            <p className="text-[24px] font-bold text-accent">
              ${product?.price || "125.00"}
            </p>
          </div>

          {/* Color Option */}
          <div>
            <h3 className="text-[16px] font-semibold text-primary mb-3 uppercase tracking-wider">
              Color
            </h3>
            <div className="flex gap-4 items-center mt-2">
              <div className="p-0.5 rounded-full border-[2px] border-primary flex items-center justify-center cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-[#1A2639]"></div>
              </div>
              <div className="p-0.5 rounded-full border-[2px] border-transparent flex items-center justify-center cursor-pointer hover:border-gray-300 transition-colors">
                <div className="w-9 h-9 rounded-full bg-[#7D8A74]"></div>
              </div>
            </div>
          </div>

          {/* Size Option */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[16px] font-semibold text-primary uppercase tracking-wider">
                Size
              </h3>
              <button className="text-sm font-medium  transition-colors uppercase tracking-wider underline underline-offset-2 text-primary hover:text-primary/60">
                Size Chart
              </button>
            </div>
            {/* Size Grid matching exactly */}
            <div className="grid grid-cols-6 md:grid-cols-8 gap-2">
              <button className="w-12.5 h-12 flex items-center justify-center font-medium text-sm rounded-lg transition-colors bg-accent-foreground hover:bg-primary text-dark-text hover:text-accent-foreground">
                38
              </button>
              <button className="w-12.5 h-12 flex items-center justify-center font-medium text-sm rounded-lg transition-colors bg-primary/20 text-dark-text/50 cursor-not-allowed">
                39
              </button>
              <button className="w-12.5 h-12 flex items-center justify-center font-medium text-sm rounded-lg transition-colors bg-primary/20 text-dark-text/50 cursor-not-allowed">
                40
              </button>
              <button className="w-12.5 h-12 flex items-center justify-center font-medium text-sm rounded-lg transition-colors bg-accent-foreground hover:bg-primary text-dark-text hover:text-accent-foreground">
                41
              </button>
              <button className="w-12.5 h-12 flex items-center justify-center font-medium text-sm rounded-lg transition-colors bg-accent-foreground hover:bg-primary text-dark-text hover:text-accent-foreground">
                42
              </button>
              <button className="w-12.5 h-12 flex items-center justify-center font-medium text-sm rounded-lg transition-colors bg-accent-foreground hover:bg-primary text-dark-text hover:text-accent-foreground">
                43
              </button>
              <button className="w-12.5 h-12 flex items-center justify-center font-medium text-sm rounded-lg transition-colors bg-accent-foreground hover:bg-primary text-dark-text hover:text-accent-foreground">
                44
              </button>
              <button className="w-12.5 h-12 flex items-center justify-center font-medium text-sm rounded-lg transition-colors bg-accent-foreground hover:bg-primary text-dark-text hover:text-accent-foreground">
                45
              </button>
              <button className="w-12.5 h-12 flex items-center justify-center font-medium text-sm rounded-lg transition-colors bg-accent-foreground hover:bg-primary text-dark-text hover:text-accent-foreground">
                46
              </button>
              <button className="w-12.5 h-12 flex items-center justify-center font-medium text-sm rounded-lg transition-colors bg-accent-foreground hover:bg-primary text-dark-text hover:text-accent-foreground">
                47
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2 sm:gap-3 w-full">
              <button className="flex-1 bg-primary hover:bg-primary/90 transition-colors text-white uppercase rounded-lg py-4 flex items-center justify-center tracking-[0.05em] text-sm font-medium">
                ADD TO CART
              </button>
              <button className="w-14 shrink-0 bg-primary hover:bg-primary/90 transition-colors rounded-lg flex items-center justify-center text-white">
                <Heart className="w-5 h-5 fill-none" strokeWidth={2} />
              </button>
            </div>
            <button className="w-full bg-accent hover:bg-accent/90 transition-colors text-white uppercase rounded-lg py-4 flex items-center justify-center tracking-[0.05em] text-sm font-medium">
              BUY IT NOW
            </button>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-primary mb-2 uppercase tracking-wider font-semibold text-base">
              About the product
            </h3>
            <div className="space-y-4 max-w-[95%] font-sans ">
              <p className="text-primary/70">
                {product?.description || "Shadow Navy / Army Green"}
              </p>
              <p className="text-primary/70">
                This product is excluded from all promotional discounts and
                offers.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-primary/70 marker:text-primary/40">
                <li>
                  Pay over time in interest-free installments with Affirm,
                  Klarna or Afterpay.
                </li>
                <li>
                  Join adiClub to get unlimited free standard shipping, returns,
                  & exchanges.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
