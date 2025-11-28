import { dbGetAll, dbSet, exportDB, User } from "../database";

export async function registerUser(email: string, password: string) {
  const users = await dbGetAll<User>("users");

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

  await dbSet<User>("users", { email, password });
  await exportDB();

  sessionStorage.setItem("currentUserEmail", email);

  return { success: true };
}

export async function loginUser(email: string, password: string) {
  const users = await dbGetAll<User>("users");

  if (!email.trim()) return { error: "Введите email" };
  if (!password.trim()) return { error: "Введите пароль" };

  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

  if (!user) return { error: "Пользователь не найден" };
  if (user.password !== password) return { error: "Неверный пароль" };

  sessionStorage.setItem("currentUserEmail", user.email);

  return { success: true, user };
}

export async function getCurrentUser(): Promise<User | null> {
  const email = sessionStorage.getItem("currentUserEmail");

  if (!email) return null;

  const users = await dbGetAll<User>("users");
  const user = users.find((u) => u.email === email);

  console.log("Текущий пользователь:", email, user);

  return user || null;
}

export function logoutUser() {
  sessionStorage.removeItem("currentUserEmail");
}
