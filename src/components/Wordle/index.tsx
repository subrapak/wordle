"use client";
import { useWordle } from "./useWordle";
import { Wordle as Component } from "./Wordle";

export const Wordle: React.FC = () => {
  const props = useWordle();
  return <Component {...props} />;
};
