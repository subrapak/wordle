"use client";
import {
  DEFAULT_GAME_CONFIG,
  WORD_LENGTH,
  DEFAULT_MODAL_CONFIG,
  CORRECT_WORD,
} from "@/constants";
import { GameConfig } from "@/types";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useWordle = () => {
  const [gameConfig, setGameConfig] = useState<GameConfig>(DEFAULT_GAME_CONFIG);
  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const fullDate = `${date}-${month}-${year}`;
  useEffect(() => {
    const gameCookie = Cookies.get(`ARUBA-${fullDate}`);
    const cookieGameConfig = gameCookie && JSON.parse(gameCookie);
    setGameConfig(cookieGameConfig);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      const newConfig = {
        ...config,
        currentAttemptIndex: config.currentAttemptIndex + 1,
      };
      Cookies.set(`ARUBA-${fullDate}`, JSON.stringify(newConfig));
      return newConfig;
    });
  };
  return {
    gameConfig,
    resetGame,
    addCharToCurrentGuess,
    deleteLatestChar,
    submitLatestAttempt,
    hasGameFinished,

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
