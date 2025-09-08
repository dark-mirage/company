"use client";
import React, { useEffect, useRef, useState } from "react";
import { Globe, Target, Briefcase } from "lucide-react";

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Globe,
      title: "Доставка и сервис",
      description:
        "Доставка за 1 день по всей Турции, круглосуточные пункты выдачи с примеркой и один курьер на весь заказ."
    },
    {
      icon: Target,
      title: "Для продавцов",
      description:
        "Полная поддержка без ИП: обучение, склад, упаковка, фото и доставка — мы берём все заботы на себя."
    },
    {
      icon: Briefcase,
      title: "Оплата и возвраты",
      description:
        "Оплата любым способом, возврат в 1 клик с мгновенным возвратом денег и решение всех вопросов без ожидания продавца."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-12 sm:py-16 md:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Левая колонка с заголовком */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <h2
              className={`font-bold text-gray-900 mb-3 md:mb-6 text-3xl lg:text-4xl
                        transition-all duration-1000 ease-out
                        ${isVisible 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-8'
                        }`}
            >
              Наша{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                миссия
              </span>
            </h2>
            
            <p
              className={`text-gray-600 leading-relaxed text-[14px] sm:text-base md:text-lg
                        transition-all duration-1000 ease-out delay-300
                        ${isVisible 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-8'
                        }`}
            >
              FastMarket создаёт маркетплейс нового поколения
            </p>
          </div>

          {/* Правая колонка с карточками */}
          <div className="space-y-4 sm:space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl sm:rounded-2xl p-6 lg:p-8 
                            shadow-lg border border-gray-200 
                            hover:shadow-xl hover:scale-[1.02]
                            transition-all duration-500 ease-out
                            ${isVisible 
                              ? 'opacity-100 translate-x-0' 
                              : 'opacity-0 translate-x-8'
                            }`}
                  style={{
                    transitionDelay: isVisible ? `${600 + index * 200}ms` : '0ms',
                  }}
                >
                  {/* Иконка */}
                  <div 
                    className={`w-14 h-14 lg:w-16 lg:h-16 
                              bg-gradient-to-r from-blue-600 to-purple-600 
                              rounded-xl flex items-center justify-center 
                              mb-4 lg:mb-6 shadow-md
                              transition-all duration-500 ease-out
                              ${isVisible ? 'scale-100' : 'scale-0'}`}
                    style={{
                      transitionDelay: isVisible ? `${800 + index * 200}ms` : '0ms',
                    }}
                  >
                    <Icon className="h-7 w-7 lg:h-8 lg:w-8 text-white" />
                  </div>

                  {/* Заголовок */}
                  <h3 
                    className={`text-xl lg:text-2xl font-bold text-gray-900 
                              mb-3 lg:mb-4
                              transition-all duration-500 ease-out
                              ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      transitionDelay: isVisible ? `${1000 + index * 200}ms` : '0ms',
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Описание */}
                  <p 
                    className={`text-base lg:text-lg text-gray-600 leading-relaxed
                              transition-all duration-500 ease-out
                              ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      transitionDelay: isVisible ? `${1200 + index * 200}ms` : '0ms',
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;