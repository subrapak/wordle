"use client";
import { setGameCookieForDate } from "@/cookies";
import { getTodaysDateCode } from "@/datetime";
import { useGameMechanics } from "@/hooks/useGameMechanics";
import { usePersistedGame } from "@/hooks/usePersistedGame";
import { GameConfig } from "@/types";
import { useModal } from "../Modals/useModal";

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

  usePersistedGame({ setGameConfig });

  return {
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
