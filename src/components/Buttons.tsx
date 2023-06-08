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
      className={`flex justify-center font-mono items-center px-12 mx-4 h-10 rounded-md ${bgColor} cursor-pointer text-stone-50`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export const ActionButtonContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div className="flex flex-row mt-2 border-none">{children}</div>;
};
