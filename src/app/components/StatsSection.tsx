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
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        {trend && (
          <div className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
            {trend}
          </div>
        )}
      </div>
      <div className="space-y-2">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="text-gray-600">{label}</div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наши цели
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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