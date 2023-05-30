import { CORRECT_WORD, DEFAULT_GAME_CONFIG } from "@/constants";
import { GameConfig } from "@/types";
import { useState } from "react";

interface UseGameMechanicsArgs {
  onSuccess?: () => void;
  onFail?: () => void;
  onSubmitAttempt?: (newConfig: GameConfig) => void;
}

export const useGameMechanics = ({
  onSuccess,
  onFail,
  onSubmitAttempt,
}: UseGameMechanicsArgs) => {
  const [gameConfig, setGameConfig] = useState<GameConfig>(DEFAULT_GAME_CONFIG);
  const isGameWon =
    gameConfig.guesses[gameConfig.currentAttemptIndex - 1] === CORRECT_WORD;
  const isGameLost =
    !isGameWon && gameConfig.currentAttemptIndex === gameConfig.guesses.length;

  const resetGame = () => setGameConfig(DEFAULT_GAME_CONFIG);
  const addCharToCurrentGuess = (char: string) => {
    setGameConfig((config) => {
      const currentGuess = config.guesses[config.currentAttemptIndex];
      if (currentGuess.length === CORRECT_WORD.length) {
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
      const currentGuess = config.guesses[config.currentAttemptIndex];
      if (currentGuess.length < 5) {
        return config;
      }
      const isGuessCorrect =
        config.guesses[config.currentAttemptIndex] === CORRECT_WORD;
      if (isGuessCorrect) {
        onSuccess?.();
      } else if (config.currentAttemptIndex + 1 === config.guesses.length) {
        onFail?.();
      }
      const newConfig = {
        ...config,
        currentAttemptIndex: config.currentAttemptIndex + 1,
      };
      onSubmitAttempt?.(newConfig);
      return newConfig;
    });
  };
  return {
    gameConfig,
    setGameConfig,
    isGameLost,
    isGameWon,
    resetGame,
    addCharToCurrentGuess,
    deleteLatestChar,
    submitLatestAttempt,
  };
};
