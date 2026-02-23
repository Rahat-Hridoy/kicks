import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
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

export function NewDrops() {
  return (
    <section className="px-4 py-6 md:pt-[90px] md:pb-[128px] ">
      <div className="mx-auto max-w-[1320px] w-full">
        {/* Header Section */}
        <div className="flex justify-between items-center md:items-end mb-6 md:mb-10 gap-4 md:gap-6">
          <h2 className="max-w-[172px] md:max-w-[590px] text-2xl md:text-[74px] font-semibold tracking-tight leading-1.2 md:leading-none text-primary md:uppercase">
            Don't miss out new drops
          </h2>
          <Link
            href="/new-drops"
            className="bg-accent hover:bg-accent/90 transition-colors text-accent-foreground font-medium text-sm px-4 py-3 md:px-8 md:py-4 rounded md:rounded-lg whitespace-nowrap"
          >
            SHOP NEW DROPS
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-4">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col group">
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
              <h3 className="text-base md:text-2xl font-semibold uppercase text-dark-text md:mb-4 leading-snug">
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
      </div>
    </section>
  );
}
