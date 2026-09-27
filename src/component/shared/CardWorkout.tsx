
import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  Flame,
  Star,
  Dumbbell,
} from "lucide-react";

import { TWorkout } from "@/types/card.type";

interface CardWorkoutProps {
  workout: TWorkout;
}

const CardWorkout = ({ workout }: CardWorkoutProps) => {
  return (
    <Link href={`/workout/${workout.id}`} className="group block">
      <article
        className="
          overflow-hidden rounded-2xl
          border border-white/10
          bg-[#0c0d10]
          text-white
          transition-all duration-300
          hover:-translate-y-1
          hover:border-[#ccff00]
          hover:shadow-[0_0_25px_rgba(204,255,0,0.10)]
        "
      >
        {/* Image */}
        <div className="relative h-60 w-full overflow-hidden bg-[#15171c]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Difficulty */}
          <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {workout.difficulty}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Muscle Groups */}
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full border border-[#ccff00]/40 bg-[#ccff00]/10 px-3 py-1 text-[10px] font-bold tracking-wider text-[#ccff00]">
                {muscle.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="text-xl font-extrabold uppercase tracking-tight transition-colors group-hover:text-[#ccff00]">
            {workout.name}
          </h3>

          {/* Equipment */}
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
            <Dumbbell size={16} />
            <span>{workout.equipment}</span>
          </div>

          {/* Divider */}
          <div className="my-5 border-t border-white/10" />

          {/* Stats */}
          <div className="flex items-center justify-between gap-3 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <Clock3 size={15} className="text-[#ccff00]" />
              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Flame size={15} className="text-[#ccff00]" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Star
                size={15}
                fill="currentColor"
                className="text-[#ccff00]"
              />
              <span className="text-white">{workout.rating}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CardWorkout;

