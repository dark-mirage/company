"use client";
import React, { useState, useEffect } from 'react';
import { Globe, Target, Briefcase } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const AboutSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      icon: Globe,
      title: 'Доставка и сервис',
      description: 'Доставка за 1 день по всей Турции, круглосуточные пункты выдачи с примеркой и один курьер на весь заказ.'
    },
    {
      icon: Target,
      title: 'Для продавцов',
      description: 'Полная поддержка без ИП: обучение, склад, упаковка, фото и доставка — мы берём все заботы на себя.'
    },
    {
      icon: Briefcase,
      title: 'Оплата и возвраты',
      description: 'Оплата любым способом, возврат в 1 клик с мгновенным возвратом денег и решение всех вопросов без ожидания продавца.'
    }
  ];

  const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                  Наша миссия
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                MarketHub создаёт маркетплейс нового поколения: быстрая доставка за 1 день, 
                круглосуточные пункты выдачи и простая работа для продавцов. 
                Мы делаем онлайн-торговлю удобной, безопасной и доступной.
              </p>
            </div>

            {/* <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2015</div>
                <div className="text-sm text-gray-600">Год основания</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">1000+</div>
                <div className="text-sm text-gray-600">Сотрудников</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">500M+</div>
                <div className="text-sm text-gray-600">Транзакций</div>
              </div>
            </div> */}
          </div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection