import Cookies from "js-cookie";
import { GameConfig } from "./types";
import { CORRECT_WORD, UserConfig } from "./constants";

export const getGameCookieForDate = (dateString: string) =>
  Cookies.get(`${CORRECT_WORD}-${dateString}`);

export const setGameCookieForDate = (dateString: string, config: GameConfig) =>
  Cookies.set(`${CORRECT_WORD}-${dateString}`, JSON.stringify(config));

export const setAuthCookie = (userConfig: UserConfig) =>
  Cookies.set(`ARUBA-auth`, JSON.stringify(userConfig));

export const getAuthCookie = (): string | undefined =>
  Cookies.get(`ARUBA-auth`);

export const clearAuthCookie = () => Cookies.remove(`ARUBA-auth`);
