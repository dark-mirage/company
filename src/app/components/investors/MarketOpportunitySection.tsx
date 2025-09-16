'use client'
import { Globe, TrendingUp, Users, Target } from "lucide-react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

const MarketOpportunitySection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const marketData = [
    { icon: Globe, value: "$93.5B", label: "Объём e-commerce рынка", desc: "Ожидается в Турции в 2025 году" },
    { icon: TrendingUp, value: "≈10.6%", label: "CAGR (2025-2030)", desc: "Темп роста в ближайшие годы" },
    { icon: Users, value: "≈72%", label: "Доля мобильных транзакций", desc: "Покупки через смартфоны" },
    { icon: Target, value: "TL 3.16 трлн", label: "Объём в лирах", desc: "2024, рост > 60 %" }
  ];


  const problems = [
    { 
      title: "Высокие комиссии", 
      desc: "До 20% с продавцов", 
      impact: "Снижают прибыль" 
    },
    { 
      title: "Сложности перепродажи", 
      desc: "Продавцы устают сами искать товар, выкупать и отвозить", 
      impact: "Занимает время и силы" 
    },
    { 
      title: "Закрытая экосистема", 
      desc: "Текущие маркетплейсы — это просто доски объявлений", 
      impact: "Нет дополнительных сервисов и поддержки" 
    }
  ];

  return (
    <section
      id="opportunity"
      ref={sectionRef}
      className={`py-16 sm:py-20 bg-gray-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Огромные возможности рынка
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            E-commerce растёт быстрее всех отраслей, но существующие маркетплейсы устарели 
            и не отвечают потребностям современных пользователей.
          </p>
        </div>

        {/* Market Data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {marketData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <item.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-600 mb-3 sm:mb-4 mx-auto" />
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                {item.value}
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-semibold text-gray-700 mb-1 sm:mb-2">
                {item.label}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Problems */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Проблемы существующих маркетплейсов
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-red-500 rounded-full"></div>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {problem.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600">{problem.desc}</p>
                <p className="text-xs sm:text-sm text-red-500 font-medium">{problem.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunitySection;
