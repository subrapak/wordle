"use client";
import { CTAButton } from "@/components/Buttons";
import { Guess } from "@/components/Guess";
import { Keyboard } from "@/components/Keyboard";
import {
  MODAL_MESSAGES_BY_GUESS_INDEX,
  MODAL_TITLES_BY_GUESS_INDEX,
} from "@/constants";
import { COLOURS } from "@/utils";
import React from "react";
import { GameFinishModal } from "../GameFinishModal";
import { useWordle } from "./useWordle";

interface WordleProps extends ReturnType<typeof useWordle> {}

export const Wordle: React.FC<WordleProps> = ({
  gameConfig,
  resetGame,
  addCharToCurrentGuess,
  deleteLatestChar,
  submitLatestAttempt,
  hasGameFinished,
  successModal,
  failModal,
}) => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <div
          className="rounded px-4 z-10 w-full max-w-5xl items-center justify-center font-mono text-center lg:flex mb-20 bg-green-500 cursor-pointer"
          onClick={successModal.open}
        >
          Test Win Msg
        </div>
        <div
          className="rounded px-4 z-10 w-full max-w-5xl items-center justify-center font-mono text-center lg:flex mb-20 bg-red-500 cursor-pointer"
          onClick={failModal.open}
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
        {...failModal.config}
        handleCloseModal={failModal.close}
        title={"❌ It's giving fail. ❌"}
        message={`Don't be sorry. Be Better.`}
      />
      <GameFinishModal
        {...successModal.config}
        handleCloseModal={successModal.close}
        title={MODAL_TITLES_BY_GUESS_INDEX[gameConfig.currentAttemptIndex - 1]}
        message={
          MODAL_MESSAGES_BY_GUESS_INDEX[gameConfig.currentAttemptIndex - 1]
        }
      />
    </>
  );
};
