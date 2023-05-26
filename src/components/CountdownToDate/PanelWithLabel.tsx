import { SplitPanel } from "./SplitPanel";

interface PanelWithLabel {
  characterArray: string[];
  label: string;
}
export const PanelWithLabel: React.FC<PanelWithLabel> = ({
  characterArray,
  label,
}) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row justify-center">
        {characterArray.map((char, charIndex) => (
          <SplitPanel key={charIndex} char={char} />
        ))}
      </div>
      <div className="flex text-center font-mono justify-center font-bold text-stone-50">
        <p>{label}</p>
      </div>
    </div>
  );
};
