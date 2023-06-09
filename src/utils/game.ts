import {
  BASE_URL,
  CORRECT_WORD,
  FAILURE_MESSAGES,
  MODAL_MESSAGES_BY_GUESS_INDEX,
  MODAL_TITLES_BY_GUESS_INDEX,
} from "./constants";
import { GameConfig } from "./types";

export const COLOURS = {
  KEYBOARD_UNSELECTED_GREY: "bg-gray-600 active:bg-gray-800",
  KEYBOARD_SUCCESS_GREEN: "bg-green-600",
  KEYBOARD_PASS_YELLOW: "bg-yellow-600",
  KEYBOARD_GUESSED_BLACK: "bg-gray-900",
};

export const BOXES = {
  KEYBOARD_UNSELECTED_GREY: "⬛️",
  KEYBOARD_SUCCESS_GREEN: "🟩",
  KEYBOARD_PASS_YELLOW: "🟨",
  KEYBOARD_GUESSED_BLACK: "⬜️",
};

export const calculateCharacterColourForKeyboard = (
  guesses: string[],
  character: string,
  correctWord: string
): string => {
  const allCharactersGuessed = guesses.reduce((acc, cur) => `${acc}${cur}`, "");
  let characterColour = COLOURS.KEYBOARD_UNSELECTED_GREY;
  if (allCharactersGuessed.includes(character)) {
    characterColour = correctWord.includes(character)
      ? COLOURS.KEYBOARD_PASS_YELLOW
      : COLOURS.KEYBOARD_GUESSED_BLACK;
    guesses.forEach((guess) => {
      const guessCharArray = createCharacterArray(guess);
      guessCharArray.forEach((guessChar, guessCharIndex) => {
        if (
          guessChar === correctWord[guessCharIndex] &&
          guessChar === character
        ) {
          characterColour = COLOURS.KEYBOARD_SUCCESS_GREEN;
        }
      });
    });
  }

  return characterColour;
};

export const calculateCharacterColourFromGuess = (
  guess: string,
  guessCharacterIndex: number,
  correctWord: string
) => {
  return correctWord.includes(guess[guessCharacterIndex])
    ? guess[guessCharacterIndex] === correctWord[guessCharacterIndex]
      ? COLOURS.KEYBOARD_SUCCESS_GREEN
      : COLOURS.KEYBOARD_PASS_YELLOW
    : COLOURS.KEYBOARD_GUESSED_BLACK;
};

export const calculateCharacterGameBoxFromGuess = (
  guess: string,
  guessCharacterIndex: number,
  correctWord: string
) => {
  return correctWord.includes(guess[guessCharacterIndex])
    ? guess[guessCharacterIndex] === correctWord[guessCharacterIndex]
      ? BOXES.KEYBOARD_SUCCESS_GREEN
      : BOXES.KEYBOARD_PASS_YELLOW
    : BOXES.KEYBOARD_GUESSED_BLACK;
};

export const createCharacterArray = (characters: string) => {
  const characterArray = [];
  for (const char of characters) {
    characterArray.push(char);
  }
  return characterArray;
};

export const generateRandomObjectKey = (object: Record<number, any>) =>
  Math.floor(Object.keys(object).length * Math.random());

export const convertGuessesIntoGameBoxes = (guesses: string[]): string => {
  const guessBoxes = guesses.map((guess) => {
    const guessArray = createCharacterArray(guess);
    const currentGuessBoxArray = guessArray.map((character, characterIndex) =>
      calculateCharacterGameBoxFromGuess(guess, characterIndex, CORRECT_WORD)
    );
    return currentGuessBoxArray.join("");
  });
  return `${guessBoxes.filter((guess) => guess.length).join("\n")}`;
};
export const convertGameIntoTextToCopy = (gameConfig: GameConfig) => {
  const gameBoxes = convertGuessesIntoGameBoxes(gameConfig.guesses);
  const isGameWon =
    gameConfig.guesses[gameConfig.currentAttemptIndex - 1] === CORRECT_WORD;
  const isGameLost =
    !isGameWon && gameConfig.currentAttemptIndex === gameConfig.guesses.length;
  const messageTitle = isGameWon
    ? MODAL_TITLES_BY_GUESS_INDEX[gameConfig.currentAttemptIndex - 1]
    : isGameLost
    ? FAILURE_MESSAGES[0].title
    : `Job not finished!`;
  const messageText = isGameWon
    ? MODAL_MESSAGES_BY_GUESS_INDEX[gameConfig.currentAttemptIndex - 1]
    : FAILURE_MESSAGES[0].text;

  const availableAttempts = gameConfig.guesses.length;
  const gameAttempts = gameConfig.currentAttemptIndex;
  const fullTtext = `${messageTitle} ${gameAttempts}/${availableAttempts}!\n${messageText}\nTry this wordle: ${BASE_URL}\n${gameBoxes}\n#aruba2023`;

  return fullTtext;
};
