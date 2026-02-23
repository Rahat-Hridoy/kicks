import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Trash2, ChevronDown } from "lucide-react";

export default function CartPage() {
  return (
    <main className="min-h-screen pt-6 lg:pt-[40px] px-4 md:px-6 lg:px-8 mt-[88px] md:mt-[120px] lg:mt-[162px]">
      <div className="mx-auto max-w-[1320px] w-full">
        {/* Header Section */}
        <div className="mb-8 lg:mb-12">
          <h1 className="text-2xl md:text-[32px] font-bold text-primary mb-3">
            Saving to celebrate
          </h1>
          <p className="text-sm md:text-base text-primary/80 mb-1 max-w-2xl font-medium">
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while supplies last. No code needed.
          </p>
          <p className="text-sm md:text-base font-medium text-primary">
            <Link
              href="/join"
              className="underline hover:text-primary/70 transition-colors"
            >
              Join us
            </Link>{" "}
            or{" "}
            <Link
              href="/login"
              className="underline hover:text-primary/70 transition-colors"
            >
              Sign-in
            </Link>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
          {/* Left Column - Your Bag Container */}
          <div className="flex-1 bg-white rounded-[24px] p-6 lg:p-8">
            <h2 className="text-xl md:text-[28px] font-bold text-primary mb-2">
              Your Bag
            </h2>
            <p className="text-sm md:text-base text-primary/70 mb-8 font-medium">
              Items in your bag not reserved- check out now to make them yours.
            </p>

            {/* Cart Item Layout */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Product Image Box */}
              <div className="w-full sm:w-[200px] xl:w-[240px] aspect-square bg-[#F4F4F4] rounded-[24px] p-4 flex items-center justify-center shrink-0">
                <Image
                  src="/image/newDropImage1.png"
                  alt="DROPSET TRAINER SHOES"
                  width={240}
                  height={240}
                  className="w-full h-auto object-contain mix-blend-multiply"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col pt-2">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-base md:text-lg lg:text-[22px] font-bold text-primary uppercase leading-tight mb-2">
                      DROPSET TRAINER SHOES
                    </h3>
                    <p className="text-sm md:text-base font-medium text-primary/70 mb-1">
                      Men&apos;s Road Running Shoes
                    </p>
                    <p className="text-sm md:text-base font-medium text-primary/70 mb-4">
                      Enamel Blue/ University White
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-primary font-medium mt-6">
                      <button className="flex items-center gap-2 hover:opacity-70 transition-opacity whitespace-nowrap">
                        Size 10{" "}
                        <ChevronDown
                          className="w-[18px] h-[18px]"
                          strokeWidth={2}
                        />
                      </button>
                      <button className="flex items-center gap-2 hover:opacity-70 transition-opacity whitespace-nowrap">
                        Quantity 1{" "}
                        <ChevronDown
                          className="w-[18px] h-[18px]"
                          strokeWidth={2}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="font-bold text-[#4A69E2] text-lg lg:text-xl whitespace-nowrap mt-1">
                    $130.00
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <button
                    className="hover:opacity-70 transition-opacity"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </button>
                  <button
                    className="hover:opacity-70 transition-opacity"
                    aria-label="Remove item"
                  >
                    <Trash2
                      className="w-6 h-6 text-primary"
                      strokeWidth={1.5}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="w-full lg:w-[320px] xl:w-[380px] shrink-0 pt-2 lg:pt-4">
            <h2 className="text-[28px] lg:text-[32px] font-bold text-primary mb-8 tracking-tight">
              Order Summary
            </h2>

            <div className="space-y-4 text-base font-medium text-primary mb-8">
              <div className="flex justify-between items-center">
                <span className="text-primary/80 text-[15px] xl:text-base">
                  1 ITEM
                </span>
                <span className="text-primary/80 text-[15px] xl:text-base">
                  $130.00
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-primary/80 text-[15px] xl:text-base">
                  Delivery
                </span>
                <span className="text-primary/80 text-[15px] xl:text-base">
                  $6.99
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-primary/80 text-[15px] xl:text-base">
                  Sales Tax
                </span>
                <span className="text-primary/80 text-[15px] xl:text-base">
                  -
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 font-bold text-primary text-xl tracking-tight">
                <span>Total</span>
                <span>$136.99</span>
              </div>
            </div>

            <button className="w-full bg-primary hover:bg-black transition-colors text-white font-bold text-sm tracking-wider uppercase rounded-xl py-4 flex items-center justify-center mb-6">
              CHECKOUT
            </button>

            <Link
              href="#"
              className="inline-block text-[15px] font-bold text-primary hover:text-primary/70 underline underline-offset-4 transition-colors"
            >
              User a promo code
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
