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
        className={`flex w-10 h-12 m-1 rounded justify-center items-center cursor-pointer ${backgroundColor}`}
        onClick={onClickKey}
      >
        {char.toUpperCase()}
      </div>
    </>
  );
};
