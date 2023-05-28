"use client";
import { Wordle } from "@/components/Wordle";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between w-100vw min-h-full py-10 px-1 bg-gray-950 gap-6">
      <Wordle />
    </main>
  );
}
