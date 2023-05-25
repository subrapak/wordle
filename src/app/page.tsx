"use client";
import { Wordle } from "@/components/Wordle";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between w-100vw h-full py-10 px-1">
      <Wordle />
    </main>
  );
}
