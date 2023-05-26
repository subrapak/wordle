import { CORRECT_WORD } from "@/constants";
import { calculateCharacterColourFromGuess } from "@/utils";
import React from "react";

interface GuessProps {
  word: string;
  backgroundColor?: string;
}

export const Guess: React.FC<GuessProps> = ({ word, backgroundColor }) => {
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
          return (
            <div
              key={count}
              className={`flex aspect-square w-10 sm:w-14 m-1 justify-center items-center rounded ${bgColor}`}
            >
              {word?.[characterIndex]}
            </div>
          );
        }
      )}
    </div>
  );
};
