'use client'
import useIntersectionObserver from "./hooks/useIntersectionObserver";

const UseOfFundsSection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const colorClasses: Record<string, string> = {
    blue: "from-blue-400 to-blue-600",
    purple: "from-purple-400 to-purple-600",
    pink: "from-pink-400 to-pink-600",
    green: "from-green-400 to-green-600",
    orange: "from-orange-400 to-orange-600",
  };

  const fundBreakdown = [
    { category: "Разработка MVP", amount: 200000, percentage: 40, color: "blue" },
    { category: "Маркетинг и привлечение", amount: 125000, percentage: 25, color: "purple" },
    { category: "Команда (6 мес)", amount: 100000, percentage: 20, color: "pink" },
    { category: "Инфраструктура", amount: 50000, percentage: 10, color: "green" },
    { category: "Юридические и админ", amount: 25000, percentage: 5, color: "orange" }
  ];

  const roadmap = [
    {
      period: "Месяцы 1-3",
      title: "MVP разработка",
      tasks: ["Создание базовой платформы", "Интеграция платежей", "Базовый UX/UI"]
    },
    {
      period: "Месяцы 4-6", 
      title: "Бета-тестирование",
      tasks: ["Привлечение 100 продавцов", "Тестирование с пользователями", "Оптимизация производительности"]
    },
    {
      period: "Месяцы 7-12",
      title: "Публичный запуск",
      tasks: ["Масштабирование маркетинга", "Расширение функций", "Подготовка Series A"]
    }
  ];

  const keyMetrics = [
    { label: "Активные пользователи", target: "10K" },
    { label: "GMV", target: "$2M" },
    { label: "Продавцы", target: "500" },
    { label: "Готовность к Series A", target: "✓" }
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-16 sm:py-20 bg-gray-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Использование средств
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Детальный план распределения $500K инвестиций для достижения ключевых milestone ов 
            и подготовки к Series A раунду.
          </p>
        </div>

        {/* Контент: левая и правая часть */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Разбивка бюджета */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
              Разбивка бюджета
            </h3>
            <div className="space-y-6">
              {fundBreakdown.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center text-sm sm:text-base">
                    <span className="font-medium text-gray-700">{item.category}</span>
                    <span className="font-bold text-gray-900">${item.amount.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${colorClasses[item.color]} rounded-full transition-all duration-1000`}
                      style={{ width: isVisible ? `${item.percentage}%` : "0%" }}
                    ></div>
                  </div>
                  <div className="text-right text-xs sm:text-sm text-gray-500">
                    {item.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Дорожная карта + метрики */}
          <div className="space-y-8">
            {/* Дорожная карта */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
                Дорожная карта
              </h3>
              <div className="space-y-6">
                {roadmap.map((phase, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4 sm:pl-6">
                    <div className="font-bold text-blue-600 text-sm sm:text-base">{phase.period}</div>
                    <div className="font-semibold text-gray-900 mb-2">{phase.title}</div>
                    <ul className="space-y-1">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="text-xs sm:text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mr-2"></div>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Метрики */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Ключевые метрики успеха
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {keyMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="text-center p-3 sm:p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg sm:rounded-xl"
                  >
                    <div className="text-lg sm:text-2xl font-bold text-green-600">{metric.target}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseOfFundsSection;
