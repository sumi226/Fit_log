

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { usePlan } from "@/component/plan/planProvider";

const Navbar = () => {
  const pathname = usePathname();

  const { planCount, savedCount } = usePlan();

  const isWorkoutActive =
    pathname === "/" || pathname === "/workout";

  const isPlanActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090b]/95 backdrop-blur-xl">
      <nav className="container mx-auto flex h-20 items-center justify-between px-5">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-white"
        >
          FIT<span className="text-[#ccff00]">LOG</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`text-sm font-bold uppercase tracking-wider transition-colors ${
              isWorkoutActive
                ? "text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm font-bold uppercase tracking-wider transition-colors ${
              isPlanActive
                ? "text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          {/* Plan */}
          <Link
            href="/my-plan"
            className="
              group flex items-center gap-2
              rounded-full
              border border-white/20
              px-4 py-2
              text-sm font-bold
              text-white
              transition-all duration-200
              hover:border-[#ccff00]
              hover:bg-[#ccff00]
              hover:text-black
            "
          >
            <span>Plan</span>

            <span
              className="
                flex h-6 w-6
                items-center justify-center
                rounded-full
                border border-white/30
                text-xs
                transition-colors
                group-hover:border-black
                group-hover:text-black
              "
            >
              {planCount}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan?tab=saved"
            className="
              group flex items-center gap-2
              rounded-full
              border border-white/20
              px-4 py-2
              text-sm font-bold
              text-white
              transition-all duration-200
              hover:border-[#ccff00]
              hover:bg-[#ccff00]
              hover:text-black
            "
          >
            <span>Saved</span>

            <span
              className="
                flex h-6 w-6
                items-center justify-center
                rounded-full
                border border-white/30
                text-xs
                transition-colors
                group-hover:border-black
                group-hover:text-black
              "
            >
              {savedCount}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

