import { Link } from "react-router-dom";

import hitPcRubio from "@/assets/hardware/pc/pk-25.png";
import hitGpu from "@/assets/hardware/gpu/video-3.png";
import hitMb from "@/assets/hardware/motherboards/matplata-3.png";
import hitHeadphones from "@/assets/hardware/devices/headphones1.png";

const hits = [
  {
    id: 1,
    title: "ПК Rubio Gaming",
    price: 39999,
    image: hitPcRubio,
    to: "/product/30",
    label: "Игровой ПК",
  },
  {
    id: 2,
    title: "RTX 4070 Super",
    price: 74999,
    image: hitGpu,
    to: "/product/10",
    label: "Видеокарта",
  },
  {
    id: 3,
    title: "ASRock B650",
    price: 15999,
    image: hitMb,
    to: "/product/24",
    label: "Материнская плата",
  },
  {
    id: 4,
    title: "KOTION EACH",
    price: 9999,
    image: hitHeadphones,
    to: "/product/12",
    label: "Гарнитура",
  },
];

function formatPrice(n: number) {
  return n.toLocaleString("ru-RU") + " ₽";
}

export const WeekHit = () => {
  return (
    <section className="bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-emerald-400">
              подборка недели
            </p>
            <h2 className="text-2xl font-semibold mt-1 text-gray-100">
              Хиты недели
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              Лучшие предложения по цене и производительности — пока есть в
              наличии.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hits.map((p) => (
            <Link
              key={p.id}
              to={p.to}
              className="group rounded-2xl border border-zinc-800 bg-gradient-to-br from-[#171821] via-[#101018] to-[#0b0c12]
                hover:border-emerald-500/50 hover:shadow-[0_18px_45px_rgba(0,0,0,0.8)]
                transition overflow-hidden flex flex-col"
            >
              <div className="h-44 bg-neutral-900 flex items-center justify-center relative">
                <span className="absolute left-3 top-3 px-2 py-1 rounded-full text-[10px] uppercase tracking-wide bg-emerald-500/10 text-emerald-300 border border-emerald-400/40">
                  {p.label}
                </span>
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full p-4 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <div className="font-medium text-gray-100 line-clamp-2">
                  {p.title}
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <div className="text-lg text-emerald-400 font-semibold">
                    {formatPrice(p.price)}
                  </div>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300">
                    Хит продаж
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-zinc-400">
                    Доставка по РФ · Гарантия 3 года
                  </span>
                </div>

                <div className="mt-3 text-sm text-emerald-400 group-hover:text-emerald-300 transition flex items-center gap-1">
                  <span>Подробнее</span>
                  <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
