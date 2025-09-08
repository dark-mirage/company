"use client";
import React, { useEffect, useRef, useState } from "react";
import { TrendingUp, BarChart3, DollarSign } from "lucide-react";

const InvestorsSection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="investors"
      className="py-20 max-[400px]:py-10 bg-gradient-to-br from-blue-50 to-purple-50 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8"
          }`}
        >
          <h2 className="font-bold text-gray-900 mb-3 md:mb-6 text-3xl lg:text-4xl">
            Для{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Инвесторов
            </span>
          </h2>
          <p className="text-gray-600 mx-auto text-[14px] sm:text-base md:text-xl max-w-md sm:max-w-xl md:max-w-2xl">
            FastMarket — стартап в сфере электронной коммерции. Мы ищем партнёров
            и инвесторов, чтобы вместе построить современную платформу для
            онлайн-торговли.
          </p>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
          {[
            {
              icon: <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-green-600" />,
              bg: "bg-green-100",
              title: "Статус проекта",
              content: [
                ["Этап:", "Разработка платформы"],
                ["Планы на 2025:", "Запуск бета-версии", "text-green-600"],
                ["Цель:", "Привлечение партнёров и инвесторов"],
              ],
            },
            {
              icon: <BarChart3 className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />,
              bg: "bg-blue-100",
              title: "Рыночные перспективы",
              content: [
                ["Сектор:", "Электронная коммерция"],
                ["Потенциал:", "Рост онлайн-торговли в СНГ и Турции"],
                ["Наш фокус:", "Удобство и быстрая логистика", "text-blue-600"],
              ],
            },
            {
              icon: <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />,
              bg: "bg-purple-100",
              title: "Перспективы роста",
              content: [
                ["Прогноз:", "Запуск и первые партнёры"],
                ["Планы:", "Выход на новые рынки"],
                ["Приоритет:", "Инвестиции в технологию"],
              ],
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md md:shadow-lg transform transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0 translate-x-0 rotate-0"
                  : i === 0
                  ? "opacity-0 translate-y-8 -translate-x-10 -rotate-2"
                  : i === 1
                  ? "opacity-0 translate-y-8"
                  : "opacity-0 translate-y-8 translate-x-10 rotate-2"
              }`}
              style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms" }}
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 ${card.bg} rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6`}
              >
                {card.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                {card.title}
              </h3>
              <div className="space-y-2 md:space-y-3">
                {card.content.map(([label, value, color], idx) => (
                  <div key={idx} className="flex justify-between items-start">
                    <span className="text-sm md:text-base text-gray-600">
                      {label}
                    </span>
                    <span
                      className={`text-sm md:text-base font-semibold text-right ml-2 ${
                        color || ""
                      }`}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Инвестиционное предложение */}
        <div
          className={`bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-700 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: visible ? "500ms" : "0ms" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Инвестиционное предложение
              </h3>
              <p className="text-gray-600 mb-6">
                FastsMarket открыт для партнёрств и инвестиций. Мы создаём
                маркетплейс нового поколения и приглашаем инвесторов
                присоединиться на раннем этапе, чтобы вместе выйти на рынок
                электронной коммерции.
              </p>
              <div className="space-y-3">
                {[
                  "Фокус на логистике и удобстве покупателей",
                  "Создание условий для продавцов",
                  "Потенциал масштабирования в регионе",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="text-4xl font-bold mb-2">2025</div>
                <div className="text-lg opacity-90">Планируемый запуск</div>
                <div className="text-2xl font-bold mt-4">Открыты</div>
                <div className="text-sm opacity-90">для инвестиций</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
