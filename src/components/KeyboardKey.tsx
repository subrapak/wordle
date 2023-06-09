interface KeyboardKeyProps {
  char: string;
  onClickKey?: () => void;
  backgroundColor?: string;
}

export const KeyboardKey: React.FC<KeyboardKeyProps> = ({
  char,
  onClickKey,
  backgroundColor = "bg-gray-600 active:bg-gray-800",
}) => {
  return (
    <>
      <div
        className={`flex font-bold w-8 h-12 m-1 text-stone-50 rounded justify-center items-center cursor-pointer ${backgroundColor}`}
        onClick={onClickKey}
      >
        {char.toUpperCase()}
      </div>
    </>
  );
};
