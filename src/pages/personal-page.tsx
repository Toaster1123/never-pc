import { User, Purchase } from "@/db";
import { getCurrentUser, logoutUser } from "@/db/service";
import { getPurchases } from "@/db/service/purchased";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PersonalPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [selectedPurchase, setSelectedPurchase] = useState<Purchase | null>(
    null
  );

  useEffect(() => {
    async function load() {
      const u = await getCurrentUser();
      if (!u) {
        navigate("/auth", { replace: true });
        return;
      }
      setUser(u);

      const userPurchases = await getPurchases();
      setPurchases(userPurchases);
    }

    load();
  }, [navigate]);

  const handleLogout = () => {
    logoutUser();
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
            Последние заказы
          </h2>
          {purchases.length === 0 ? (
            <p className="text-zinc-400">У вас пока нет заказов</p>
          ) : (
            <div className="space-y-4">
              {purchases.map((purchase) => (
                <div
                  key={purchase.id}
                  className="flex items-center justify-between gap-4 border border-zinc-700 rounded-xl p-4"
                >
                  <div>
                    <p className="text-gray-100">
                      {purchase.items.map((i) => i.product.title).join(", ")}
                    </p>
                    <p className="text-zinc-400 text-sm">
                      Статус: в обработке · № {purchase.id?.slice(0, 8)} ·
                      Товаров:{" "}
                      {purchase.items.reduce((sum, i) => sum + i.count, 0)}
                    </p>

                    <p className="text-zinc-400 text-sm">
                      Дата: {new Date(purchase.date).toLocaleString("ru-RU")}
                    </p>
                  </div>
                  <button
                    className="px-3 py-2 rounded-xl bg-emerald-700 text-white text-sm hover:bg-emerald-800 transition"
                    onClick={() => setSelectedPurchase(purchase)}
                  >
                    Детали
                  </button>
                </div>
              ))}
            </div>
          )}
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

      {selectedPurchase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-xl rounded-3xl border border-zinc-800 bg-neutral-900 shadow-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-100">
                  Заказ № {selectedPurchase.id.slice(0, 8)}
                </h3>
                <p className="text-xs text-zinc-400">
                  Дата:{" "}
                  {new Date(selectedPurchase.date).toLocaleString("ru-RU")}
                </p>
              </div>
              <button
                className="text-zinc-400 hover:text-zinc-100 transition text-sm"
                onClick={() => setSelectedPurchase(null)}
              >
                Закрыть
              </button>
            </div>

            <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
              {selectedPurchase.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 border border-zinc-800 rounded-2xl px-3 py-2 bg-[#111118]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-neutral-900 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-100 line-clamp-2">
                        {item.product.title}
                      </p>
                      <p className="text-xs text-zinc-400">
                        Количество: {item.count}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-emerald-400">
                    {(item.product.price * item.count).toLocaleString("ru-RU")}{" "}
                    ₽
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-800 mt-4 pt-3 flex justify-between items-center">
              <span className="text-sm text-zinc-400">
                Всего товаров:{" "}
                {selectedPurchase.items.reduce((sum, i) => sum + i.count, 0)}
              </span>
              <span className="text-lg font-bold text-emerald-400">
                {selectedPurchase.items
                  .reduce((sum, i) => sum + i.product.price * i.count, 0)
                  .toLocaleString("ru-RU")}{" "}
                ₽
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
