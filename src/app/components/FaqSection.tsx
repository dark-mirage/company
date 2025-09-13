"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  customData?: FAQItem[]; // можно передать конкретные FAQ
}

const defaultFAQ: Record<string, FAQItem[]> = {
  "/": [
    { question: "Где будут располагаться склады FastMarket?", answer: "В ключевых городах Турции: Стамбул, Анкара, Измир, Анталья и Бурса." },
    { question: "Как работает система доставки за 1 день?", answer: "Собственные курьеры, партнёрства и сеть пунктов выдачи 24/7." },
  ],
  "/investors": [
    { question: "Какие инвестиции требуются для запуска?", answer: "Для расширения логистики и маркетинга." },
    { question: "Какой ROI ожидается?", answer: "Ожидаемый ROI — около 1100%." },
  ],
};

const FAQSection: React.FC<FAQSectionProps> = ({ customData }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();

  const faqData = customData || defaultFAQ[pathname] || defaultFAQ["/"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 px-4 transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-bold text-gray-900 mb-3 md:mb-6 text-3xl lg:text-4xl">
            Частые{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Вопросы
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed mx-auto text-[14px] sm:text-base md:text-xl max-w-2xl sm:max-w-3xl md:max-w-4xl">
            Ответы на самые важные вопросы о FastMarket
          </p>
        </div>

        <div className={`grid grid-cols-1 justify-center gap-8 sm:gap-12 items-start px-3 sm:px-0 transition-all duration-700 ease-out delay-200
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="space-y-4 max-w-3xl w-full justify-self-center">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-sm">
                <button
                  className="w-full flex justify-between items-center text-left px-3 py-3 sm:px-6 sm:py-5 md:px-8 md:py-6 hover:bg-gray-50 transition"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="font-semibold text-gray-900 text-[14px] xs:text-[15px] sm:text-[16px] md:text-lg">
                    {item.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0 transition-transform duration-300 rotate-180" />
                  ) : (
                    <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 flex-shrink-0 transition-transform duration-300" />
                  )}
                </button>

                <div className={`overflow-x-hidden transition-all duration-500 ease-in-out
                    ${openFAQ === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-3 sm:px-6 md:px-8 pb-4 sm:pb-6 border-t border-gray-100">
                    <p className="text-gray-600 pt-3 text-[13px] sm:text-[14px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
