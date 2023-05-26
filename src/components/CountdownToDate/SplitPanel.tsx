interface SplitPanelProps {
  char: string;
}

export const SplitPanel: React.FC<SplitPanelProps> = ({ char }) => {
  return (
    <div className="flex h-12 m-1 min-w-6 p-2 text-stone-50 font-mono rounded justify-center items-center bg-gradient-to-b from-slate-700 to-slate-900 text-xl">
      {char}
    </div>
  );
};
