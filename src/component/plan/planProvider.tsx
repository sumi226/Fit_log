
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { TWorkout } from "@/types/card.type";

interface PlanContextType {
  todayPlan: TWorkout[];
  savedWorkouts: TWorkout[];

  addToPlan: (workout: TWorkout) => boolean;
  saveForLater: (workout: TWorkout) => boolean;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;

  planCount: number;
  savedCount: number;
}

const PlanContext = createContext<PlanContextType | undefined>(
  undefined
);

const PLAN_KEY = "fitlog-today-plan";
const SAVED_KEY = "fitlog-saved-workouts";

export const PlanProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [todayPlan, setTodayPlan] = useState<TWorkout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<TWorkout[]>([]);

  // Load saved data
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem(PLAN_KEY);
      const storedSaved = localStorage.getItem(SAVED_KEY);

      if (storedPlan) {
        setTodayPlan(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSavedWorkouts(JSON.parse(storedSaved));
      }
    } catch (error) {
      console.error("Failed to load FitLog data:", error);
    }
  }, []);

  // Save today's plan
  useEffect(() => {
    localStorage.setItem(
      PLAN_KEY,
      JSON.stringify(todayPlan)
    );
  }, [todayPlan]);

  // Save saved workouts
  useEffect(() => {
    localStorage.setItem(
      SAVED_KEY,
      JSON.stringify(savedWorkouts)
    );
  }, [savedWorkouts]);

  // Add to today's plan
  const addToPlan = (workout: TWorkout) => {
    if (todayPlan.length >= 5) {
      return false;
    }

    const alreadyExists = todayPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadyExists) {
      return false;
    }

    setTodayPlan((prev) => [...prev, workout]);

    return true;
  };

  // Save for later
  const saveForLater = (workout: TWorkout) => {
    const alreadySaved = savedWorkouts.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      return false;
    }

    setSavedWorkouts((prev) => [...prev, workout]);

    return true;
  };

  // Remove from today's plan
  const removeFromPlan = (id: number) => {
    setTodayPlan((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
  };

  // Remove from saved
  const removeFromSaved = (id: number) => {
    setSavedWorkouts((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
  };

  // Mark as done = remove from today's plan
  const markAsDone = (id: number) => {
    setTodayPlan((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
  };

  return (
    <PlanContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        planCount: todayPlan.length,
        savedCount: savedWorkouts.length,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error(
      "usePlan must be used inside PlanProvider"
    );
  }

  return context;
};

