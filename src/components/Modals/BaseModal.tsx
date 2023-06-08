import { ModalConfig } from "@/utils/types";
import React from "react";

export interface BaseModalProps extends ModalConfig {
  handleCloseModal: () => void;
}

export const BaseModal: React.FC<React.PropsWithChildren<BaseModalProps>> = ({
  isVisible,
  handleCloseModal,
  children,
}) => {
  const handleForegroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleCloseModal}
    >
      <div
        className="bg-white flex-col flex items-center justify-center rounded-lg p-5 min-w-4/5"
        onClick={handleForegroundClick}
      >
        {children}
      </div>
    </div>
  );
};
