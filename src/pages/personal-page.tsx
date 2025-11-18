import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type CurrentUser = { email: string };

export const PersonalPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("currentUser");
    const u = raw ? (JSON.parse(raw) as CurrentUser) : null;
    setUser(u);
    if (!u) {
      navigate("/auth", { replace: true, state: { from: "/personal-page" } });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/", { replace: true });
  };

  if (!user) return null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Личный кабинет</h1>

      <section className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-5 mb-6">
        <h2 className="text-lg font-medium mb-3">Профиль</h2>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-zinc-200" />
          <div>
            <p className="text-zinc-900">{user.email}</p>
            <p className="text-zinc-500 text-sm">
              Покупатель ПК и комплектующих
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-5 mb-6">
        <h2 className="text-lg font-medium mb-3">Последний заказ</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-zinc-900">Сборка “Ryzen 7 + RTX 4070”</p>
            <p className="text-zinc-500 text-sm">
              Статус: в обработке · № 2025-1101
            </p>
          </div>
          <button
            className="px-3 py-2 rounded-xl bg-zinc-900 text-white text-sm hover:bg-zinc-800"
            onClick={() => navigate("#")}
          >
            Детали
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-5 mb-8">
        <h2 className="text-lg font-medium mb-3">Избранное</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li className="rounded-xl border p-4">
            <p className="font-medium">GeForce RTX 4070 Super 12 GB</p>
            <p className="text-sm text-zinc-500">В наличии · 3 года гарантии</p>
          </li>
          <li className="rounded-xl border p-4">
            <p className="font-medium">AMD Ryzen 7 7800X3D</p>
            <p className="text-sm text-zinc-500">Доставка завтра</p>
          </li>
        </ul>
      </section>

      <div className="flex justify-end">
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-xl bg-rose-500 text-white hover:bg-rose-600"
        >
          Выйти
        </button>
      </div>
    </div>
  );
};
