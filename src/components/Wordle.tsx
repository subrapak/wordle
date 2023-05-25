"use client";
import React from "react";
import { CTAButton } from "@/components/Buttons";
import { Guess } from "@/components/Guess";
import { Keyboard } from "@/components/Keyboard";
import {
  CORRECT_WORD,
  DEFAULT_GAME_CONFIG,
  DEFAULT_MODAL_CONFIG,
  MODAL_MESSAGES_BY_GUESS_INDEX,
  MODAL_TITLES_BY_GUESS_INDEX,
  WORD_LENGTH,
} from "@/constants";
import { COLOURS } from "@/utils";
import { useState } from "react";
import { GameFinishModal } from "./GameFinishModal";
import { GameConfig } from "@/types";

export const Wordle: React.FC = () => {
  const [gameConfig, setGameConfig] = useState<GameConfig>(DEFAULT_GAME_CONFIG);
  const resetGame = () => setGameConfig(DEFAULT_GAME_CONFIG);
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
  const [failModalConfig, setFailModalConfig] = useState(DEFAULT_MODAL_CONFIG);
  const [successModalConfig, setSuccessModalConfig] =
    useState(DEFAULT_MODAL_CONFIG);
  const showSuccessModal = () =>
    setSuccessModalConfig((config) => ({ ...config, isVisible: true }));
  const hideSuccessModal = () =>
    setSuccessModalConfig((config) => ({ ...config, isVisible: false }));
  const showFailModal = () =>
    setFailModalConfig((config) => ({ ...config, isVisible: true }));
  const hideFailModal = () =>
    setFailModalConfig((config) => ({ ...config, isVisible: false }));

  const hasGameFinished =
    gameConfig.guesses[gameConfig.currentAttemptIndex - 1] === CORRECT_WORD;

  const submitLatestAttempt = () => {
    setGameConfig((config) => {
      const isGuessCorrect =
        config.guesses[config.currentAttemptIndex] === CORRECT_WORD;
      if (
        isGuessCorrect &&
        config.currentAttemptIndex + 1 === config.guesses.length
      ) {
        showSuccessModal();
      } else if (config.currentAttemptIndex + 1 === config.guesses.length) {
        showFailModal();
      }
      return { ...config, currentAttemptIndex: config.currentAttemptIndex + 1 };
    });
  };

  return (
    <>
      <div className="flex flex-row gap-4">
        <div
          className="rounded px-4 z-10 w-full max-w-5xl items-center justify-center font-mono text-center lg:flex mb-20 bg-green-500 cursor-pointer"
          onClick={showSuccessModal}
        >
          Test Win Msg
        </div>
        <div
          className="rounded px-4 z-10 w-full max-w-5xl items-center justify-center font-mono text-center lg:flex mb-20 bg-red-500 cursor-pointer"
          onClick={showFailModal}
        >
          Test Lose Msg
        </div>
        <div
          className="rounded px-4 z-10 w-full max-w-5xl items-center justify-center font-mono text-center lg:flex mb-20 bg-cyan-500 cursor-pointer"
          onClick={resetGame}
        >
          Reset Game
        </div>
      </div>
      <div>
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
      </div>

      <Keyboard
        addCharToCurrentGuess={addCharToCurrentGuess}
        guesses={gameConfig.guesses}
        currentAttemptIndex={gameConfig.currentAttemptIndex}
        isDisabled={hasGameFinished}
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
      <GameFinishModal
        {...failModalConfig}
        handleCloseModal={hideFailModal}
        title={"❌ It's giving fail. ❌"}
        message={`Don't be sorry. Be Better.`}
      />
      <GameFinishModal
        {...successModalConfig}
        handleCloseModal={hideSuccessModal}
        title={MODAL_TITLES_BY_GUESS_INDEX[gameConfig.currentAttemptIndex - 1]}
        message={
          MODAL_MESSAGES_BY_GUESS_INDEX[gameConfig.currentAttemptIndex - 1]
        }
      />
    </>
  );
};
