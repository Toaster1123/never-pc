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
      <h2 className="text-2xl font-semibold mb-6 text-emerald-300">
        Почему NEVERPC
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {advantages.map((a) => (
          <div
            key={a.title}
            className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-[#171821] via-[#101018] to-[#0b0c12] text-zinc-100 p-5 hover:border-emerald-500/50 hover:shadow-xl transition"
          >
            <div className="text-3xl mb-1">{a.icon}</div>
            <div className="mt-1 font-medium text-gray-100">{a.title}</div>
            <div className="mt-2 text-zinc-300 text-sm leading-6">{a.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
