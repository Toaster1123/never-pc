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
    <div className="w-full min-h-screen bg-neutral-900">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-semibold mb-6 text-emerald-300">
          Личный кабинет
        </h1>

        <section className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-[#171821] via-[#101018] to-[#0b0c12] shadow-xl p-5 mb-6">
          <h2 className="text-lg font-medium mb-3 text-gray-100">Профиль</h2>
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-emerald-500 to-blue-600 flex items-center justify-center text-xl font-bold text-white">
              {user.email[0]?.toUpperCase()}
            </div>
            <div>
              <p className="text-gray-100">{user.email}</p>
              <p className="text-zinc-400 text-sm">
                Покупатель ПК и комплектующих
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-800 bg-[#111118] shadow-lg p-5 mb-6">
          <h2 className="text-lg font-medium mb-3 text-gray-100">
            Последний заказ
          </h2>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-gray-100">Сборка “Ryzen 7 + RTX 4070”</p>
              <p className="text-zinc-400 text-sm">
                Статус: в обработке · № 2025-1101
              </p>
            </div>
            <button
              className="px-3 py-2 rounded-xl bg-emerald-700 text-white text-sm hover:bg-emerald-800 transition"
              onClick={() => navigate("#")}
            >
              Детали
            </button>
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-800 bg-[#111118] shadow-lg p-5 mb-8">
          <h2 className="text-lg font-medium mb-3 text-gray-100">Избранное</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="rounded-xl border border-zinc-700 bg-neutral-900 p-4">
              <p className="font-medium text-gray-100">
                GeForce RTX 4070 Super 12 GB
              </p>
              <p className="text-sm text-zinc-400">
                В наличии · 3 года гарантии
              </p>
            </li>
            <li className="rounded-xl border border-zinc-700 bg-neutral-900 p-4">
              <p className="font-medium text-gray-100">AMD Ryzen 7 7800X3D</p>
              <p className="text-sm text-zinc-400">Доставка завтра</p>
            </li>
          </ul>
        </section>

        <div className="flex justify-end">
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl bg-rose-600 text-white hover:bg-rose-700 transition shadow-md"
          >
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};
