import React from "react";

interface Props {
  mode: "login" | "register";
  currentMode: "login" | "register";
  onClick: () => void;
}

export const LoginBtn: React.FC<Props> = ({ mode, currentMode, onClick }) => {
  const isActive = currentMode === mode;

  return (
    <button
      onClick={onClick}
      className={
        isActive
          ? "px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold shadow-md transition"
          : "px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition"
      }
    >
      {mode === "login" ? "Войти" : "Регистрация"}
    </button>
  );
};
