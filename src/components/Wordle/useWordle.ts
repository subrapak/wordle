"use client";
import { setGameCookieForDate } from "@/cookies";
import { getTodaysDateCode } from "@/datetime";
import { useGameMechanics } from "@/hooks/useGameMechanics";
import { usePersistedGame } from "@/hooks/usePersistedGame";
import { GameConfig } from "@/types";
import { useModal } from "../Modals/useModal";
import { useEffect, useState } from "react";
import { FAILURE_MESSAGES } from "@/constants";
import { generateRandomObjectKey } from "@/utils";

export const useWordle = () => {
  const persistGameWithConfig = (config: GameConfig) => {
    const todaysDateCode = getTodaysDateCode();
    setGameCookieForDate(todaysDateCode, config);
  };
  const [failModalConfig, showFailModal, hideFailModal] = useModal();
  const [successModalConfig, showSuccessModal, hideSuccessModal] = useModal();

  const {
    gameConfig,
    setGameConfig,
    isGameLost,
    isGameWon,
    resetGame,
    addCharToCurrentGuess,
    deleteLatestChar,
    submitLatestAttempt,
  } = useGameMechanics({
    onSuccess: showSuccessModal,
    onFail: showFailModal,
    onSubmitAttempt: persistGameWithConfig,
  });
  const [failureMessage, setFailureMessage] = useState(FAILURE_MESSAGES[0]);
  useEffect(() => {
    const randomFailureTitle =
      FAILURE_MESSAGES[generateRandomObjectKey(FAILURE_MESSAGES)].title;
    const randomFailureText =
      FAILURE_MESSAGES[generateRandomObjectKey(FAILURE_MESSAGES)].text;
    setFailureMessage({ text: randomFailureText, title: randomFailureTitle });
  }, []);

  usePersistedGame({ setGameConfig });

  return {
    failureMessage,
    gameConfig,
    resetGame,
    addCharToCurrentGuess,
    deleteLatestChar,
    submitLatestAttempt,
    isGameWon,
    isGameLost,
    successModal: {
      config: successModalConfig,
      open: showSuccessModal,
      close: hideSuccessModal,
    },
    failModal: {
      config: failModalConfig,
      open: showFailModal,
      close: hideFailModal,
    },
  };
};
