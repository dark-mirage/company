'use client'
import { DollarSign, Users, Smartphone, Globe } from "lucide-react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

const FinancialProjectionsSection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const revenueData = [
    { year: "2026", revenue: 5 },
    { year: "2027", revenue: 20 },
    { year: "2028", revenue: 70 },
    { year: "2029", revenue: 200 },
    { year: "2030", revenue: 500 }
  ];

  const metrics2028 = [
    { label: "Активные пользователи", value: "2.5M", icon: Users },
    { label: "GMV", value: "$500M", icon: DollarSign },
    { label: "Продавцы", value: "50K", icon: Smartphone },
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-16 sm:py-20 bg-gray-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок + текст */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Финансовые прогнозы
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Консервативные прогнозы показывают экспоненциальный рост выручки 
            и достижение единорог-статуса к 2030 году.
          </p>
        </div>

        {/* Контент */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Revenue Chart */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
              Прогноз выручки ($К)
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {revenueData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 sm:w-14 lg:w-16 text-gray-600 font-medium text-xs sm:text-sm lg:text-base">
                    {item.year}
                  </div>
                  <div className="flex-1 bg-gray-400 rounded-full h-5 sm:h-6 lg:h-8 mx-2 sm:mx-3 lg:mx-4 relative overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                      style={{ width: isVisible ? `${(item.revenue / 500) * 100}%` : '0%' }}
                    ></div>
                    <div className="absolute inset-0 flex items-center px-2 sm:px-3 lg:px-4">
                      <span className="text-white font-bold text-[10px] sm:text-xs lg:text-sm">
                        ${item.revenue}M
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics 2028 */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
              Ключевые метрики к 2028
            </h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {metrics2028.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl"
                >
                  <metric.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-600 shrink-0" />
                  <div className="flex-1">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                      {metric.value}
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                      {metric.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Дополнительный текст под секцией */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            FastMarket революционизирует онлайн-торговлю в СНГ. Присоединяйтесь к нам на раннем этапе 
            и станьте частью следующего единорога в сфере e-commerce.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinancialProjectionsSection;
