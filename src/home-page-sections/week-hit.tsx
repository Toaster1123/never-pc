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
  },
  {
    id: 2,
    title: "RTX 4070 Super",
    price: 74999,
    image: hitGpu,
    to: "/product/10",
  },
  {
    id: 3,
    title: "ASRock B650",
    price: 15999,
    image: hitMb,
    to: "/product/24",
  },
  {
    id: 4,
    title: "KOTION EACH",
    price: 9999,
    image: hitHeadphones,
    to: "/product/12",
  },
];

function formatPrice(n: number) {
  return n.toLocaleString("ru-RU") + " ₽";
}

export const WeekHit = () => {
  return (
    <section className="bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">Хиты недели</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hits.map((p) => (
            <Link
              key={p.id}
              to={p.to}
              className="rounded-2xl border border-black bg-neutral-900 hover:shadow-xl transition overflow-hidden"
            >
              <div className="h-44 bg-neutral-800 flex items-center justify-center">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4">
                <div className="font-medium text-gray-100 line-clamp-2">
                  {p.title}
                </div>

                <div className="mt-1 text-lg text-emerald-400 font-semibold">
                  {formatPrice(p.price)}
                </div>

                <div className="mt-3 text-sm text-emerald-400 hover:text-emerald-300 transition">
                  Подробнее →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
