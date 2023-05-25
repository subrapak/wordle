import React from "react";
import { CORRECT_WORD, WORD_LENGTH } from "@/app/page";
import { calculateCharacterColourFromGuess } from "@/utils";

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
            className={`flex w-14 h-14 m-1 justify-center items-center rounded ${bgColor}`}
          >
            {word?.[characterIndex]}
          </div>
        );
      })}
    </div>
  );
};
