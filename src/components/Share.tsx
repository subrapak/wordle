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
    <div>
      {displaySuccessShare && (
        <div
          className="rounded px-4 py-2 w-full max-w-5xl items-center justify-center font-mono text-center bg-slate-800 cursor-pointer text-stone-50"
          onClick={onClickSuccessShare}
        >
          Share
        </div>
      )}
      {displayFailShare && (
        <div
          className="rounded px-4 py-2 w-full max-w-5xl items-center justify-center font-mono text-center bg-slate-800 cursor-pointer"
          onClick={onClickFailShare}
        >
          Share
        </div>
      )}
    </div>
  );
};