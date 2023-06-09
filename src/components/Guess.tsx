import { CORRECT_WORD } from "@/utils/constants";
import { calculateCharacterColourFromGuess } from "@/utils/game";
import React from "react";
import { allLetters } from "./Keyboard";

interface GuessProps {
  word: string;
  backgroundColor?: string;
  disable?: boolean;
}

export const Guess: React.FC<GuessProps> = ({
  word,
  backgroundColor,
  disable = false,
}) => {
  return (
    <div className="flex flex-row">
      {Array.from(Array(CORRECT_WORD.length).keys()).map(
        (count, characterIndex) => {
          const bgColor =
            backgroundColor ??
            calculateCharacterColourFromGuess(
              word,
              characterIndex,
              CORRECT_WORD
            );
          const rawChar = word?.[characterIndex];
          const formattedChar = allLetters
            .toLocaleUpperCase()
            .includes(rawChar?.toLocaleUpperCase())
            ? rawChar?.toLocaleUpperCase()
            : "" || "";

          return (
            <div
              key={count}
              className={`flex font-bold text-stone-50 aspect-square w-8 m-1 justify-center items-center rounded ${bgColor}`}
            >
              {!disable && formattedChar}
            </div>
          );
        }
      )}
    </div>
  );
};
