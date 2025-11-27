import { Link } from "react-router-dom";
import catPc from "@/assets/hardware/pc/pk-1.png";
import catGpu from "@/assets/hardware/gpu/video-2.png";
import catMb from "@/assets/hardware/motherboards/matplata-5.png";
import catAcc from "@/assets/hardware/devices/headphones1.png";

const categories = [
  {
    name: "Готовые сборки",
    to: "/catalog?cat=pc",
    image: catPc,
    badge: "Сборки",
  },
  {
    name: "Видеокарты",
    to: "/catalog?cat=graphics",
    image: catGpu,
    badge: "Графика",
  },
  {
    name: "Материнские платы",
    to: "/catalog?cat=motherboards",
    image: catMb,
    badge: "Платы",
  },
  {
    name: "Аксессуары",
    to: "/catalog?cat=accessories",
    image: catAcc,
    badge: "Периферия",
  },
];

export const Categories = () => {
  return (
    <section className="w-full bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-end justify-between mb-8 text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">
              выберите направление
            </p>
            <h2 className="text-2xl font-semibold mt-1">Категории</h2>
            <p className="text-sm text-zinc-400 mt-1">
              Всё от готовых сборок до периферии — под разные задачи и бюджеты.
            </p>
          </div>

          <Link
            to="/catalog"
            className="hidden sm:inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200 transition text-sm"
          >
            <span>Весь каталог</span>
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {categories.map((c) => (
            <Link
              key={c.name}
              to={c.to}
              className="group relative rounded-3xl overflow-hidden border border-zinc-800
                bg-gradient-to-br from-[#171821] via-[#101018] to-[#05060a]
                hover:border-emerald-500/60 hover:shadow-[0_18px_45px_rgba(0,0,0,0.9)]
                transition"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition" />
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full p-4 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="absolute left-3 top-3 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-[10px] tracking-wide uppercase text-emerald-300">
                {c.badge}
              </div>

              <div className="p-4 flex items-center justify-between">
                <span className="text-sm sm:text-base font-semibold text-gray-100">
                  {c.name}
                </span>
                <span className="text-xs text-emerald-300 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition">
                  Смотреть →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
