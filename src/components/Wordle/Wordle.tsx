"use client";
import { ActionButtonContainer, CTAButton } from "@/components/Buttons";
import { Keyboard } from "@/components/Keyboard";
import {
  MODAL_MESSAGES_BY_GUESS_INDEX,
  MODAL_TITLES_BY_GUESS_INDEX,
} from "@/utils/constants";
import React from "react";
import { Guesses } from "../Guesses";
import { Heading } from "../Heading";
import { GameFinishModal } from "../Modals/GameFinishModal";
import { LoginModal } from "../Modals/LoginModal/LoginModal";
import { ResetGameModal } from "../Modals/ResetGameModal";
import { AuthPill } from "../Pills/AuthPill";
import { Share } from "../Share";
import { SpecialSnackbar } from "../SpecialSnackbar";
import { useWordle } from "./useWordle";

interface WordleProps extends ReturnType<typeof useWordle> {}

export const Wordle: React.FC<WordleProps> = ({
  gameConfig,
  addCharToCurrentGuess,
  deleteLatestChar,
  submitLatestAttempt,
  isGameWon,
  isGameLost,
  successModal,
  failModal,
  failureMessage,
  onClickShare,
  loginModalProps,
  resetModal,
  isShowingResetPill,
  setIsShowingResetPill,
  disablePillTransition,
  setDisablePillTransition,
  resetGame,
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
      {!!loginModalProps.isAuthenticated && !!loginModalProps.username && (
        <ResetGameModal
          username={loginModalProps.username}
          isVisible={resetModal.config.isVisible}
          handleCloseModal={resetModal.close}
          onClickButton={() => {
            resetGame();
            addCharToCurrentGuess("1");
            addCharToCurrentGuess("1");
            addCharToCurrentGuess("1");
            addCharToCurrentGuess("1");
            addCharToCurrentGuess("1");
            submitLatestAttempt();
          }}
        />
      )}
      <LoginModal
        {...loginModalProps}
        setIsLoginSuccess={(value) => {
          loginModalProps.setIsLoginSuccess(value);
          setIsShowingResetPill(true);
        }}
      />
      {!!loginModalProps.isAuthenticated && (
        <SpecialSnackbar
          isVisible={isShowingResetPill}
          onClickSnackbar={() => {
            resetModal.open();
            setDisablePillTransition(true);
          }}
          disableTransition={disablePillTransition}
        />
      )}
      <AuthPill
        username={loginModalProps.username}
        onClick={loginModalProps.showModal}
      />
    </>
  );
};
