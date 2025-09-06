"use client";
import React, { useState, useEffect } from 'react';
import {ArrowRight} from 'lucide-react';

interface NewsCardProps {
  date: string;
  title: string;
  excerpt: string;
  category: string;
}

const NewsSection: React.FC = () => {
  const news: NewsCardProps[] = [
    {
      date: '15 Август 2025',
      title: 'FastMarket запускает ИИ-помощника для продавцов',
      excerpt: 'Новый инструмент поможет малому бизнесу оптимизировать продажи и улучшить клиентский сервис',
      category: 'Продукт'
    },
    {
      date: '10 Август 2025',
      title: 'Расширение в страны Латинской Америки',
      excerpt: 'Компания объявила о планах выхода на рынки Бразилии, Мексики и Аргентины в Q4 2025',
      category: 'Экспансия'
    },
    {
      date: '5 Август 2025',
      title: 'Партнерство с ведущими логистическими компаниями',
      excerpt: 'Новые соглашения позволят сократить время доставки до 24 часов в крупных городах',
      category: 'Партнерство'
    }
  ];

  const NewsCard: React.FC<NewsCardProps> = ({ date, title, excerpt, category }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">{date}</span>
        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">
          {category}
        </span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{excerpt}</p>
      <button className="flex items-center text-blue-600 font-medium text-sm hover:text-blue-700">
        Читать далее
        <ArrowRight className="ml-1 h-4 w-4" />
      </button>
    </div>
  );

  return (
    <section id="news" className="py-20 max-[400px]:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="font-bold text-gray-900 mb-3 md:mb-6 text-3xl lg:text-4xl">
            Последние новости
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Следите за последними обновлениями и достижениями FastMarket
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
            Все новости
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection