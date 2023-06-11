interface ShareProps {
  displaySuccessShare: boolean;
  onClickSuccessShare: () => void;
  displayFailShare: boolean;
  onClickFailShare: () => void;
}

export const Share: React.FC<ShareProps> = ({
  displaySuccessShare,
  displayFailShare,
  onClickSuccessShare,
  onClickFailShare,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="rounded px-4 py-2 items-center justify-center font-mono text-center bg-slate-800 cursor-pointer text-stone-50"
        onClick={
          displaySuccessShare
            ? onClickSuccessShare
            : displayFailShare
            ? onClickFailShare
            : () => {}
        }
      >
        Share
      </div>
    </div>
  );
};
