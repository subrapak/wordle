import { COLOURS } from "@/utils/game";
import { FailureMessage } from "@/utils/types";
import { BaseModal, BaseModalProps } from "./BaseModal";

interface GameFinishModalProps extends BaseModalProps, FailureMessage {
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
  return (
    <BaseModal isVisible={isVisible} handleCloseModal={handleCloseModal}>
      <p className="text-black text-2xl text-center font-bold my-4">{title}</p>
      {children}
      <button
        className={`text-xs text-center my-4 text-slate-50 px-4 py-2 rounded cursor-pointer font-mono ${COLOURS.KEYBOARD_UNSELECTED_GREY} outline-none`}
        onClick={onClickShare}
      >
        Click me! 😁
      </button>
      <p className="text-sky-800 text-m text-center font-semibold my-2">
        {text}
      </p>
    </BaseModal>
  );
};
