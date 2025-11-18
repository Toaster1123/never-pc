import React from "react";

interface Props {
  mode: "login" | "register";
  currentMode: "login" | "register";
  onClick: () => void;
}

export const LoginBtn: React.FC<Props> = ({ mode, currentMode, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-xl transition ${
        currentMode === mode
          ? "bg-sky-300 text-black"
          : "bg-neutral-200/80 text-neutral-600"
      }`}
    >
      {mode === "login" ? "Войти" : "Регистрация"}
    </button>
  );
};
