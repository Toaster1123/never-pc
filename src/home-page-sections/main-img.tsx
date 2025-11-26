import heroImg from "@/assets/icons/logo3.jpg";
import heroBg from "@/assets/icons/bg3.jpg";
import { Link } from "react-router-dom";
const hero = {
  title: "Собери ПК мечты",
  subtitle:
    "Готовые сборки, комплектующие и периферия — быстро, честно, с гарантией.",
  ctaPrimary: { label: "Перейти в каталог", to: "/catalog" },
  image: heroImg,
};
export const MainImg = () => {
  return (
    <section
      className="relative overflow-hidden text-white bg-center bg-cover before:absolute before:inset-0 before:bg-black/60 before:content-['']
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
  );
};
