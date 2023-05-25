import React from "react";
import { calculateCharacterColourFromGuess } from "@/utils";
import { CORRECT_WORD, WORD_LENGTH } from "@/constants";

interface GuessProps {
  word: string;
  backgroundColor?: string;
}

export const Guess: React.FC<GuessProps> = ({ word, backgroundColor }) => {
  return (
    <div className="flex flex-row">
      {Array.from(Array(WORD_LENGTH).keys()).map((count, characterIndex) => {
        const bgColor =
          backgroundColor ??
          calculateCharacterColourFromGuess(word, characterIndex, CORRECT_WORD);
        return (
          <div
            key={count}
            className={`flex aspect-square w-10 sm:w-14 m-1 justify-center items-center rounded ${bgColor}`}
          >
            {word?.[characterIndex]}
          </div>
        );
      })}
    </div>
  );
};
