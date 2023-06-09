"use client";
import { useFailureMessage } from "@/hooks/useFailureMessage";
import { useGameMechanics } from "@/hooks/useGameMechanics";
import { usePersistedGame } from "@/hooks/usePersistedGame";
import { setGameCookieForDate } from "@/utils/cookies";
import { getTodaysDateCode } from "@/utils/datetime";
import { GameConfig } from "@/utils/types";
import { useModal } from "../Modals/useModal";
import { useClipboard } from "@/hooks/useClipboard";
import { convertGameIntoTextToCopy } from "@/utils/game";
import { WHATSAPP_GROUP_LINK } from "@/utils/constants";
import { useLoginModal } from "../Modals/LoginModal/useLoginModal";
import { useEffect, useState } from "react";

export const useWordle = () => {
  const persistGameWithConfig = (config: GameConfig) => {
    const todaysDateCode = getTodaysDateCode();
    setGameCookieForDate(todaysDateCode, config);
  };
  const [failModalConfig, showFailModal, hideFailModal] = useModal();
  const [successModalConfig, showSuccessModal, hideSuccessModal] = useModal();
  const [resetGameModal, showResetGameModal, hideResetGameModal] = useModal();

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
  const failureMessage = useFailureMessage();

  usePersistedGame({ setGameConfig });

  const [copyTextToClipboard] = useClipboard(
    "Game copied! Click OK to share..."
  );
  const onClickShare = async () => {
    const gameTextToShare = convertGameIntoTextToCopy(gameConfig);
    copyTextToClipboard(gameTextToShare);
    setTimeout(() => (document.location.href = WHATSAPP_GROUP_LINK), 1000);
  };

  const loginModalProps = useLoginModal();
  const [isShowingResetPill, setIsShowingResetPill] = useState(false);
  const [disablePillTransition, setDisablePillTransition] = useState(false);

  const isNotMihir = loginModalProps.username !== "Mihir";
  useEffect(() => {
    if (loginModalProps.isAuthenticated) {
      setTimeout(() => {
        isNotMihir && setIsShowingResetPill(true);
      }, 1000);
    }
  }, []);

  return {
    failureMessage,
    loginModalProps,
    gameConfig,
    resetGame,
    addCharToCurrentGuess,
    deleteLatestChar,
    submitLatestAttempt,
    isGameWon,
    isGameLost,
    onClickShare,
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
    resetModal: {
      config: resetGameModal,
      open: showResetGameModal,
      close: hideResetGameModal,
    },
    isShowingResetPill,
    setIsShowingResetPill,
    disablePillTransition,
    setDisablePillTransition,
    isNotMihir,
  };
};
