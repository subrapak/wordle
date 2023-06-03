import { GameConfig } from "@/utils/types";
import { Guess } from "./Guess";
import { COLOURS } from "@/utils/game";

interface GuessesProps {
  gameConfig: GameConfig;
  isDisabled?: boolean;
}

export const Guesses: React.FC<GuessesProps> = ({
  gameConfig,
  isDisabled = false,
}) => {
  return (
    <div>
      {Array.from(Array(gameConfig.guesses.length).keys()).map(
        (guess, guessIndex) => (
          <Guess
            key={guess}
            word={gameConfig.guesses[guessIndex]}
            backgroundColor={
              guessIndex >= gameConfig.currentAttemptIndex
                ? COLOURS.KEYBOARD_UNSELECTED_GREY
                : undefined
            }
            disable={isDisabled}
          />
        )
      )}
    </div>
  );
};
