
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "@/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Workout",
      href: "/workout",
    },
    {
      name: "My Plan",
      href: "/my-plan",
    },
  ];

  return (
    <nav className="w-full border-b border-white/10 bg-[#0c0d10] text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <Image
            src={logo}
            alt="FITLOG Logo"
            width={42}
            height={42}
            className="h-10 w-10 object-contain"
          />

          <span className="text-xl font-extrabold tracking-wide">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          {/* Plan */}
          <div
            className="
              group flex cursor-pointer items-center gap-2
              rounded-full border border-white/30
              px-4 py-2
              text-sm font-bold text-white
              transition-all duration-200
              hover:scale-105
              hover:border-[#ccff00]
              hover:bg-[#ccff00]
              hover:text-black
            "
          >
            <span>Plan</span>

            <span
              className="
                flex h-5 min-w-5 items-center justify-center
                rounded-full
                border border-white/30
                bg-transparent
                px-1
                text-xs text-white
                transition-all duration-200
                group-hover:border-black
                group-hover:text-black
              "
            >
              3
            </span>
          </div>

          {/* Saved */}
          <div
            className="
              group flex cursor-pointer items-center gap-2
              rounded-full border border-white/30
              px-4 py-2
              text-sm font-bold text-white
              transition-all duration-200
              hover:scale-105
              hover:border-[#ccff00]
              hover:bg-[#ccff00]
              hover:text-black
            "
          >
            <span>Saved</span>

            <span
              className="
                flex h-5 min-w-5 items-center justify-center
                rounded-full
                border border-white/30
                bg-transparent
                px-1
                text-xs text-white
                transition-all duration-200
                group-hover:border-black
                group-hover:text-black
              "
            >
              8
            </span>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

