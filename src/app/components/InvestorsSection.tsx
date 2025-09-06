"use client";
import React, { useState, useEffect } from 'react'; 
import { TrendingUp, BarChart3, DollarSign, } from 'lucide-react';

const InvestorsSection: React.FC = () => {
  return (
      <section
      id="investors"
      className="py-20 max-[400px]:py-10 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16">
           <h2 className="font-bold text-gray-900 mb-3 md:mb-6 text-3xl lg:text-4xl">
            Для{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Инвесторов
            </span>
          </h2>
          <p className="text-gray-600 mx-auto  text-[14px] sm:text-base md:text-xl  max-w-md sm:max-w-xl md:max-w-2xl">
            FastMarket — стартап в сфере электронной коммерции. Мы ищем партнёров
            и инвесторов, чтобы вместе построить современную платформу для
            онлайн-торговли.
          </p>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
          {/* Статус проекта */}
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md md:shadow-lg">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
              <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
              Статус проекта
            </h3>
            <div className="space-y-2 md:space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-sm md:text-base text-gray-600">Этап:</span>
                <span className="text-sm md:text-base font-semibold text-right ml-2">
                  Разработка платформы
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm md:text-base text-gray-600">
                  Планы на 2025:
                </span>
                <span className="text-sm md:text-base font-semibold text-green-600 text-right ml-2">
                  Запуск бета-версии
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm md:text-base text-gray-600">Цель:</span>
                <span className="text-sm md:text-base font-semibold text-right ml-2">
                  Привлечение партнёров и инвесторов
                </span>
              </div>
            </div>
          </div>

          {/* Рыночные перспективы */}
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md md:shadow-lg">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
              <BarChart3 className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
              Рыночные перспективы
            </h3>
            <div className="space-y-2 md:space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-sm md:text-base text-gray-600">Сектор:</span>
                <span className="text-sm md:text-base font-semibold text-right ml-2">
                  Электронная коммерция
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm md:text-base text-gray-600">Потенциал:</span>
                <span className="text-sm md:text-base font-semibold text-right ml-2">
                  Рост онлайн-торговли в СНГ и Турции
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm md:text-base text-gray-600">Наш фокус:</span>
                <span className="text-sm md:text-base font-semibold text-blue-600 text-right ml-2">
                  Удобство и быстрая логистика
                </span>
              </div>
            </div>
          </div>

          {/* Перспективы роста */}
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md md:shadow-lg">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
              <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
              Перспективы роста
            </h3>
            <div className="space-y-2 md:space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-sm md:text-base text-gray-600">Прогноз:</span>
                <span className="text-sm md:text-base font-semibold text-right ml-2">
                  Запуск и первые партнёры
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm md:text-base text-gray-600">Планы:</span>
                <span className="text-sm md:text-base font-semibold text-right ml-2">
                  Выход на новые рынки
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-sm md:text-base text-gray-600">Приоритет:</span>
                <span className="text-sm md:text-base font-semibold text-right ml-2">
                  Инвестиции в технологию
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Инвестиционное предложение */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
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
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Фокус на логистике и удобстве покупателей
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Создание условий для продавцов
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Потенциал масштабирования в регионе
                  </span>
                </div>
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

export default InvestorsSection