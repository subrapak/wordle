import { USER_INFO, UserName, UserConfig } from "@/utils/constants";
import { setAuthCookie, getAuthCookie, clearAuthCookie } from "@/utils/cookies";
import { useState, useEffect } from "react";
import { useModal } from "../useModal";
import { LoginModalProps } from "./LoginModal";

export const useLoginModal = () => {
  const [{ isVisible }, showModal, hideModal] = useModal();

  const options = Object.keys(USER_INFO) as UserName[];
  const [username, setUsername] = useState<UserName | null>(null);
  const [password, setPassword] = useState<string>("");
  const [isAuthError, setIsAuthError] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const onSubmitLogin = () => {
    if (username && password === USER_INFO[username]) {
      // Success
      setAuthCookie({ name: username, password });
      setIsAuthError(false);
      setIsLoginSuccess(true);
      hideModal();
    } else {
      setIsAuthError(true);
    }
  };

  useEffect(() => {
    const userConfigString = getAuthCookie();
    if (!userConfigString) {
      showModal();
    } else {
      const userConfig = JSON.parse(userConfigString) as UserConfig;
      if (
        Object.keys(USER_INFO).includes(userConfig.name) &&
        USER_INFO[userConfig.name] === userConfig.password
      ) {
        setUsername(userConfig.name);
        setPassword("");
        // You are already authenticated
        hideModal();
      } else {
        clearAuthCookie();
      }
    }
  }, []);

  return {
    isVisible,
    options,
    isAuthError,
    setIsAuthError,
    isLoginSuccess,
    setIsLoginSuccess,
    username,
    setUsername,
    showModal: () => {
      console.log("hi");
      showModal();
    },
    hideModal,
    isAuthenticated: !!getAuthCookie(),
    password,
    setPassword,
    onSubmitLogin,
  };
};
