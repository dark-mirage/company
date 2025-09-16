'use client';
import { Truck, CheckCircle, Camera, Smartphone } from "lucide-react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

const SolutionSection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const solutions = [
    {
      icon: Truck, // или Globe, если хочешь глобальный акцент
      title: "Своя логистика",
      value: "24ч",
      features: [
        "Быстрая доставка за 1 день",
        "Собственные склады и пункты выдачи",
        "Брендированная инфраструктура",
      ],
    },
    {
      icon: Camera, // можно взять Image или Layers
      title: "Все под нашим контролем",
      value: "100%",
      features: [
        "Собственная фотостудия",
        "Контент и описание товаров внутри компании",
        "Финтех-платформа и внутренняя валюта",
      ],
    },
    {
      icon: Smartphone,
      title: "Удобный бизнес в 2 приложениях",
      value: "B2B + B2C",
      features: [
        "Отдельный маркетплейс для закупки и для продажи",
        "Прозрачные комиссии",
        "Полное управление со смартфона",
      ],
    },
  ];
  return (
    <section
      id="solution"
      ref={sectionRef}
      className={`py-16 sm:py-20 bg-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Наше революционное решение
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            FastMarket использует передовые технологии для создания идеального
            маркетплейса нового поколения с фокусом на скорость, удобство и
            прибыльность.
          </p>
        </div>

        {/* Карточки решений */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <solution.icon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />
                <div className="text-2xl sm:text-3xl font-bold text-purple-600">
                  {solution.value}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {solution.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {solution.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-700 text-sm sm:text-base"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
