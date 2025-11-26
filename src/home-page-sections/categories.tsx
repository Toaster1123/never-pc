import { Link } from "react-router-dom";
import catPc from "@/assets/hardware/pc/pk-1.png";
import catGpu from "@/assets/hardware/gpu/video-2.png";
import catMb from "@/assets/hardware/motherboards/matplata-5.png";
import catAcc from "@/assets/hardware/devices/headphones1.png";
const categories = [
  { name: "Готовые сборки", to: "/catalog?cat=pc", image: catPc },
  { name: "Видеокарты", to: "/catalog?cat=graphics", image: catGpu },
  { name: "Материнские платы", to: "/catalog?cat=motherboards", image: catMb },
  { name: "Аксессуары", to: "/catalog?cat=accessories", image: catAcc },
];

export const Categories = () => {
  return (
    <section className="w-full bg-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-end justify-between mb-6 text-white">
          <h2 className="text-2xl font-semibold">Категории</h2>

          <Link to="/catalog" className=" hover:underline">
            <span className="text-lg text-white">Весь каталог →</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 ">
          {categories.map((c) => (
            <Link
              key={c.name}
              to={c.to}
              className="group rounded-2xl border border-neutral-900/60 hover:shadow-xl transition overflow-hidden"
            >
              <div className="aspect-[4/3] bg-transparent">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition"
                />
              </div>

              <div className="p-3 text-center text-white font-medium bg-neutral-900">
                {c.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
