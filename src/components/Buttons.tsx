import React from "react";

interface CTAButtonProps {
  bgColor?: string;
  text?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}
export const CTAButton: React.FC<CTAButtonProps> = ({
  bgColor,
  text,
  onClick,
  isDisabled = false,
}) => {
  return (
    <button
      className={`flex justify-center items-center px-12 mx-4 h-10 rounded-md ${bgColor} cursor-pointer`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
