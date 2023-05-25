import React from "react";

interface CTAButtonProps {
  bgColor?: string;
  text?: string;
  onClick?: () => void;
}
export const CTAButton: React.FC<CTAButtonProps> = ({
  bgColor,
  text,
  onClick,
}) => {
  return (
    <div
      className={`flex justify-center items-center px-12 mx-4 h-10 rounded-md ${bgColor}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
