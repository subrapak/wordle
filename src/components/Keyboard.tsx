import React from "react";
import { KeyboardRow } from "./KeyboardRow";

interface KeyboardProps {
  addCharToCurrentGuess: (char: string) => void;
  guesses: string[];
  currentAttemptIndex: number;
  isDisabled?: boolean;
}
export const keyboardRows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

export const allLetters = keyboardRows.join("");
export const Keyboard: React.FC<KeyboardProps> = ({
  addCharToCurrentGuess,
  guesses,
  currentAttemptIndex,
  isDisabled = false,
}) => {
  return (
    <div className="flex flex-col justify-evenly items-stretch w-full">
      {keyboardRows.map((row) => (
        <KeyboardRow
          key={row}
          characters={row}
          addCharToCurrentGuess={addCharToCurrentGuess}
          guesses={guesses}
          currentAttemptIndex={currentAttemptIndex}
          isDisabled={isDisabled}
        />
      ))}
    </div>
  );
};
