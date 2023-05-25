import { ModalConfig } from "@/types";

interface GameFinishModalProps extends ModalConfig {
  handleCloseModal: () => void;
  title?: string;
  message?: string;
}

export const GameFinishModal: React.FC<GameFinishModalProps> = ({
  isVisible,
  handleCloseModal,
  title = "Nothing to see here",
  message = "Success message TBD based on ur performance...",
}) => {
  const handleForegroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <div
      className={`fixed inset-0 px-4 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleCloseModal}
    >
      <div
        className="bg-white flex-col h-60 flex items-center justify-center rounded-lg p-10"
        onClick={handleForegroundClick}
      >
        <p className="text-black text-2xl text-center font-bold my-4">
          {title}
        </p>
        <p className="text-sky-800 text-m text-center font-semibold my-4">
          {message}
        </p>
      </div>
    </div>
  );
};