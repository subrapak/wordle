import { FailureMessage, ModalConfig } from "@/utils/types";

interface GameFinishModalProps extends ModalConfig, FailureMessage {
  handleCloseModal: () => void;
  onClickShare?: () => Promise<void>;
}

export const GameFinishModal: React.FC<
  React.PropsWithChildren<GameFinishModalProps>
> = ({
  isVisible,
  handleCloseModal,
  onClickShare,
  title = "Nothing to see here",
  text = "Success message TBD based on ur performance...",
  children,
}) => {
  const handleForegroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <div
      className={`fixed inset-0 h-full w-full px-4 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleCloseModal}
    >
      <div
        className="bg-white flex-col flex items-center justify-center rounded-lg p-10 py-5 min-w-4/5"
        onClick={handleForegroundClick}
      >
        <p className="text-black text-2xl text-center font-bold my-4">
          {title}
        </p>
        {children}
        <button
          className="text-xs text-center my-4 bg-slate-500 text-slate-50 px-4 py-2 rounded cursor-pointer"
          onClick={onClickShare}
        >
          Click to copy
        </button>
        <p className="text-sky-800 text-m text-center font-semibold my-2">
          {text}
        </p>
      </div>
    </div>
  );
};
