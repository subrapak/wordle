"use client";
import { ActionButtonContainer, CTAButton } from "@/components/Buttons";
import { Keyboard } from "@/components/Keyboard";
import {
  MODAL_MESSAGES_BY_GUESS_INDEX,
  MODAL_TITLES_BY_GUESS_INDEX,
} from "@/utils/constants";
import React from "react";
import { GameFinishModal } from "../Modals/GameFinishModal";
import { Guesses } from "../Guesses";
import { useWordle } from "./useWordle";
import { Heading } from "../Heading";
import { Share } from "../Share";

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
  failureMessage,
  onClickShare,
}) => {
  return (
    <>
      <Heading onClickHeading={resetGame} />
      <Guesses gameConfig={gameConfig} />

      <Keyboard
        addCharToCurrentGuess={addCharToCurrentGuess}
        guesses={gameConfig.guesses}
        currentAttemptIndex={gameConfig.currentAttemptIndex}
        isDisabled={isGameWon || isGameLost}
      />
      <Share
        displaySuccessShare={isGameWon}
        displayFailShare={isGameLost}
        onClickFailShare={failModal.open}
        onClickSuccessShare={successModal.open}
      />
      <ActionButtonContainer>
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
      </ActionButtonContainer>
      <GameFinishModal
        {...failModal.config}
        handleCloseModal={failModal.close}
        title={failureMessage.title}
        text={failureMessage.text}
        onClickShare={onClickShare}
      >
        <Guesses gameConfig={gameConfig} isDisabled />
      </GameFinishModal>
      <GameFinishModal
        {...successModal.config}
        handleCloseModal={successModal.close}
        title={MODAL_TITLES_BY_GUESS_INDEX[gameConfig.currentAttemptIndex - 1]}
        text={MODAL_MESSAGES_BY_GUESS_INDEX[gameConfig.currentAttemptIndex - 1]}
        onClickShare={onClickShare}
      >
        <Guesses gameConfig={gameConfig} isDisabled />
      </GameFinishModal>
    </>
  );
};
