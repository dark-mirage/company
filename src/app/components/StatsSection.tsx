"use client";
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
  trend?: string;
}

const StatsSection: React.FC = () => {
  const stats: StatCardProps[] = [
   {
    icon: TrendingUp,
    value: '2025',
    label: 'Запуск бета-версии',
    trend: 'План'
  },
  {
    icon: Users,
    value: 'Первые партнёры',
    label: 'Продавцы и покупатели',
    trend: 'Цель'
  },
  {
    icon: Globe,
    value: 'СНГ и Турция',
    label: 'Приоритетные рынки',
    trend: 'Фокус'
  },
  {
    icon: Award,
    value: 'Новый подход',
    label: 'Логистика и удобство',
    trend: 'Наше преимущество'
  }
  ];

  const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label, trend }) => (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
    {/* Верхняя часть */}
    <div className="flex items-center justify-between mb-3 sm:mb-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
      </div>
      {trend && (
        <div className="text-xs sm:text-sm text-green-600 font-medium bg-green-50 px-2 py-0.5 sm:py-1 rounded-full">
          {trend}
        </div>
      )}
    </div>

    {/* Нижняя часть */}
    <div className="space-y-1 sm:space-y-2">
      <div className="text-xl sm:text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm sm:text-base text-gray-600">{label}</div>
    </div>
  </div>
  );

  return (
    <section className="py-20 max-[400px]:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-gray-900 mb-3 md:mb-6 text-3xl lg:text-4xl">
              Наши{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                цели
              </span>
            </h2>
          <p className="text-gray-600 leading-relaxed mx-auto  text-[14px] sm:text-base md:text-xl  max-w-2xl sm:max-w-3xl md:max-w-4xl">
            Мы только начинаем путь и ставим перед собой амбициозные задачи, 
            чтобы создать удобный маркетплейс для продавцов и покупателей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default StatsSection