"use client";
import { CTAButton } from "@/components/Buttons";
import { Guess } from "@/components/Guess";
import { Keyboard } from "@/components/Keyboard";
import { COLOURS } from "@/utils";
import { useState } from "react";

interface GameConfig {
  guesses: string[];
  currentAttemptIndex: number;
}
export const WORD_LENGTH = 5;
export const CORRECT_WORD = "ARUBA";
const defaultGameConfig = {
  guesses: ["", "", "", "", ""],
  currentAttemptIndex: 0,
};
export default function Home() {
  const [gameConfig, setGameConfig] = useState<GameConfig>(defaultGameConfig);
  const resetGame = () => setGameConfig(defaultGameConfig);
  const addCharToCurrentGuess = (char: string) => {
    setGameConfig((config) => {
      const currentGuess = config.guesses[config.currentAttemptIndex];
      if (currentGuess.length === WORD_LENGTH) {
        return config;
      }
      const newCurrentGuess = `${currentGuess}${char.toUpperCase()}`;
      const newGuesses = [
        ...config.guesses.slice(0, config.currentAttemptIndex),
        newCurrentGuess,
        ...config.guesses.slice(config.currentAttemptIndex + 1),
      ];

      return { ...config, guesses: newGuesses };
    });
  };

  const deleteLatestChar = () => {
    setGameConfig((config) => {
      const currentGuess = config.guesses[config.currentAttemptIndex];
      const newCurrentGuess = currentGuess.slice(0, currentGuess.length - 1);
      const newGuesses = [
        ...config.guesses.slice(0, config.currentAttemptIndex),
        newCurrentGuess,
        ...config.guesses.slice(config.currentAttemptIndex + 1),
      ];
      return { ...config, guesses: newGuesses };
    });
  };

  const submitLatestAttempt = () => {
    setGameConfig((config) => {
      return { ...config, currentAttemptIndex: config.currentAttemptIndex + 1 };
    });
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="z-10 w-full max-w-5xl items-center justify-center font-mono text-center lg:flex mb-20 bg-cyan-500"
        onClick={resetGame}
      >
        Wordle
      </div>
      {Array.from(Array(gameConfig.guesses.length).keys()).map(
        (guess, guessIndex) => (
          <Guess
            key={guess}
            word={gameConfig.guesses[guessIndex]}
            backgroundColor={
              guessIndex >= gameConfig.currentAttemptIndex
                ? COLOURS.KEYBOARD_UNSELECTED_GREY
                : undefined
            }
          />
        )
      )}

      <Keyboard
        addCharToCurrentGuess={addCharToCurrentGuess}
        guesses={gameConfig.guesses}
        currentAttemptIndex={gameConfig.currentAttemptIndex}
      />
      <div className="flex flex-row mt-2">
        <CTAButton
          text="Delete"
          bgColor="bg-red-600"
          onClick={deleteLatestChar}
        />
        <CTAButton
          text="Submit"
          bgColor="bg-green-600"
          onClick={submitLatestAttempt}
        />
      </div>
    </main>
  );
}
