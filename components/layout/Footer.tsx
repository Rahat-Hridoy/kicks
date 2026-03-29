import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1320px]">
      {/* Top Section - Newsletter (Blue) */}
      <div className="bg-accent rounded-t-[24px] md:rounded-t-[48px] px-4 sm:px-12 md:px-16 pt-16 pb-20 overflow-hidden relative ">
        <div className="mx-auto max-w-[1320px] flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left: Text & Form */}
          <div className="w-full lg:w-1/2 z-10 flex flex-col items-start gap-1">
            <h2 className="text-[32px] md:text-[48px] font-semibold text-accent-foreground mb-1  md:uppercase tracking-tight max-w-[510px] leading-[1.2]">
              Join our KicksPlus Club & get 15% off
            </h2>
            <p className="text-base md:text-[20px] font-semibold font-sans text-accent-foreground/80 mb-4 md:mb-6">
              Sign up for free! Join the community.
            </p>
            <form className="flex w-full md:max-w-md gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent border border-white/50 rounded-lg px-4 py-2.5 md:py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors text-sm"
              />
              <button
                type="submit"
                className="transition-colors text-white text-[11px] md:text-xs uppercase tracking-wider px-5 py-2.5 md:px-6 md:py-3 rounded-lg shrink-0 bg-primary text-sm font-medium"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Right: KICKS Logo Graphic */}
          <div className=" w-full md:w-1/2 mt-4 lg:mt-0 lg:-mb-12 z-10">
            <div className=" w-fit mx-0 md:mx-auto relative">
              <Image
                src="/logo/kicks_light_logo.png"
                alt="KICKS Logo"
                width={351}
                height={88}
                className=" object-center w-[200px] h-[61px] md:w-[351px] md:h-[88px] "
              />
              {/* Orange Plus Badge */}
              <div className="absolute -top-[30%] -right-[5%] w-4 h-4 sm:w-8 sm:h-8 md:w-8 md:h-8 bg-secondary rounded-full flex items-center justify-center text-accent font-bold text-[10px] sm:text-xl md:text-2xl shadow-lg">
                +
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Links & Brand (Dark) */}
      <div className="bg-primary rounded-[32px] md:rounded-[48px] -mt-10 md:-mt-12 px-4 py-6 md:p-10 pb-28! relative z-20 overflow-hidden">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid grid-cols-1 md:grid-cols-[446px_1fr_1fr_1fr] gap-6 md:gap-[122px] md:mb-32">
            {/* About us */}
            <div className="mb-[12px] md:mb-0 ">
              <h3 className="text-[24px] md:text-[36px] text-secondary font-semibold">
                About us
              </h3>
              <p className="font-sans text-base md:text-xl font-semibold text-light-text  max-w-[446px] ">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold text-xl md:text-2xl text-secondary  mb-4">
                Categories
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  "Runners",
                  "Sneakers",
                  "Basketball",
                  "Outdoor",
                  "Golf",
                  "Hiking",
                ].map((cat) => (
                  <li key={cat}>
                    <Link
                      href={`/${cat.toLowerCase()}`}
                      className="font-sans text-base md:text-xl font-semibold text-light-text hover:text-white transition-colors"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-xl md:text-2xl text-secondary  mb-4">
                Company
              </h3>
              <ul className="flex flex-col gap-2">
                {["About", "Contact", "Blogs"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="font-sans text-base md:text-xl font-semibold text-light-text hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow us */}
            <div>
              <h3 className="font-semibold text-xl md:text-2xl text-secondary  mb-4">
                Follow us
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-light-text hover:text-white transition-colors w-6 h-6"
                  aria-label="Facebook"
                >
                  <Image
                    src="/icons/facebook.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="#"
                  className="text-light-text hover:text-white transition-colors w-6 h-6"
                  aria-label="Instagram"
                >
                  <Image
                    src="/icons/insta.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="#"
                  className="text-light-text hover:text-white transition-colors w-6 h-6"
                  aria-label="Twitter"
                >
                  <Image
                    src="/icons/twitter.png"
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="#"
                  className="text-light-text hover:text-white transition-colors w-6 h-6"
                  aria-label="Tiktok"
                >
                  <Image
                    src="/icons/tiktok.png"
                    alt="Tiktok"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>

          {/*  Bottom Brand Name */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none overflow-hidden translate-y-[25%] md:translate-y-[40%]  ">
            <Image
              src="/logo/kicks_light_logo.png"
              alt="KICKS Logo"
              width={1320}
              height={330}
              className="w-full h-auto object-contain px-4 md:px-8"
            />
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="flex justify-center py-7 mx-auto">
        <p className="text-primary font-sans">© All rights reserved</p>
      </div>
    </footer>
  );
}
