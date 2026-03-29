"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, User, Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="p-4 sm:p-6 lg:px-8 fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-[1320px] w-full px-0">
        <div className="flex items-center justify-between bg-light-background rounded-[12px] md:rounded-[24px] px-4 md:px-6 py-4 lg:p-8 shadow-sm">
          {/* Left Side */}
          <div className="flex items-center flex-1">
            <button
              aria-label="Menu"
              className="lg:hidden text-primary hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-[20px] h-[20px]" />
            </button>
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/new-drops"
                className="font-semibold text-primary transition-colors mr-2 hover:text-secondary whitespace-nowrap"
              >
                New Drops 🔥
              </Link>

              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[16px] font-semibold text-primary transition-colors mr-2 hover:text-secondary whitespace-nowrap bg-transparent">
                      Men
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[150px] gap-2 p-4 bg-light-background rounded-[24px] shadow-md">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/men/shoes"
                              className="block select-none space-y-1 rounded-md p-2 leading-none outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                            >
                              <div className="text-sm font-medium text-gray-900">
                                Shoes
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/men/clothing"
                              className="block select-none space-y-1 rounded-md p-2 leading-none outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                            >
                              <div className="text-sm font-medium text-gray-900">
                                Clothing
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[16px] font-semibold text-primary transition-colors mr-2 hover:text-secondary whitespace-nowrap bg-transparent">
                      Women
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[150px] gap-2 p-4 bg-white rounded-xl shadow-md border border-gray-100">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/women/shoes"
                              className="block select-none space-y-1 rounded-md p-2 leading-none outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                            >
                              <div className="text-sm font-medium text-gray-900">
                                Shoes
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/women/clothing"
                              className="block select-none space-y-1 rounded-md p-2 leading-none outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                            >
                              <div className="text-sm font-medium text-gray-900">
                                Clothing
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Middle Part (Logo) */}
          <div className="flex-1 flex justify-center">
            <Link href="/">
              <Image
                src="/logo/kicks_logo.png"
                alt="Logo"
                width={128}
                height={32}
              />
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-end gap-4 lg:gap-[40px] flex-1">
            <button
              aria-label="Search"
              className="hidden lg:block text-gray-900 hover:text-gray-600 transition-colors"
            >
              <Search className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] stroke-[2.5]" />
            </button>
            <button
              aria-label="Profile"
              className="text-gray-900 hover:text-gray-600 transition-colors"
            >
              <User
                className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] stroke-[2.5]"
                fill="currentColor"
              />
            </button>
            <button
              aria-label="Cart"
              className="bg-secondary transition-colors rounded-full w-[20px] h-[20px] md:w-[28px] md:h-[28px] flex items-center justify-center text-sm md:text-base font-bold text-gray-900"
            >
              0
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[88px] left-4 right-4 sm:left-6 sm:right-6 bg-light-background rounded-3xl p-6 shadow-xl border border-gray-100 lg:hidden flex flex-col gap-4">
          <Link
            href="/new-drops"
            className="font-bold text-lg text-primary hover:text-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            New Drops 🔥
          </Link>
          <div className="h-px bg-gray-100" />
          <Link
            href="/men/shoes"
            className="font-bold text-lg text-primary hover:text-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Men
          </Link>
          <div className="h-px bg-gray-100" />
          <Link
            href="/women/shoes"
            className="font-bold text-lg text-primary hover:text-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Women
          </Link>
        </div>
      )}
    </nav>
  );
}
