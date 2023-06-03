export interface GameConfig {
  guesses: string[];
  currentAttemptIndex: number;
}

export interface ModalConfig {
  isVisible: boolean;
}

export interface FailureMessage {
  title: string;
  text: string;
}
