import React from "react";
import { KeyboardKey } from "./KeyboardKey";
import {
  calculateCharacterColourForKeyboard,
  createCharacterArray,
} from "@/utils";
import { CORRECT_WORD } from "@/constants";

interface KeyboardRowProps {
  characters: string;
  addCharToCurrentGuess?: (char: string) => void;
  guesses: string[];
  currentAttemptIndex: number;
}

export const KeyboardRow: React.FC<KeyboardRowProps> = ({
  characters,
  addCharToCurrentGuess,
  guesses,
  currentAttemptIndex,
}) => {
  const characterArray = createCharacterArray(characters);
  return (
    <div className="flex flex-row justify-center">
      {characterArray.map((char) => {
        const backgroundColor = calculateCharacterColourForKeyboard(
          guesses.slice(0, currentAttemptIndex),
          char.toUpperCase(),
          CORRECT_WORD
        );
        return (
          <KeyboardKey
            key={char}
            char={char}
            onClickKey={() => addCharToCurrentGuess?.(char)}
            backgroundColor={backgroundColor}
          />
        );
      })}
    </div>
  );
};
