'use client'

import { useState } from "react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { Timer } from "lucide-react";

const InvestmentCalculatorSection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  const [selectedAmount, setSelectedAmount] = useState<number>(10000);

  const investmentOptions: number[] = [5000, 10000, 25000, 50000, 100000];

  const calculateReturns = (amount: number) => {
    const share = (amount / 500000) * 15; // 15% за $500K
    const valueBy2028 = amount * 12; // Консервативный мультипликатор
    const roi = 1100; // 1100% ROI

    return {
      share: share.toFixed(2),
      valueBy2028: Math.round(valueBy2028),
      multiplier: "12x",
      roi: `${roi}%`,
    };
  };

  const returns = calculateReturns(selectedAmount);

  return (
    <section
      ref={sectionRef}
      className={`py-16 sm:py-20 bg-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Калькулятор инвестиций
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Рассчитайте потенциальную доходность вашей инвестиции в FastMarket
          </p>
        </div>

        {/* Карточка */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
          {/* Сумма инвестиций */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Выберите сумму инвестиций
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
              {investmentOptions.map((amount: number) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`p-3 sm:p-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                    selectedAmount === amount
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-700 hover:shadow-md"
                  }`}
                >
                  ${amount.toLocaleString("en-US")}
                </button>
              ))}
            </div>
          </div>

          {/* Результаты */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                  Ваша инвестиция
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Сумма:</span>
                    <span className="font-bold">
                      ${selectedAmount.toLocaleString("en-US")}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Доля компании:</span>
                    <span className="font-bold text-blue-600">
                      {returns.share}%
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                  Прогноз к 2028
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Стоимость доли:</span>
                    <span className="font-bold text-green-600">
                      ${returns.valueBy2028.toLocaleString("en-US")}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Мультипликатор:</span>
                    <span className="font-bold text-purple-600">
                      {returns.multiplier}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">ROI:</span>
                    <span className="font-bold text-pink-600">
                      {returns.roi}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ограниченное предложение */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg sm:rounded-xl border border-red-200">
              <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-3 text-center space-y-2 sm:space-y-0">
                <Timer className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                <div>
                  <div className="text-red-600 font-bold text-base sm:text-lg">
                    Ограниченное предложение
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">
                    Осталось 45 дней до закрытия раунда
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculatorSection;
