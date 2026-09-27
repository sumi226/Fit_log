
"use client";

import { useEffect, useMemo, useState } from "react";

import CardWorkout from "@/component/shared/CardWorkout";
import SortDropdown, {
  SortOption,
} from "@/component/homepage/sortDropDown";

import { TWorkout } from "@/types/card.type";

const Workouts = () => {
  const [workouts, setWorkouts] = useState<TWorkout[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const res = await fetch(
          "https://api.api-store.workers.dev/api/fitlog"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch workouts");
        }

        const data: TWorkout[] = await res.json();

        setWorkouts(data);
      } catch (error) {
        console.error(
          "Failed to fetch workouts:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    getWorkouts();
  }, []);

  const sortedWorkouts = useMemo(() => {
    const sorted = [...workouts];

    sorted.sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });

    return sorted;
  }, [workouts, sortBy]);

  return (
    <section className="container mx-auto my-[100px] px-5">
      {/* Header */}
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            THE LIBRARY
          </h2>

          <p className="mt-2 text-base text-gray-400 md:text-lg">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Sort Dropdown */}
        <SortDropdown
          value={sortBy}
          onChange={setSortBy}
        />
      </div>

      {/* Loading */}
      {loading ? (
        <div className="py-20 text-center">
          <p className="text-sm font-semibold text-gray-500">
            Loading workouts…
          </p>
        </div>
      ) : (
        /* Workout Grid */
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedWorkouts.map((workout) => (
            <CardWorkout
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Workouts;

