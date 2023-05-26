import { GameConfig, ModalConfig } from "./types";

export const ARUBA_FLIGHT_DATE = new Date(2023, 5, 22, 10);
export const CORRECT_WORD = "BONDIA";
export const DEFAULT_GAME_CONFIG: GameConfig = {
  guesses: ["", "", "", "", ""],
  currentAttemptIndex: 0,
};

export const DEFAULT_MODAL_CONFIG: ModalConfig = {
  isVisible: false,
};

export const MODAL_MESSAGES_BY_GUESS_INDEX: Record<number, string> = {
  0: "Only 1 guess?!?!? Stop the CAP.",
  1: "In 2?? Legend.",
  2: "Third time's a charm. A decent effort tbh, I rate.",
  3: "You got it in four. Well done, I guess?",
  4: "EEEESH 5 attempts but just in time to make your ancestors proud.",
};

export const MODAL_TITLES_BY_GUESS_INDEX: Record<number, string> = {
  0: "🧢 The Cap Master 🧢",
  1: "👑 King/Queen Moves 👑",
  2: "👍 Not Bad 👍",
  3: "🤡 The Clown 🤡",
  4: "🫥 Let's Not Even 🫥",
};
