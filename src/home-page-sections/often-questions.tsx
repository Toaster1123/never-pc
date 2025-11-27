import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Собираете ли вы ПК под мои задачи?",
    answer:
      "Да, подбираем комплектующие под ваши сценарии — от учебы и офисной работы до стриминга и продакшена. Помогаем уложиться в бюджет и сохранить возможность апгрейда.",
  },
  {
    question: "Сколько времени занимает сборка и тесты?",
    answer:
      "Обычно сборка, настройка и стресс‑тесты занимают 1–2 рабочих дня. При высокой загрузке сроки уточняем заранее и фиксируем в заказе.",
  },
  {
    question: "Какая у меня будет гарантия?",
    answer:
      "На готовые сборки действует гарантия от 1 до 3 лет в зависимости от конфигурации и условий производителей комплектующих.",
  },
  {
    question: "Можно ли привезти свои комплектующие?",
    answer:
      "Да, можем собрать ПК с вашими деталями, при этом гарантируем аккуратную установку и проверку совместимости.",
  },
];

export const OftenQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">
              faq
            </p>
            <h2 className="text-2xl font-semibold mt-1 text-gray-100">
              Частые вопросы
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-md">
              Ответы на самые популярные вопросы о сборке, доставке и гарантии.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-[#171821] via-[#101018] to-[#05060a] shadow-xl divide-y divide-zinc-800">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={item.question}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left px-5 py-4 md:px-6 md:py-5 flex flex-col gap-2 hover:bg-neutral-900/60 transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm md:text-base font-medium text-gray-100">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-emerald-300 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {isOpen && (
                  <p className="text-sm text-zinc-300 leading-6 mt-1">
                    {item.answer}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
