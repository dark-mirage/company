"use client";
import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUsSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    telegram: "",
    whatsapp: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // состояние видимости для анимации
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const botToken = "7536197306:AAFaZvjmaUTp3CADNjPGxC9n6Z_EZYCKw2g";
    const chatId = "1475856594";
    const text = `📩 Новое сообщение с сайта:\n\n👤 Имя: ${formData.name}\n📧 Telegram: ${formData.telegram}\nWhatsApp: ${formData.whatsapp}\n💬 Сообщение: ${formData.message}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text }),
        }
      );

      if (res.ok) {
        setStatus("✅ Сообщение отправлено!");
        setFormData({ name: "", telegram: "", whatsapp: "", message: "" });
      } else {
        setStatus("❌ Ошибка при отправке");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Ошибка при подключении");
    }
  };

  // IntersectionObserver для анимации появления
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contacts"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-50 to-blue-50 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div
          className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ease-out 
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-bold text-gray-900 mb-3 md:mb-6 text-3xl lg:text-4xl">
            Свяжитесь{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              с нами
            </span>
          </h2>
          <p
            className="text-gray-600 mx-auto 
                      text-[14px] sm:text-base md:text-xl 
                      max-w-md sm:max-w-xl md:max-w-2xl"
          >
            Мы всегда открыты для вопросов, предложений и сотрудничества
          </p>
        </div>

        {/* Контакты + Форма */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {/* Блок контактов */}
          <div
            className={`space-y-4 sm:space-y-6 transition-all duration-700 ease-out delay-200 
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center space-x-3 sm:space-x-4 bg-white shadow-lg p-4 sm:p-6 rounded-xl sm:rounded-2xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 flex items-center justify-center rounded-lg sm:rounded-xl">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm sm:text-base">Email</p>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  antalyamarketplace@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 bg-white shadow-lg p-4 sm:p-6 rounded-xl sm:rounded-2xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 flex items-center justify-center rounded-lg sm:rounded-xl">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm sm:text-base">Телефон</p>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  +90 552 662 0091
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 bg-white shadow-lg p-4 sm:p-6 rounded-xl sm:rounded-2xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 flex items-center justify-center rounded-lg sm:rounded-xl">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm sm:text-base">Адрес</p>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  Анталья, Турция
                </p>
              </div>
            </div>
          </div>

          {/* Форма */}
          <div
            className={`bg-white shadow-lg p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl transition-all duration-700 ease-out delay-300 
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="font-bold text-gray-900 mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl">
              Напишите нам
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Как к вам обращаться"
                required
                className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
              />
              <input
                type="text"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                placeholder="Ваш Telegram @username"
                required
                className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
              />
               <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Ваш номер Whatsapp (опционально)"
                className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
              />
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Ваше сообщение"
                required
                className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:opacity-90 transition text-sm sm:text-base"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                Отправить
              </button>
              {status && (
                <p className="mt-2 text-center text-xs sm:text-sm text-gray-600">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
