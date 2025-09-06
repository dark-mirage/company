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
    <div className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
      </div>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
        {title}
      </h3>
      <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>

  );

  return (
   <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <h2
            className="font-bold text-gray-900 mb-3 md:mb-6 text-3xl lg:text-4xl">
            Наша{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              миссия
            </span>
          </h2>
          <p
            className="text-gray-600 leading-relaxed 
                      text-[14px] sm:text-base md:text-lg"
          >
            FastMarket создаёт маркетплейс нового поколения
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
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