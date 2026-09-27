
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  Flame,
  Star,
  X,
  Check,
} from "lucide-react";

import { TWorkout } from "@/types/card.type";

interface PlanWorkoutCardProps {
  workout: TWorkout;
  type: "plan" | "saved";
  onRemove: (id: number) => void;
  onDone?: (id: number) => void;
}

const PlanWorkoutCard = ({
  workout,
  type,
  onRemove,
  onDone,
}: PlanWorkoutCardProps) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10]">
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative h-52 w-full shrink-0 sm:h-auto sm:w-56">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 640px) 100vw, 224px"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white">
                {workout.name}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {workout.equipment}
              </p>
            </div>

            {/* Remove */}
            <button
              type="button"
              onClick={() => onRemove(workout.id)}
              className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-white/5 hover:text-red-400"
              aria-label="Remove workout"
            >
              <X size={20} />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-5 flex flex-wrap items-center gap-5 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <Clock3
                size={15}
                className="text-[#ccff00]"
              />
              {workout.duration} min
            </div>

            <div className="flex items-center gap-1.5">
              <Flame
                size={15}
                className="text-[#ccff00]"
              />
              {workout.caloriesBurned} kcal
            </div>

            <div className="flex items-center gap-1.5">
              <Star
                size={15}
                fill="currentColor"
                className="text-[#ccff00]"
              />
              <span className="text-white">
                {workout.rating}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <Link
              href={`/listed-workout/${workout.id}`}
              className="
                inline-flex items-center justify-center
                rounded-lg
                border border-white/15
                px-4 py-2.5
                text-xs font-bold
                text-white
                transition-colors
                hover:border-[#ccff00]
                hover:text-[#ccff00]
              "
            >
              View Details
            </Link>

            {type === "plan" && onDone && (
              <button
                type="button"
                onClick={() => onDone(workout.id)}
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-lg
                  bg-[#ccff00]
                  px-4 py-2.5
                  text-xs font-bold
                  text-black
                  transition-colors
                  hover:bg-[#b8eb00]
                "
              >
                <Check size={15} />
                Mark as Done
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PlanWorkoutCard;

