
"use client";

import { useState } from "react";
import {
  Bookmark,
  CalendarPlus,
} from "lucide-react";

import { TWorkout } from "@/types/card.type";
import { usePlan } from "@/component/plan/planProvider";
import Toast from "./Toast";

interface WorkoutActionsProps {
  workout: TWorkout;
}

const WorkoutActions = ({
  workout,
}: WorkoutActionsProps) => {
  const {
    addToPlan,
    saveForLater,
  } = usePlan();

  const [toast, setToast] = useState("");

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const handleAddToPlan = () => {
    const added = addToPlan(workout);

    if (added) {
      showToast("Added to today's plan");
    } else {
      showToast(
        "Already added or today's plan is full"
      );
    }
  };

  const handleSaveForLater = () => {
    const saved = saveForLater(workout);

    if (saved) {
      showToast("Saved for later");
    } else {
      showToast("Already saved");
    }
  };

  return (
    <>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        {/* Add to Plan */}
        <button
          type="button"
          onClick={handleAddToPlan}
          className=" flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent  px-5 py-4 text-sm font-extrabold text-white transition-all duration-200 hover:border-[#ccff00] hover:bg-[#ccff00] hover:shadow-[0_0_25px_rgba(204,255,0,0.20)]  hover:text-black"
        >
          <CalendarPlus size={19} />
          Add to today's plan
        </button>

        {/* Save */}
        <button
          type="button"
          className=" flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent  px-5 py-4 text-sm font-extrabold text-white transition-all duration-200 hover:border-[#ccff00] hover:bg-[#ccff00] hover:shadow-[0_0_25px_rgba(204,255,0,0.20)]  hover:text-black"
        >
          <Bookmark size={19} />
          Save for later
        </button>
      </div>

      {/* Toast */}
      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </>
  );
};

export default WorkoutActions;

