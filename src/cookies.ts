import Cookies from "js-cookie";
import { GameConfig } from "./types";

export const getGameCookieForDate = (dateString: string) =>
  Cookies.get(`ARUBA-${dateString}`);

export const setGameCookieForDate = (dateString: string, config: GameConfig) =>
  Cookies.set(`ARUBA-${dateString}`, JSON.stringify(config));
