import { UserConfig } from "@/utils/constants";
import { getAuthCookie } from "@/utils/cookies";
import React from "react";

interface AuthPillProps {
  username: string | null;
  onClick?: () => void;
}

export const AuthPill: React.FC<AuthPillProps> = ({ username, onClick }) => {
  return (
    <div className="fixed top-4 right-4">
      <button
        className="bg-slate-800 px-4 py-2 rounded-lg text-slate-50"
        onClick={onClick}
      >
        <p className="m-0 text-xs font-mono">
          {username ? `Hi ${username}! 👋` : "Guest"}
        </p>
        <p className="m-0 mt-1 text-[10px] text-right">Click to change</p>
      </button>
    </div>
  );
};
