import { getGameCookieForDate } from "@/utils/cookies";
import { getTodaysDateCode } from "@/utils/datetime";
import { GameConfig } from "@/utils/types";

import { useEffect } from "react";

interface UsePersisGameArgs {
  setGameConfig: (config: GameConfig) => void;
}

export const usePersistedGame = ({ setGameConfig }: UsePersisGameArgs) => {
  const todaysDate = getTodaysDateCode();

  useEffect(() => {
    const gameCookie = getGameCookieForDate(todaysDate);
    const cookieGameConfig = gameCookie
      ? (JSON.parse(gameCookie) as GameConfig)
      : undefined;
    cookieGameConfig && setGameConfig(cookieGameConfig);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return;
};
