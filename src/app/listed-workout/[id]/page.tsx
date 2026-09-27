
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Bookmark,
  CalendarPlus,
  Clock3,
  Dumbbell,
  Flame,
  Layers3,
  Star,
} from "lucide-react";

import { TWorkout } from "@/types/card.type";
import WorkoutActions from "@/component/plan/WorkoutAction";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkout = async (id: string): Promise<TWorkout | null> => {
  const res = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
};

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#08090b] px-5 py-10 text-white md:py-16">
      <div className="container mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-[#ccff00]"
        >
          <ArrowLeft size={18} />
          Back to workouts
        </Link>

        {/* Two Columns */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#111318] md:h-[600px]">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                {workout.difficulty}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="
                    rounded-full
                    border border-[#ccff00]/40
                    bg-[#ccff00]/10
                    px-3 py-1
                    text-xs font-bold
                    uppercase tracking-wider
                    text-[#ccff00]
                  "
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-5 text-base leading-7 text-gray-400 md:text-lg">
              {workout.description}
            </p>

            {/* KEY SPECS */}
            <div className="mt-8">
              <div className="mb-4 flex items-center gap-2">
                <Layers3 size={20} className="text-[#ccff00]" />

                <h2 className="text-lg font-extrabold uppercase tracking-wide">
                  Key Specs
                </h2>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d10]">
                <SpecRow label="Equipment" value={workout.equipment} />

                <SpecRow label="Difficulty" value={workout.difficulty} />

                <SpecRow label="Sets" value={workout.sets.toString()} />

                <SpecRow label="Reps" value={workout.reps} />

                <SpecRow label="Duration" value={`${workout.duration} min`} />

                <SpecRow
                  label="Calories"
                  value={`${workout.caloriesBurned} kcal`}
                />

                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Rating
                  </span>

                  <span className="flex items-center gap-2 text-sm font-semibold">
                    <Star
                      size={16}
                      fill="currentColor"
                      className="text-[#ccff00]"
                    />
                    {workout.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* INSTRUCTIONS */}
            <div className="mt-10">
              <h2 className="mb-5 text-lg font-extrabold uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-4 rounded-xl border border-white/10 bg-[#0c0d10] p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-sm font-black text-black">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-gray-300">
                      {instruction}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* BUTTONS */}
            <WorkoutActions workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
};

const SpecRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
        {label}
      </span>

      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  );
};

export default WorkoutDetailsPage;

