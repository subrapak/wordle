export const COLOURS = {
  KEYBOARD_UNSELECTED_GREY: "bg-gray-600 active:bg-gray-800",
  KEYBOARD_SUCCESS_GREEN: "bg-green-600",
  KEYBOARD_PASS_YELLOW: "bg-yellow-600",
  KEYBOARD_GUESSED_BLACK: "bg-gray-900",
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

export const createCharacterArray = (characters: string) => {
  const characterArray = [];
  for (const char of characters) {
    characterArray.push(char);
  }
  return characterArray;
};
