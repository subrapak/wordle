import { createCharacterArray } from "@/utils/game";
import React, { useEffect, useRef, useState } from "react";
import { PanelWithLabel } from "./PanelWithLabel";

interface CountdownToDateProps {
  date: Date;
}
export const CountdownToDate: React.FC<CountdownToDateProps> = ({ date }) => {
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

  return (
    <>
      <div className="flex flex-row gap-2">
        <PanelWithLabel characterArray={dayArray} label="DAYS" />
        <PanelWithLabel characterArray={hourArray} label="HOURS" />
        <PanelWithLabel characterArray={minuteArray} label="MINUTES" />
        <PanelWithLabel characterArray={secondArray} label="SECONDS" />
      </div>
    </>
  );
};
