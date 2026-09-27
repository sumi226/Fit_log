
import CardWorkout from "@/component/shared/CardWorkout";
import { TWorkout } from "@/types/card.type";

const getWorkouts = async (): Promise<TWorkout[]> => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

const Workouts = async () => {
  const workouts = await getWorkouts();

  return (
    <section className="container mx-auto my-[100px] px-5">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          THE LIBRARY
        </h2>

        <p className="mt-2 text-base text-gray-400 md:text-lg">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <CardWorkout key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default Workouts;

