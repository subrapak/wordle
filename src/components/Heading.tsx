import { ARUBA_FLIGHT_DATE, FIRST_WORD_HINT } from "@/constants";
import { CountdownToDate } from "./CountdownToDate/CountdownToDate";

interface HeadingProps {
  onClickHeading?: () => void;
}

export const Heading: React.FC<HeadingProps> = ({ onClickHeading }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div
        className="rounded px-4 z-10 w-full max-w-5xl items-center justify-center font-mono text-center cursor-pointer text-stone-50"
        onClick={onClickHeading}
      >
        {`Countdown To Aruba`}
      </div>
      <CountdownToDate date={ARUBA_FLIGHT_DATE} />
      <div className="font-mono text-center text-xs px-10 text-stone-50">
        {`First word hint (remember: this just gives you a good start, it's not a definition of the final word)`}
      </div>
      <div className="font-mono text-center text-xs px-10 text-stone-50">
        {FIRST_WORD_HINT}
      </div>
    </div>
  );
};
