import { CartItem } from "@/db";
import { addPurchase, getCart, removeFromCart } from "@/db/service";
import clsx from "clsx";
import { Trash2, Plus, Minus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CartPage = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const load = async () => {
      const result = await getCart();
      if (!result) {
        setItems([]);
      } else {
        setItems(result);
      }
      setLoading(false);
    };

    load();
  }, []);

  const handleChangeQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, count: Math.max(0, item.count + delta) }
            : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.count, 0),
    [items]
  );
  const delivery: number = 0;
  const total = subtotal + delivery;

  const handleBuy = async () => {
    const items = await getCart();
    if (items.length === 0) return;

    const result = await addPurchase(items);
    if (result.success) {
      alert("Покупка сохранена!");
      items.forEach((item) => removeFromCart(item.id));
      setItems([]);
    } else if (result.error === "NOT_AUTH") {
      navigate("/auth", { replace: true });
    }
  };

  return (
    <main className="w-full min-h-screen bg-neutral-900 text-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-semibold mb-6 text-emerald-300">
          Корзина
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-8 items-start">
          <section className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-[#171821] via-[#101018] to-[#05060a] shadow-2xl min-h-[180px]">
            {loading ? (
              <div className="px-6 py-8 space-y-4">
                <div className="h-6 w-40 rounded-full bg-neutral-800 animate-pulse" />
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-20 rounded-2xl bg-neutral-800/80 animate-pulse"
                    />
                  ))}
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="px-6 py-10 text-center text-zinc-400">
                В вашей корзине пока пусто.
              </div>
            ) : (
              <ul className="divide-y divide-zinc-800">
                {items.map((item) => {
                  const disableMinus = item.count <= 1;

                  return (
                    <li
                      key={item.id}
                      className="px-4 md:px-6 py-4 flex flex-col sm:flex-row gap-4"
                    >
                      <div className="w-full sm:w-32 h-28 rounded-2xl bg-neutral-900 flex items-center justify-center overflow-hidden">
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between gap-2">
                        <div className="flex justify-between gap-4">
                          <div className="space-y-1">
                            <p className="font-medium text-sm md:text-base text-gray-100">
                              {item.product.title}
                            </p>
                            <p className="text-xs text-zinc-400">
                              В наличии · доставка завтра
                            </p>
                          </div>
                          <button
                            className="text-zinc-500 hover:text-rose-500 transition"
                            onClick={() => handleRemove(item.id)}
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          <div className="inline-flex items-center rounded-xl border border-zinc-700 bg-neutral-900 overflow-hidden">
                            <button
                              className={`px-2 py-1 transition ${
                                disableMinus
                                  ? "cursor-not-allowed opacity-40"
                                  : "hover:bg-zinc-800"
                              }`}
                              disabled={disableMinus}
                              onClick={() => handleChangeQty(item.id, -1)}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 text-sm">{item.count}</span>
                            <button
                              className="px-2 py-1 hover:bg-zinc-800 transition"
                              onClick={() => handleChangeQty(item.id, 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <p className="text-emerald-400 font-semibold text-right">
                            {(item.product.price * item.count).toLocaleString(
                              "ru-RU"
                            )}{" "}
                            ₽
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          <aside className="rounded-3xl border border-zinc-800 bg-[#111118] shadow-xl p-6 space-y-5">
            <h2 className="text-xl font-semibold text-gray-100">Итог заказа</h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-zinc-300">
                <span>Товары</span>
                <span>{subtotal.toLocaleString("ru-RU")} ₽</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Доставка</span>
                <span>
                  {delivery === 0
                    ? "Бесплатно"
                    : `${delivery.toLocaleString("ru-RU")} ₽`}
                </span>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-3 flex justify-between items-center">
              <span className="text-sm text-zinc-400">Итого</span>
              <span className="text-2xl font-bold text-emerald-400">
                {total.toLocaleString("ru-RU")} ₽
              </span>
            </div>

            <button
              className={clsx(
                "w-full mt-2 py-3 rounded-xl bg-gradient-to-r font-semibold transition shadow-lg",
                items.length > 0
                  ? "hover:from-emerald-800 hover:to-blue-900 from-emerald-700 to-blue-700 text-white "
                  : " from-emerald-900 to-blue-900 text-neutral-500"
              )}
              disabled={!items || items.length === 0 || loading}
              onClick={handleBuy}
            >
              Купить
            </button>

            <button className="w-full py-3 rounded-xl border border-zinc-700 text-sm hover:bg-zinc-900 transition">
              <Link to="/catalog">
                <span className="text-zinc-300">Продолжить покупки</span>
              </Link>
            </button>

            <p className="text-xs text-zinc-500">
              Нажимая «Перейти к оформлению», вы подтверждаете согласие с
              условиями сервиса и политикой конфиденциальности.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
};
