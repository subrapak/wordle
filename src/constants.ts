import { FailureMessage, GameConfig, ModalConfig } from "./types";

export const ARUBA_FLIGHT_DATE = new Date(2023, 5, 22, 10);
export const CORRECT_WORD = "CERULEAN";
export const FIRST_WORD_HINT = `Gino's favourite man ever`;
export const SUCCESS_EXPLANATION = `A colour that we should see a lot of in Rubes :)`;
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

export const FAILURE_MESSAGES: Record<number, FailureMessage> = {
  0: {
    title: "❌ It's giving fail. ❌",
    text: `Don't be sorry. Be Better.`,
  },
  1: {
    title: "❌ Not this time ❌",
    text: `Boo hoo for you :(`,
  },
  2: {
    title: "❌ Try again! ❌",
    text: "Um...I think the queue for dumbos is that way?",
  },
  3: {
    title: "❌ Eek. ❌",
    text: `Oh you were close? Nobody cares.`,
  },
  4: {
    title: "❌ !Que Lastima! ❌",
    text: `¿Dónde está tu cerebro? `,
  },
};
