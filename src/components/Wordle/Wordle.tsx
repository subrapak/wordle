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
  isGameWon,
  isGameLost,
  successModal,
  failModal,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div
          className="rounded px-4 z-10 w-full max-w-5xl items-center justify-center font-mono text-center lg:flex mb-20 cursor-pointer text-stone-50"
          onClick={resetGame}
        >
          {`Arohan's Aruba Wordle`}
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
        isDisabled={isGameWon || isGameLost}
      />
      <div className="flex flex-row mt-2">
        <CTAButton
          text="Delete"
          bgColor="bg-red-600"
          onClick={deleteLatestChar}
          isDisabled={isGameLost || isGameWon}
        />
        <CTAButton
          text="Submit"
          bgColor="bg-green-600"
          onClick={submitLatestAttempt}
          isDisabled={isGameLost || isGameWon}
        />
      </div>
      <div>
        {isGameWon && (
          <div
            className="rounded px-4 py-2 z-10 w-full max-w-5xl items-center justify-center font-mono text-center lg:flex mb-20 bg-slate-800 cursor-pointer text-stone-50"
            onClick={successModal.open}
          >
            Share
          </div>
        )}
        {isGameLost && (
          <div
            className="rounded px-4 py-2 z-10 w-full max-w-5xl items-center justify-center font-mono text-center lg:flex mb-20 bg-slate-800 cursor-pointer"
            onClick={failModal.open}
          >
            Share
          </div>
        )}
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
