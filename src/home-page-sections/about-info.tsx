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

export const AboutInfo = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6 text-white">Почему NEVERPC</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {advantages.map((a) => (
          <div
            key={a.title}
            className="rounded-2xl border border-zinc-900 bg-neutral-600 text-neutral-100 p-5 hover:shadow-lg transition"
          >
            <div className="text-3xl">{a.icon}</div>
            <div className="mt-2 font-medium">{a.title}</div>
            <div className="mt-1 text-neutral-300 text-sm leading-6">
              {a.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
