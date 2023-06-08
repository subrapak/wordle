import React from "react";

import { LoginModal as Component } from "./LoginModal";

import { useLoginModal } from "./useLoginModal";

export const LoginModal: React.FC = () => {
  const props = useLoginModal();
  return <Component {...props} />;
};
