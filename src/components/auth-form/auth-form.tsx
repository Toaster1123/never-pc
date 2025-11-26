import { useMemo, useState } from "react";
import { LoginBtn } from "./login-btn";
import { InputField } from "./input-field";
import { useNavigate } from "react-router-dom";

interface AuthErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

type User = { email: string; password: string };

const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

function readUsers(): User[] {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function writeUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
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

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    setSubmitted(true);
    setErrorsExtra({});

    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) return;

    const users = readUsers();

    if (mode === "register") {
      const exists = users.some(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );
      if (exists) {
        setErrorsExtra({ email: "Пользователь с таким email уже существует" });
        return;
      }

      const newUsers = [...users, { email, password }];
      writeUsers(newUsers);

      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ email }));
      navigate("/personal-page", { state: { from: "register" } });
      return;
    }

    if (mode === "login") {
      const user = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );
      if (!user) {
        setErrorsExtra({ general: "Пользователь не найден" });
        return;
      }
      if (user.password !== password) {
        setErrorsExtra({ password: "Неверный пароль" });
        return;
      }
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ email }));
      navigate("/personal-page", { replace: true, state: { from: "login" } });
      return;
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
