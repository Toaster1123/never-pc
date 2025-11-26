import { Link } from "react-router-dom";

export const ReadyLinks = () => {
  return (
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
  );
};
