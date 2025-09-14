"use client";

import React, { useEffect, useRef, useState } from "react";

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
}

const TeamSection: React.FC = () => {
  const team: TeamMemberProps[] = [
    {
      name: "Анвар Ахмедов",
      position: "Founder & CEO",
      bio: "Видение, стратегия и развитие проекта",
    },
    {
      name: "Тимур Юлдашев",
      position: "Founder & CEO",
      bio: "Отвечает за IT, технологическую часть и запуск продукта",
    },
    {
      name: "Али Асхабов",
      position: "Финансовый директор",
      bio: "Управление финансами и инвестиционной политикой",
    },
  ];

  const [titleVisible, setTitleVisible] = useState(false);
  const [descVisible, setDescVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]); // ✅ массив рефов

  // Анимация заголовка
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true);
            setTimeout(() => setDescVisible(true), 220);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Анимация карточек
  useEffect(() => {
    setVisibleCards(new Array(team.length).fill(false));

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const copy = [...prev];
                  copy[index] = true;
                  return copy;
                });
              }, index * 150);
              obs.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.22, rootMargin: "-40px 0px" }
    );

    const startObserving = () => {
      cardRefs.current.forEach((el) => {
        if (el) observer.observe(el);
      });
    };

    const rafId = requestAnimationFrame(startObserving);
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [team.length]);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 max-[400px]:py-10 bg-gray-50 overflow-x-hidden "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`font-bold text-gray-900 mb-3 md:mb-6 text-3xl lg:text-4xl transition-all duration-800 transform ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          >
            Наша{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              команда
            </span>
          </h2>
          <p
            className={`text-gray-600 mx-auto text-[14px] sm:text-base md:text-xl max-w-md sm:max-w-xl md:max-w-2xl transition-all duration-800 transform ${
              descVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          >
            Сооснователи и ключевые специалисты, которые строят будущее электронной коммерции
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const isVisible = visibleCards[index];
            return (
             <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }} // ✅ безопасно для TS
                className={`bg-white rounded-2xl p-6 shadow-lg text-center transform transition-all duration-700 ease-out
                  ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}
                  hover:scale-105 hover:shadow-2xl`}
                style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
