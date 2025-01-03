import { Utensils } from "lucide-react";

export default function RestaurantHero() {
  return (
    <div className="relative h-[60vh] bg-[url('https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <Utensils className="mb-4 h-12 w-12 text-white" />
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Savory Sojourn
        </h1>
        <p className="text-lg text-gray-200">
          Experience fine dining at its best
        </p>
      </div>
    </div>
  );
}
