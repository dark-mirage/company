"use client";
import React, { useEffect, useRef, useState } from "react";
import { ShoppingCart, Factory, Handshake, Award, User } from "lucide-react";

const AudienceSection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const actionButtons = [
    {
      icon: ShoppingCart,
      title: "Стать продавцом",
      description: "Начните продавать уже сегодня",
      gradient: "from-blue-600 to-blue-700",
      popular: true,
      link: "/seller/register",
    },
    {
      icon: Factory,
      title: "Стать партнёром (производитель)",
      description: "Для производителей и поставщиков",
      gradient: "from-purple-600 to-purple-700",
      popular: false,
      link: "/partner",
    },
    {
      icon: Handshake,
      title: "Хочу работать с вами",
      description: "Сотрудничество и партнёрство",
      gradient: "from-green-600 to-green-700",
      popular: false,
      link: "/collaboration",
    },
    {
      icon: Award,
      title: "Стать спонсором",
      description: "Спонсорские программы",
      gradient: "from-orange-600 to-orange-700",
      popular: false,
      link: "/sponsor",
    },
    {
      icon: User,
      title: "Хочу к вам на работу",
      description: "Карьерные возможности в команде",
      gradient: "from-red-600 to-red-700",
      popular: false,
      link: "/careers",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="audience" ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div
          className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8"
          }`}
        >
          <h2 className="font-bold text-gray-900 mb-3 md:mb-6 text-3xl lg:text-4xl">
            Для кого{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              FastMarket
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed mx-auto mb-4 text-[14px] sm:text-base md:text-xl max-w-2xl sm:max-w-3xl md:max-w-4xl">
            Присоединяйтесь к революции в электронной коммерции и станьте частью успешного будущего
          </p>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {actionButtons.map((button, index) => {
            const direction =
              index % 3 === 0
                ? "-translate-x-10"
                : index % 3 === 2
                ? "translate-x-10"
                : "";

            return (
              <a
                key={index}
                href={button.link}
                className={`group relative w-full p-4 sm:p-6 md:p-8 bg-gradient-to-r ${button.gradient} 
                          text-white rounded-2xl sm:rounded-3xl text-left
                          shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105
                          ${visible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 translate-y-10 ${direction}`}
                          `}
                style={{
                  transitionDelay: visible ? `${index * 150}ms` : "0ms",
                }}
              >
                {button.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg">
                      ПОПУЛЯРНО
                    </span>
                  </div>
                )}

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <button.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1 sm:mb-2 text-lg sm:text-xl">
                      {button.title}
                    </h3>
                    <p className="text-white text-opacity-90 text-[13px] sm:text-sm">
                      {button.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
