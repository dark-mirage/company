"use client";
import React, { useRef, useState, useEffect } from "react";
import { Award, BarChart3, Play } from "lucide-react";

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
     ref={sectionRef}
      className={`min-h-screen relative overflow-x-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 transition-all duration-1000 overflow-x-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl max-[500px]:text-[42px] max-[380px]:text-[38px] lg:text-7xl font-bold text-gray-900 leading-tight">
                Будущее
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  маркетплейсов
                </span>
              </h1>
              <p className="text-xl max-[500px]:text-[20px] max-[380px]:text-[16px] text-gray-600 leading-relaxed">
                FastMarket — современный маркетплейс нового формата, где ты можешь продавать на одном маркетплейсе и покупать оптом на другом, полностью онлайн. Доставка за один день и встроенные финтех-инструменты делают торговлю простой, быстрой и безопасной. Мы создаём пространство, где продавцы и покупатели находят друг друга в один клик, а бизнес растёт без лишней суеты.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
             <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 max-[400px]:px-4 max-[400px]:py-2.5 max-[320px]:px-4 max-[320px]:py-4 max-[320px]:text-[18px] rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5 max-[320px]:h-4 max-[320px]:w-4" />
                Смотреть презентацию
              </button>
              <a href="#contacts">
                <button className="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 max-[400px]:px-4 max-[400px]:py-2.5 max-[320px]:px-4 max-[320px]:py-4 max-[320px]:text-[18px] rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  Инвестировать
                </button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 max-[555px]:grid-cols-1 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">В разработке</div>
                <div className="text-sm text-gray-600">Платформа</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">Будущие</div>
                <div className="text-sm text-gray-600">Партнёры и продавцы</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">Скоро</div>
                <div className="text-sm text-gray-600">Запуск проекта</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 max-[400px]:p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-lg max-[400px]:text-[18px] font-semibold">Наша цель</div>
                  <div className="text-2xl max-[400px]:text-[18px] text-green-500">Удобные покупки</div>
                </div>
                <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-end justify-center">
                  <BarChart3 className="h-24 w-24 text-blue-600 opacity-50" />
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Award className="h-10 w-10 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection