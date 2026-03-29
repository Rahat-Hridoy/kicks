"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    title: "Good Quality",
    content: "I highly recommend shopping from kicks",
    rating: 5.0,
    userImage: "/image/avatar1.png",
    reviewImage: "/image/review1.jpg",
  },
  {
    id: 2,
    title: "Good Quality",
    content: "I highly recommend shopping from kicks",
    rating: 5.0,
    userImage: "/image/avatar2.png",
    reviewImage: "/image/review2.jpg",
  },
  {
    id: 3,
    title: "Good Quality",
    content: "I highly recommend shopping from kicks",
    rating: 5.0,
    userImage: "/image/avatar3.png",
    reviewImage: "/image/review3.jpg",
  },
];

export function Reviews() {
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll ? reviews : reviews.slice(0, 1);

  return (
    <section className="px-4 py-[26px] md:py-[128px] ">
      <div className="mx-auto max-w-[1320px] w-full">
        <div className="flex justify-between items-center md:items-end mb-6 md:mb-12">
          <h2 className="text-[32px] sm:text-6xl capitalize md:uppercase text-primary tracking-tight leading-none text-2xl md:text-[74px] font-semibold md:leading-[95%]">
            Reviews
          </h2>
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-accent hover:bg-accent/90 transition-colors text-light-text text-sm font-medium px-[16px] py-[11px] md:px-[32px] md:py-[15px] rounded-[8px] uppercase mb-1 md:mb-2"
          >
            {showAll ? "HIDE ALL" : "SEE ALL"}
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`flex flex-col rounded-[16px] md:rounded-[32px] overflow-hidden bg-accent-foreground shadow-sm ${
                !showAll && index > 0 ? "hidden md:flex" : "flex"
              }`}
            >
              {/* Top part: Review Content */}
              <div className="p-4 md:p-8 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex flex-col gap-1 md:gap-2 relative z-10 w-full pr-2">
                    <h3 className="text-[20px] md:text-[24px] font-semibold text-dark-text ">
                      {review.title}
                    </h3>
                    <p className="text-sm md:text-base text-dark-text/70 leading-snug">
                      {review.content}
                    </p>
                  </div>
                  <div className="w-[48px] h-[48px] md:w-[64px] md:h-[64px] rounded-full overflow-hidden relative shrink-0 mt-1">
                    <Image
                      src={review.userImage}
                      alt="User avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 md:gap-2 mt-auto">
                  <div className="flex text-secondary gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 fill-current"
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-primary text-sm md:text-base mt-0.5">
                    {review.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Bottom part: Image */}
              <div className="relative w-full h-[325px] overflow-hidden aspect-4/3 md:aspect-square">
                <Image
                  src={review.reviewImage}
                  alt="Review photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
