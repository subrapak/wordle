import React from "react";

interface ResetPillProps {
  onClick?: () => void;
}
export const ResetPill: React.FC<ResetPillProps> = ({ onClick }) => {
  return (
    <>
      <div className="fixed top-4 left-4">
        <button
          className="bg-indigo-800 px-4 py-2 rounded-lg text-slate-50 border-indigo-800 font-mono overflow-none"
          onClick={onClick}
        >
          <p className="m-0 text-[10px]">{`Psst! Click me`}</p>
        </button>
      </div>
    </>
  );
};
