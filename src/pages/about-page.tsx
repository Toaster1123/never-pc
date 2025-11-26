import { Link } from "react-router-dom";

import heroBg from "@/assets/icons/zadnfon2.png";
import vkIcon from "@/assets/icons/vk.png";
import ytIcon from "@/assets/icons/youtube.png";
import instIcon from "@/assets/icons/inst.png";

export const AboutPage = () => {
  const socials = [
    { href: "https://vk.com", src: vkIcon, alt: "VK" },
    { href: "https://www.youtube.com", src: ytIcon, alt: "YouTube" },
    { href: "https://www.instagram.com", src: instIcon, alt: "Instagram" },
  ];

  return (
    <main className="w-full">
      <section
        className="relative overflow-hidden text-white bg-center bg-cover"
        style={{ backgroundImage: `url('${heroBg}')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-7xl px-4 py-16">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            О компании NEVERPC
          </h1>
          <p className="mt-3 max-w-3xl text-zinc-200 text-lg">
            NEVERPC — это команда энтузиастов, которая собирает и поставляет
            современные ПК, комплектующие и периферию. Делаем акцент на честной
            консультации, проверке совместимости и быстрой доставке по всей
            стране.
          </p>
          <div className="mt-5">
            <Link
              to="/catalog"
              className="inline-block px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition"
            >
              <span className="text-white">Перейти в каталог</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <span className="inline-block text-xs tracking-wide px-2 py-1 rounded-full bg-emerald-900/40 text-emerald-300">
              О компании
            </span>
            <h2 className="text-2xl font-semibold mt-2 text-gray-100">
              Почему нас выбирают
            </h2>
            <p className="text-zinc-400 mt-1">
              Фокус на сервисе, скорости и предсказуемом качестве сборок.
            </p>
          </div>
          <Link
            to="/catalog"
            className="hidden sm:inline-block text-emerald-300 hover:text-emerald-200 transition"
          >
            Смотреть каталог →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="cursor-default group rounded-2xl border border-zinc-800 bg-gradient-to-br from-[#171821] via-[#101018] to-[#0b0c12] text-zinc-50 p-5 hover:shadow-xl hover:border-emerald-500/40 transition">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/15 flex items-center justify-center text-2xl">
                🚚
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-100">
                  Доставка за 24 часа
                </h3>
                <p className="mt-1 text-zinc-300 text-sm leading-6">
                  Экспресс по городу и ускоренная логистика по РФ. Статусы
                  заказа в личном кабинете.
                </p>
                <div className="mt-3 h-1.5 w-full bg-zinc-800 rounded">
                  <div className="h-1.5 bg-emerald-500 rounded w-4/5" />
                </div>
              </div>
            </div>
          </article>

          <article className="cursor-default group rounded-2xl border border-zinc-800 bg-gradient-to-br from-[#171821] via-[#101018] to-[#0b0c12] text-zinc-50 p-5 hover:shadow-xl hover:border-emerald-500/40 transition">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/15 flex items-center justify-center text-2xl">
                🛡️
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-100">
                  Гарантия + стресс‑тесты
                </h3>
                <p className="mt-1 text-zinc-300 text-sm leading-6">
                  AIDA/OCCT, обновление BIOS и драйверов. Гарантия до 3 лет с
                  расширением.
                </p>
                <ul className="mt-2 text-sm text-zinc-300 list-disc pl-5">
                  <li>Тихий термопрофиль вентиляторов</li>
                  <li>Проверка совместимости и питания</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="cursor-default group rounded-2xl border border-zinc-800 bg-gradient-to-br from-[#171821] via-[#101018] to-[#0b0c12] text-zinc-50 p-5 hover:shadow-xl hover:border-emerald-500/40 transition">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/15 flex items-center justify-center text-2xl">
                ♻️
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-100">
                  Trade‑In без лишних вопросов
                </h3>
                <p className="mt-1 text-zinc-300 text-sm leading-6">
                  Честная оценка старых комплектующих в зачёт новой покупки.
                </p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-200 text-xs">
                    GPU
                  </span>
                  <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-200 text-xs">
                    Платы
                  </span>
                  <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-200 text-xs">
                    Периферия
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article className="cursor-default group rounded-2xl border border-zinc-800 bg-gradient-to-br from-[#171821] via-[#101018] to-[#0b0c12] text-zinc-50 p-5 hover:shadow-xl hover:border-emerald-500/40 transition">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/15 flex items-center justify-center text-2xl">
                🎧
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-100">Поддержка 24/7</h3>
                <p className="mt-1 text-zinc-300 text-sm leading-6">
                  Быстрые ответы в мессенджерах, помощь с подбором и настройкой.
                </p>
                <div className="mt-3 text-xs text-zinc-300">
                  VK · Telegram · Email — какой канал удобен, такой и
                  используем.
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8">
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-[#171821] via-[#101018] to-[#0b0c12] p-6 md:p-8 shadow-xl">
          <h3 className="text-xl font-semibold mb-3 text-emerald-300">
            Немного о нас
          </h3>
          <p className="text-zinc-300 leading-7 text-sm md:text-base">
            Мы верим, что компьютер должен быть инструментом под ваши задачи: от
            учебы и работы до стриминга и продакшена. Перед отгрузкой мы
            обновляем BIOS, ставим необходимые драйверы и проверяем
            стабильность. Если нужна индивидуальная конфигурация — подберём
            совместимые компоненты и соберём ПК под конкретные требования и
            бюджет.
          </p>
        </div>
      </section>

      <section className="bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-3xl overflow-hidden border border-zinc-800 bg-[#101018] shadow-xl">
            <iframe
              title="NEVERPC на карте"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d959.6933796693038!2d36.586142006619625!3d55.10367162246032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46cad28a545f83eb%3A0x5579b05d653a0009!2z0J7QsdC90LjQvdGB0LrQuNC5INC40L3QtNGD0YHRgtGA0LjQsNC70YzQvdGL0Lkg0YLQtdGF0L3QuNC60YPQvCDQv9C-0YHRgtGA0L7QtdC90L3Ri9C5INCyINGH0LXRgdGC0Ywg0L7Qs9GA0L7QvNC90L7QuSDQu9GO0LHQstC4INC6INCb0Y7QsdC1!5e0!3m2!1sru!2sru!4v1709627220303!5m2!1sru!2sru"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-100">Контакты</h3>
            <ul className="mt-3 space-y-2 text-zinc-300">
              <li>г. Обнинск, ул. Самсоновский проезд, 8</li>
              <li>
                <a
                  href="tel:+79997359999"
                  className="text-emerald-300 hover:text-emerald-200 transition"
                >
                  +7 (999) 735‑99‑99
                </a>
              </li>
              <li>
                <a
                  href="mailto:neverpcinfo@gmail.com"
                  className="text-emerald-300 hover:text-emerald-200 transition"
                >
                  neverpcinfo@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-5 flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-zinc-100 hover:bg-zinc-200 p-2.5"
                  aria-label={s.alt}
                  title={s.alt}
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="h-6 w-6 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
