import { dbGetAll, dbSet } from "../database";
import { User } from "../database";

const CURRENT_USER_KEY = "currentUserEmail";

export async function registerUser(email: string, password: string) {
  const users = await dbGetAll("users");

  if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
    return { error: "Некорректный email" };
  }

  if (password.length < 6) {
    return { error: "Пароль должен быть минимум 6 символов" };
  }

  const exists = users.some(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );

  if (exists) {
    return { error: "Пользователь с таким email уже существует" };
  }

  const newUser: Omit<User, "id"> = { email, password };
  await dbSet("users", newUser as User);

  sessionStorage.setItem(CURRENT_USER_KEY, email);

  return { success: true };
}

export async function loginUser(email: string, password: string) {
  const users = await dbGetAll("users");

  if (!email.trim()) return { error: "Введите email" };
  if (!password.trim()) return { error: "Введите пароль" };

  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

  if (!user) return { error: "Пользователь не найден" };
  if (user.password !== password) return { error: "Неверный пароль" };

  sessionStorage.setItem(CURRENT_USER_KEY, user.email);

  return { success: true, user };
}

export async function getCurrentUser(): Promise<User | null> {
  const email = sessionStorage.getItem(CURRENT_USER_KEY);
  if (!email) return null;

  const users = await dbGetAll("users");
  return users.find((u) => u.email === email) || null;
}

export function logoutUser() {
  sessionStorage.removeItem(CURRENT_USER_KEY);
}
