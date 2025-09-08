"use client";
import React, { useState, useEffect, useRef } from "react";
import { TrendingUp, Users, Globe, Award } from "lucide-react";

interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
  trend?: string;
  index: number;
  isVisible: boolean;
}

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]); // массив ссылок

  const stats: Omit<StatCardProps, "index" | "isVisible">[] = [
    { icon: TrendingUp, value: "2025", label: "Запуск бета-версии", trend: "План" },
    { icon: Users, value: "Первые партнёры", label: "Продавцы и покупатели", trend: "Цель" },
    { icon: Globe, value: "СНГ и Турция", label: "Приоритетные рынки", trend: "Фокус" },
    { icon: Award, value: "Новый подход", label: "Логистика и удобство", trend: "Наше преимущество" },
  ];

  useEffect(() => {
    setVisibleCards(new Array(stats.length).fill(false));

    const observerOptions = {
      threshold: 0.2,
      rootMargin: "-50px 0px",
    };

    // Observer для секции
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    // Observer для карточек
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const updated = [...prev];
                  updated[index] = true;
                  return updated;
                });
              }, index * 200);
              cardObserver.unobserve(entry.target); // ✅ перестаём отслеживать уже показанную карточку
            }
          }
        });
      },
      { ...observerOptions, threshold: 0.3 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, [stats.length]);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Заголовок */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold mb-6">
            Наши{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              цели
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы только начинаем путь и ставим перед собой амбициозные задачи,
            чтобы создать удобный маркетплейс для продавцов и покупателей.
          </p>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el; // ✅ безопасно записываем ref
              }}
              className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                      transition-all duration-500 transform hover:scale-105 border border-gray-100
                      ${
                        visibleCards[index]
                          ? "opacity-100 translate-y-0 translate-x-0 rotate-0"
                          : index % 2 === 0
                          ? "opacity-0 translate-y-8 -translate-x-12 rotate-3"
                          : "opacity-0 translate-y-8 translate-x-12 -rotate-3"
                      }`}
              style={{
                transitionDelay: visibleCards[index] ? "0ms" : `${index * 120}ms`,
              }}
            >
              {/* Иконка */}
              <div
                className={`w-14 h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 
                            group-hover:scale-110 transition-all duration-500 shadow-lg
                            ${
                              visibleCards[index]
                                ? "scale-100 rotate-0"
                                : "scale-75 rotate-12"
                            }`}
              >
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>

              {/* Заголовок */}
              <h3
                className={`font-bold text-gray-900 text-xl mb-2 transition-all duration-700
                            ${visibleCards[index] ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: visibleCards[index] ? "200ms" : "0ms" }}
              >
                {stat.value}
              </h3>

              {/* Подзаголовок */}
              <p
                className={`text-gray-600 text-base mb-4 transition-all duration-700
                            ${visibleCards[index] ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: visibleCards[index] ? "400ms" : "0ms" }}
              >
                {stat.label}
              </p>

              {/* Trend */}
              {stat.trend && (
                <div
                  className={`text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block transition-all duration-500
                              ${
                                visibleCards[index]
                                  ? "opacity-100 translate-x-0"
                                  : "opacity-0 -translate-x-4"
                              }`}
                  style={{ transitionDelay: visibleCards[index] ? "600ms" : "0ms" }}
                >
                  {stat.trend}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
