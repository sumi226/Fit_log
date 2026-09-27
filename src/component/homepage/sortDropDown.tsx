
"use client";

import { ChevronDown } from "lucide-react";

export type SortOption = "duration" | "calories" | "rating";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SortDropdown = ({
  value,
  onChange,
}: SortDropdownProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
        Sort By
      </span>

      <div className="relative">
        <select
          value={value}
          onChange={(event) =>
            onChange(event.target.value as SortOption)
          }
          className="
            appearance-none
            cursor-pointer
            rounded-xl
            border border-white/10
            bg-[#0c0d10]
            py-3 pl-4 pr-10
            text-sm font-semibold
            text-white
            outline-none
            transition-all
            hover:border-[#ccff00]/50
            focus:border-[#ccff00]
          "
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>

        <ChevronDown
          size={17}
          className="
            pointer-events-none
            absolute right-3 top-1/2
            -translate-y-1/2
            text-[#ccff00]
          "
        />
      </div>
    </div>
  );
};

export default SortDropdown;

