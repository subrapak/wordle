import { FailureMessage, GameConfig, ModalConfig } from "./types";

// To change daily
export const CORRECT_WORD = "FLORIN";
export const FIRST_WORD_HINT = ``;
export const SUCCESS_EXPLANATION = ``;

// True Constants
export const ARUBA_FLIGHT_DATE = new Date(2023, 5, 22, 10);
export const BASE_URL = "https://nextjs-3v6pldlpca-nw.a.run.app/";
export const WHATSAPP_GROUP_LINK =
  "https://chat.whatsapp.com/DPjd3QbMwCy8FQnEBvMROb";
export const DEFAULT_GAME_CONFIG: GameConfig = {
  guesses: ["", "", "", "", ""],
  currentAttemptIndex: 0,
};

export const DEFAULT_MODAL_CONFIG: ModalConfig = {
  isVisible: false,
};

export const MODAL_MESSAGES_BY_GUESS_INDEX: Record<number, string> = {
  0: "I guess some people just got it 🤷",
  1: "In 2?? Legend.",
  2: "Third time's a charm. A decent effort tbh, I rate.",
  3: "You got it in four. Well done, I guess?",
  4: "EEEESH 5 attempts but just in time to make your ancestors proud.",
};

export const MODAL_TITLES_BY_GUESS_INDEX: Record<number, string> = {
  0: "🧠 The Wordle Genius 🧠",
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

export type UserName =
  | "Arohan"
  | "Priya"
  | "Sameer"
  | "Kash"
  | "Mihir"
  | "Rad"
  | "Sooria"
  | "Gino"
  | "Aishah"
  | "Dorsa"
  | "Ferhaan"
  | "Saira"
  | "Sharina"
  | "Prerna"
  | "Nishika"
  | "Jiten"
  | "Kiara"
  | "Nikhil";

export interface UserConfig {
  name: UserName;
  password: string;
}

export const USER_INFO: Record<UserName, string> = {
  "Rad": "radiant",
  "Mihir": "mimi",
  "Kash": "$$$",
  "Sameer": "samuele",
  "Arohan": "arojuan",
  "Priya": "piya",
  "Gino": "glenn",
  "Ferhaan": "longlung",
  "Saira": "saisai",
  "Nishika": "fishika",
  "Aishah": "aish",
  "Dorsa": "dosa",
  "Jiten": "g10",
  "Sooria": "sideman",
  "Prerna": "prendog",
  "Sharina": "rapunzel",
  "Kiara": "kiks",
  "Nikhil": "other",
};
