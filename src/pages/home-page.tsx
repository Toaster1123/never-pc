import { Link } from "react-router-dom";

import heroImg from "@/assets/icons/logo3.jpg";
import heroBg from "@/assets/icons/bg3.jpg";

import catPc from "@/assets/hardware/pc/pk-1.png";
import catGpu from "@/assets/hardware/gpu/video-2.png";
import catMb from "@/assets/hardware/motherboards/matplata-5.png";
import catAcc from "@/assets/hardware/devices/headphones1.png";

import hitPcRubio from "@/assets/hardware/pc/pk-25.png";
import hitGpu from "@/assets/hardware/gpu/video-3.png";
import hitMb from "@/assets/hardware/motherboards/matplata-3.png";
import hitHeadphones from "@/assets/hardware/devices/headphones1.png";

import brandAsus from "@/assets/brands/asus.jpg";
import brandMsi from "@/assets/brands/msi.jpg";
import brandGiga from "@/assets/brands/gigabyte.jpg";
import brandNvidia from "@/assets/brands/nvidia.jpg";
import brandAmd from "@/assets/brands/amd.jpg";
import brandRazer from "@/assets/brands/razer.jpg";

const hero = {
  title: "Собери ПК мечты",
  subtitle:
    "Готовые сборки, комплектующие и периферия — быстро, честно, с гарантией.",
  ctaPrimary: { label: "Перейти в каталог", to: "/catalog" },
  image: heroImg,
};

const categories = [
  { name: "Готовые сборки", to: "/catalog?cat=pc", image: catPc },
  { name: "Видеокарты", to: "/catalog?cat=graphics", image: catGpu },
  { name: "Материнские платы", to: "/catalog?cat=motherboards", image: catMb },
  { name: "Аксессуары", to: "/catalog?cat=accessories", image: catAcc },
];

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

const advantages = [
  {
    title: "Моментальная доставка",
    desc: "Отправляем в день заказа. Экспресс по городу и быстрая доставка по РФ.",
    icon: "🚚",
  },
  {
    title: "Сервис 24/7",
    desc: "Поддержка в мессенджерах и по телефону без выходных.",
    icon: "🎧",
  },
  {
    title: "Trade‑In",
    desc: "Примем старые комплектующие в зачёт новой покупки.",
    icon: "♻️",
  },
  {
    title: "Гарантия до 3 лет",
    desc: "Официальная гарантия и расширенное покрытие.",
    icon: "🛡️",
  },
];

const brands = [
  brandAsus,
  brandMsi,
  brandGiga,
  brandNvidia,
  brandAmd,
  brandRazer,
];

function formatPrice(n: number) {
  return n.toLocaleString("ru-RU") + " ₽";
}

export const HomePage = () => {
  return (
    <main className="w-full">
      <section
        className="
          relative overflow-hidden text-white
          bg-center bg-cover
          before:absolute before:inset-0 before:bg-black/60 before:content-['']
        "
        style={{ backgroundImage: `url('${heroBg}')` }}
      >
        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              {hero.title}
            </h1>
            <p className="mt-4 text-zinc-200 text-lg">{hero.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to={hero.ctaPrimary.to}
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition text-white"
              >
                <span className="text-white">{hero.ctaPrimary.label}</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] md:aspect-[5/4] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-sm">
              <img
                src={hero.image}
                alt="NEVERPC hero"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 blur-3xl bg-emerald-500/30 rounded-full w-72 h-72 -right-10 -bottom-10" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold">Категории</h2>
          <Link to="/catalog" className="text-emerald-700 hover:underline">
            Весь каталог
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((c) => (
            <Link
              key={c.name}
              to={c.to}
              className="group rounded-2xl border border-zinc-200 hover:shadow-xl transition bg-white overflow-hidden"
            >
              <div className="aspect-[4/3] bg-zinc-50">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition"
                />
              </div>
              <div className="p-3 text-center font-medium">{c.name}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl font-semibold mb-6">Хиты недели</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hits.map((p) => (
              <Link
                key={p.id}
                to={p.to}
                className="rounded-2xl border border-zinc-200 bg-white hover:shadow-xl transition overflow-hidden"
              >
                <div className="h-44 bg-zinc-50">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <div className="font-medium line-clamp-2">{p.title}</div>
                  <div className="mt-1 text-lg font-semibold">
                    {formatPrice(p.price)}
                  </div>
                  <div className="mt-3 text-sm text-emerald-700">
                    Подробнее →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Почему NEVERPC</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {advantages.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 hover:shadow-lg transition"
            >
              <div className="text-3xl">{a.icon}</div>
              <div className="mt-2 font-medium">{a.title}</div>
              <div className="mt-1 text-zinc-600 text-sm leading-6">
                {a.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h2 className="text-2xl font-semibold mb-2">Работаем с брендами</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
            {brands.map((src, i) => (
              <div key={i} className="h-32">
                <img
                  src={src}
                  alt="brand"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h3 className="text-2xl font-semibold">Готовы начать?</h3>
            <p className="text-emerald-50 mt-1">
              Выберите сборку или создайте свою — менеджер поможет с
              совместимостью.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/catalog"
              className="px-5 py-3 rounded-xl bg-white text-emerald-700 hover:bg-emerald-50 transition"
            >
              <span className="text-black">Открыть каталог</span>
            </Link>
            <Link
              to="/servise"
              className="px-5 py-3 rounded-xl border border-white/80 hover:bg-white/10 transition cursor-pointer"
            >
              <span className="text-white">Консультация</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
