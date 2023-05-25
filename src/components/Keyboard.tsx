import React from "react";
import { KeyboardRow } from "./KeyboardRow";

interface KeyboardProps {
  addCharToCurrentGuess?: (char: string) => void;
  guesses: string[];
  currentAttemptIndex: number;
}

export const Keyboard: React.FC<KeyboardProps> = ({
  addCharToCurrentGuess,
  guesses,
  currentAttemptIndex,
}) => {
  const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  return (
    <div className="flex flex-col justify-evenly items-stretch">
      {rows.map((row) => (
        <KeyboardRow
          key={row}
          characters={row}
          addCharToCurrentGuess={addCharToCurrentGuess}
          guesses={guesses}
          currentAttemptIndex={currentAttemptIndex}
        />
      ))}
    </div>
  );
};
