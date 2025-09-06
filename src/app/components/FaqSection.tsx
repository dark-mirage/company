"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, Send } from "lucide-react";

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", question: "" });

  const faqData = [
    {
      question: "Где будут располагаться склады FastMarket?",
      answer:
        "Наши распределительные центры откроются в ключевых городах Турции: Стамбул, Анкара, Измир, Анталья и Бурса. Это позволит обеспечить доставку за 1 день по всей стране.",
    },
    {
      question: "Как работает система доставки за 1 день?",
      answer:
        "Наша логистическая сеть включает собственные курьеры, партнёрства с перевозчиками и сеть пунктов выдачи 24/7. Все заказы обрабатываются и отправляются в день поступления.",
    },
  ];

  const handleFormSubmit = () => {
    if (formData.name && formData.email && formData.question) {
      alert("Спасибо! Мы ответим в ближайшее время.");
      setFormData({ name: "", email: "", question: "" });
    } else {
      alert("Пожалуйста, заполните все поля");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
           <h2 className="font-bold text-gray-900 mb-3 md:mb-6 text-3xl lg:text-4xl">
            Частые{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Вопросы
            </span>
          </h2>
          <p
            className="text-gray-600 leading-relaxed mx-auto 
                      text-[14px] sm:text-base md:text-xl 
                      max-w-2xl sm:max-w-3xl md:max-w-4xl"
          >
            Ответы на самые важные вопросы о FastMarket
          </p>
        </div>
        <div className="grid grid-cols-1 justify-center gap-8 sm:gap-12 items-start px-3 sm:px-0">
          <div className="space-y-4 max-w-3xl w-full justify-self-center">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-sm"
              >
                <button
                  className="w-full flex justify-between items-center text-left 
                            px-3 py-3 sm:px-6 sm:py-5 md:px-8 md:py-6 
                            hover:bg-gray-50"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3
                    className="font-semibold text-gray-900 
                              text-[14px] xs:text-[15px] sm:text-[16px] md:text-lg"
                  >
                    {item.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-3 sm:px-6 md:px-8 pb-4 sm:pb-6 border-t border-gray-100">
                    <p className="text-gray-600 pt-3 text-[13px] sm:text-[14px]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
