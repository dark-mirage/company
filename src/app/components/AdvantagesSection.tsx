"use client";
import React, { useEffect, useRef, useState } from "react";
import { Zap, Target, Factory, CheckCircle } from "lucide-react";

const AdvantagesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const advantages = [
    {
      icon: Zap,
      title: "Для покупателей",
      description:
        "Быстрая доставка за 1 день по всей Турции, удобные круглосуточные пункты выдачи с возможностью примерки и проверка качества товара перед покупкой",
      features: ["Доставка за 1 день", "Проверка товара", "Круглосуточные пункты выдачи"],
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Target,
      title: "Для продавцов",
      description:
        "Самые низкие комиссии на рынке от 3%, прямой доступ к миллионам покупателей и полная поддержка бизнеса без необходимости оформления ИП",
      features: ["Комиссии от 3%", "Доступ к клиентам", "Поддержка без ИП"],
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: Factory,
      title: "Для производителей",
      description:
        "Прямой выход на огромные рынки СНГ и Турции, специальная B2B платформа для оптовых продаж и возможность заключения долгосрочных контрактов",
      features: ["Выход на рынок СНГ", "B2B платформа", "Прямые контракты"],
      gradient: "from-green-500 to-emerald-400",
    },
  ];

  useEffect(() => {
    setVisibleCards(new Array(advantages.length).fill(false));

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-50px 0px',
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
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            setVisibleCards(prev => {
              const newVisible = [...prev];
              // Добавляем задержку для каждой карточки
              setTimeout(() => {
                setVisibleCards(prevState => {
                  const updated = [...prevState];
                  updated[index] = true;
                  return updated;
                });
              }, index * 200); // 200ms задержка между карточками
              return newVisible;
            });
          }
        }
      });
    }, { ...observerOptions, threshold: 0.3 });

    // Наблюдаем за секцией
    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    // Наблюдаем за карточками
    cardRefs.current.forEach((ref) => {
      if (ref) {
        cardObserver.observe(ref);
      }
    });

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, [advantages.length]);

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-bold text-gray-900 mb-3 md:mb-6 text-3xl lg:text-4xl">
            Наши{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              преиущества
            </span>
          </h2>
          <p
            className="text-gray-600 leading-relaxed mx-auto 
                      text-[14px] sm:text-base md:text-xl 
                      max-w-2xl sm:max-w-3xl md:max-w-4xl"
          >
            Революционная экосистема электронной коммерции, созданная для успеха всех участников рынка
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className={`group bg-white rounded-2xl sm:rounded-3xl 
                        p-4 sm:p-6 md:p-8 
                        shadow-lg hover:shadow-2xl 
                        transition-all duration-500 
                        transform hover:scale-105 
                        border border-gray-100
                        ${visibleCards[index] 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-12'
                        }`}
              style={{
                transitionDelay: visibleCards[index] ? '0ms' : `${index * 100}ms`,
              }}
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 
                            bg-gradient-to-r ${advantage.gradient} 
                            rounded-2xl sm:rounded-3xl 
                            flex items-center justify-center 
                            mb-4 sm:mb-6 
                            group-hover:scale-110 
                            transition-all duration-500 shadow-lg
                            ${visibleCards[index] ? 'scale-100 rotate-0' : 'scale-75 rotate-12'}`}
              >
                <advantage.icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
              </div>

              <h3 className={`font-bold text-gray-900 mb-2 sm:mb-4 text-lg sm:text-xl md:text-2xl
                            transition-all duration-700
                            ${visibleCards[index] ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: visibleCards[index] ? '200ms' : '0ms' }}>
                {advantage.title}
              </h3>
              
              <p className={`text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base
                           transition-all duration-700
                           ${visibleCards[index] ? 'opacity-100' : 'opacity-0'}`}
                 style={{ transitionDelay: visibleCards[index] ? '400ms' : '0ms' }}>
                {advantage.description}
              </p>

              <div className="space-y-2">
                {advantage.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center space-x-2 transition-all duration-500
                              ${visibleCards[index] 
                                ? 'opacity-100 translate-x-0' 
                                : 'opacity-0 -translate-x-4'
                              }`}
                    style={{ 
                      transitionDelay: visibleCards[index] 
                        ? `${600 + idx * 100}ms` 
                        : '0ms' 
                    }}
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-[13px] sm:text-sm text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;