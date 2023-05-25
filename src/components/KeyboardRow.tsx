import React from "react";
import { KeyboardKey } from "./KeyboardKey";
import {
  calculateCharacterColourForKeyboard,
  createCharacterArray,
} from "@/utils";
import { CORRECT_WORD } from "@/constants";

interface KeyboardRowProps {
  characters: string;
  addCharToCurrentGuess: (char: string) => void;
  guesses: string[];
  currentAttemptIndex: number;
  isDisabled: boolean;
}

export const KeyboardRow: React.FC<KeyboardRowProps> = ({
  characters,
  addCharToCurrentGuess,
  guesses,
  currentAttemptIndex,
  isDisabled = false,
}) => {
  const characterArray = createCharacterArray(characters);
  return (
    <div className="flex flex-row justify-center w-full">
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
            onClickKey={() => {
              !isDisabled && addCharToCurrentGuess(char);
            }}
            backgroundColor={backgroundColor}
          />
        );
      })}
    </div>
  );
};
