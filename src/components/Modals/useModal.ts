"use client";

import { DEFAULT_MODAL_CONFIG } from "@/constants";
import { useState } from "react";

export const useModal = () => {
  const [modalConfig, setModalConfig] = useState(DEFAULT_MODAL_CONFIG);
  const showModal = () =>
    setModalConfig((config) => ({ ...config, isVisible: true }));
  const hideModal = () =>
    setModalConfig((config) => ({ ...config, isVisible: false }));

  return [modalConfig, showModal, hideModal] as const;
};
