import { createCharacterArray } from "@/utils/game";
import React, { useEffect, useRef, useState } from "react";
import { PanelWithLabel } from "./PanelWithLabel";

interface CountdownToDateProps {
  date: Date;
  onClick?: () => void;
}

const resetButtonStyling =
  "absolute bg-absolute margin-auto bg-gradient-to-b from-red-600 to-rose-950 border-red-800 rounded px-8 font-mono text-slate-50 cursor-pointer flex justify-center items-center";

const animatePingStyling =
  "animate-ping bg-red-500 absolute h-full w-full opacity-75 rounded";

export const CountdownToDate: React.FC<CountdownToDateProps> = ({
  date,
  onClick,
}) => {
  const [timeToDateInSeconds, setTimeToDateInSeconds] = useState<number>(0);
  const getTimeToDateInSeconds = () => {
    const now = new Date();
    const timeToDateInSeconds = (date.getTime() - now.getTime()) / 1000;
    setTimeToDateInSeconds(timeToDateInSeconds);
    return timeToDateInSeconds;
  };

  const timer = useRef<NodeJS.Timer | null>(null);
  const stop = () => {
    timer.current && clearInterval(timer.current);
  };
  const startTimer = () => {
    timer.current = setInterval(() => getTimeToDateInSeconds(), 1000);
  };
  useEffect(() => {
    startTimer();
    return () => stop();
  });

  const formatTimeFromSeconds = (timeInSeconds: number) => {
    const days = Math.floor(timeInSeconds / 86400);
    const hours = Math.floor((timeInSeconds % 86400) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.round(timeInSeconds % 60);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } =
    formatTimeFromSeconds(timeToDateInSeconds);
  const getZeroPadStringTo2Digits = (value: number) => {
    return `${value < 10 ? `0${value}` : value}`;
  };
  const dayArray = createCharacterArray(getZeroPadStringTo2Digits(days));
  const hourArray = createCharacterArray(getZeroPadStringTo2Digits(hours));
  const minuteArray = createCharacterArray(getZeroPadStringTo2Digits(minutes));
  const secondArray = createCharacterArray(getZeroPadStringTo2Digits(seconds));

  const isRoundMinute = seconds === 0;
  const isTwentySeconds = seconds === 20;
  const isFortySeconds = seconds === 40;
  const isEvenMinutesExactly = minutes % 2 === 0 && seconds === 0;
  const isTenSeconds = seconds === 10;
  const isThirtySeconds = seconds === 30;

  return (
    <div className="flex flex-col relative items-center">
      <div className="flex flex-row gap-2">
        <PanelWithLabel
          color={"bg-gradient-to-b"}
          characterArray={dayArray}
          label="DAYS"
        />
        <PanelWithLabel
          color={"bg-gradient-to-b"}
          characterArray={hourArray}
          label="HOURS"
        />
        <PanelWithLabel
          color={"bg-gradient-to-b"}
          characterArray={minuteArray}
          label="MINUTES"
        />
        <PanelWithLabel
          color={"bg-gradient-to-b"}
          characterArray={secondArray}
          label="SECONDS"
        />
      </div>
      {isTenSeconds && (
        <button
          aria-label="top-left"
          onClick={onClick}
          className={`${resetButtonStyling} -top-12 -rotate-45 -left-10`}
        >
          <p>Reset Game</p>
          <span className={`${animatePingStyling}`} />
        </button>
      )}
      {isEvenMinutesExactly && (
        <button
          aria-label="top-center"
          onClick={onClick}
          className={`${resetButtonStyling} -bottom-20`}
        >
          <p>Reset Game</p>
          <span className={`${animatePingStyling}`} />
        </button>
      )}
      {isRoundMinute && (
        <button
          aria-label="bottom-center"
          onClick={onClick}
          className={`${resetButtonStyling} -bottom-80`}
        >
          <p>Reset Game</p>
          <span className={`${animatePingStyling}`} />
        </button>
      )}
      {isTwentySeconds && (
        <button
          aria-label="middle-right"
          onClick={onClick}
          className={`${resetButtonStyling} -bottom-52 -right-20 rotate-90`}
        >
          <p>Reset Game</p>
          <span className={`${animatePingStyling}`} />
        </button>
      )}
      {isThirtySeconds && (
        <button
          aria-label="center-left"
          onClick={onClick}
          className={`${resetButtonStyling} -bottom-52 -left-20 -rotate-90`}
        >
          <p>Reset Game</p>
          <span className={`${animatePingStyling}`} />
        </button>
      )}
      {isFortySeconds && (
        <button
          aria-label="top-right"
          onClick={onClick}
          className={`${resetButtonStyling} -top-12 rotate-45 -right-10`}
        >
          <p>Reset Game</p>
          <span className={`${animatePingStyling}`} />
        </button>
      )}
    </div>
  );
};
