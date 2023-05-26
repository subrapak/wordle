import Cookies from "js-cookie";
import { GameConfig } from "./types";
import { CORRECT_WORD } from "./constants";

export const getGameCookieForDate = (dateString: string) =>
  Cookies.get(`${CORRECT_WORD}-${dateString}`);

export const setGameCookieForDate = (dateString: string, config: GameConfig) =>
  Cookies.set(`${CORRECT_WORD}-${dateString}`, JSON.stringify(config));
