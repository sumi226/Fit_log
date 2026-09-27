
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Dumbbell,
  Clock3,
  Flame,
} from "lucide-react";

import { usePlan } from "@/component/plan/planProvider";
import PlanWorkoutCard from "@/component/plan/workoutCard";

type Tab = "plan" | "saved";

const MyPlanPage = () => {
  const {
    todayPlan,
    savedWorkouts,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = usePlan();

  const [activeTab, setActiveTab] =
    useState<Tab>("plan");

  const currentWorkouts =
    activeTab === "plan"
      ? todayPlan
      : savedWorkouts;

  const totalMinutes = todayPlan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = todayPlan.reduce(
    (total, workout) =>
      total + workout.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen bg-[#08090b] px-5 py-12 text-white md:py-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-base text-gray-400 md:text-lg">
            Cap of five lifts for today. Finish them,
            then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <MetricCard
            icon={<Dumbbell size={22} />}
            label="Exercises"
            value={todayPlan.length}
          />

          <MetricCard
            icon={<Clock3 size={22} />}
            label="Minutes"
            value={totalMinutes}
          />

          <MetricCard
            icon={<Flame size={22} />}
            label="Calories"
            value={totalCalories}
          />
        </div>

        {/* Tabs */}
        <div className="mt-10 flex border-b border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`border-b-2 px-5 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${
              activeTab === "plan"
                ? "border-[#ccff00] text-[#ccff00]"
                : "border-transparent text-gray-500 hover:text-white"
            }`}
          >
            Today's Plan
            <span className="ml-2">
              ({todayPlan.length})
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`border-b-2 px-5 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${
              activeTab === "saved"
                ? "border-[#ccff00] text-[#ccff00]"
                : "border-transparent text-gray-500 hover:text-white"
            }`}
          >
            Saved
            <span className="ml-2">
              ({savedWorkouts.length})
            </span>
          </button>
        </div>

        {/* Workout List */}
        <div className="mt-8">
          {currentWorkouts.length > 0 ? (
            <div className="space-y-5">
              {currentWorkouts.map((workout) => (
                <PlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  type={activeTab}
                  onRemove={
                    activeTab === "plan"
                      ? removeFromPlan
                      : removeFromSaved
                  }
                  onDone={
                    activeTab === "plan"
                      ? markAsDone
                      : undefined
                  }
                />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </main>
  );
};

const MetricCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0c0d10] p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ccff00]/10 text-[#ccff00]">
          {icon}
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
          {label}
        </span>
      </div>

      <div className="mt-4 text-3xl font-black text-white">
        {value}
      </div>
    </div>
  );
};

const EmptyState = () => {
  return (
    <div className="rounded-3xl border border-dashed border-white/10 bg-[#0c0d10] px-6 py-16 text-center">
      <h2 className="text-2xl font-black uppercase text-white">
        NOTHING HERE YET
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
        Browse the library and add a lift to get
        today moving.
      </p>

      <Link
        href="/"
        className="
          mt-6 inline-flex
          rounded-xl
          bg-[#ccff00]
          px-6 py-3
          text-sm font-extrabold
          text-black
          transition-all
          hover:bg-[#b8eb00]
          hover:shadow-[0_0_25px_rgba(204,255,0,0.18)]
        "
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default MyPlanPage;

