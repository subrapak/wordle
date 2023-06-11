import { ARUBA_FLIGHT_DATE, FIRST_WORD_HINT } from "@/utils/constants";
import { CountdownToDate } from "./CountdownToDate/CountdownToDate";

interface HeadingProps {
  onClickHeading?: () => void;
}

export const Heading: React.FC<HeadingProps> = ({ onClickHeading }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="rounded px-4 max-w-5xl items-center justify-center font-mono text-center cursor-pointer text-stone-50 mt-6">
        {`Countdown To Aruba`}
      </div>
      <CountdownToDate date={ARUBA_FLIGHT_DATE} onClick={onClickHeading} />
      <div className="font-mono text-center text-xs px-10 text-stone-50">
        {`Hint:`}
      </div>
      <div className="font-mono text-center text-xs px-10 text-stone-50">
        {FIRST_WORD_HINT}
      </div>
    </div>
  );
};
