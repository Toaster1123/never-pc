import { useMemo, useState } from "react";
import { LoginBtn } from "./login-btn";
import { InputField } from "./input-field";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "@/db/service";

interface AuthErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

export const AuthForm = () => {
  const [mode, setMode] = useState<"login" | "register">("login");
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [errorsExtra, setErrorsExtra] = useState<AuthErrors>({});

  const errors: AuthErrors = useMemo(() => {
    const e: AuthErrors = {};
    if (!email.trim()) e.email = "Введите email";
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Некорректный email";

    if (!password) e.password = "Введите пароль";
    else if (password.length < 6) e.password = "Минимум 6 символов";

    if (mode === "register") {
      if (!confirmPassword) e.confirmPassword = "Введите пароль ещё раз";
      else if (confirmPassword !== password)
        e.confirmPassword = "Пароли не совпадают";
    }
    return e;
  }, [email, password, confirmPassword, mode]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setSubmitted(true);
    setErrorsExtra({});

    if (Object.keys(errors).length > 0) return;

    if (mode === "register") {
      const res = await registerUser(email, password);
      if ("error" in res) {
        setErrorsExtra({ email: res.error });
        return;
      }

      navigate("/personal-page", { state: { from: "register" } });
      return;
    }

    if (mode === "login") {
      const res = await loginUser(email, password);

      if ("error" in res) {
        if (res.error === "Неверный пароль")
          setErrorsExtra({ password: res.error });
        else setErrorsExtra({ general: res.error });
        return;
      }

      navigate("/personal-page", { state: { from: "login" }, replace: true });
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-16 p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-[#171821] via-[#101018] to-[#0b0c12] border border-zinc-800">
      <div>
        <div className="flex gap-3 mb-6">
          <LoginBtn
            currentMode={mode}
            mode="login"
            onClick={() => {
              setMode("login");
              setSubmitted(false);
              setErrorsExtra({});
            }}
          />
          <LoginBtn
            currentMode={mode}
            mode="register"
            onClick={() => {
              setMode("register");
              setSubmitted(false);
              setErrorsExtra({});
            }}
          />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            error={submitted ? errors.email || errorsExtra.email || "" : ""}
          />
          <InputField
            label="Пароль"
            type="password"
            value={password}
            onChange={setPassword}
            error={
              submitted ? errors.password || errorsExtra.password || "" : ""
            }
          />
          {mode === "register" && (
            <InputField
              label="Повторите пароль"
              type="password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              error={submitted ? errors.confirmPassword || "" : ""}
            />
          )}
          {errorsExtra.general && (
            <p className="text-red-500 text-sm mt-2">{errorsExtra.general}</p>
          )}
          <button
            type="submit"
            className="mt-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 to-blue-700 text-white font-semibold hover:from-emerald-800 hover:to-blue-900 transition shadow-md"
          >
            {mode === "login" ? "Войти" : "Зарегистрироваться"}
          </button>
        </form>
      </div>
    </div>
  );
};
