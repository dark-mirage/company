"use client";
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUsSection: React.FC = () => {
  return (
    <section id="contacts" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы всегда открыты для вопросов, предложений и сотрудничества
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Контакты */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 bg-white shadow-lg p-6 rounded-2xl">
              <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-xl">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600">Email</p>
                <p className="font-semibold text-gray-900">info@markethub.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white shadow-lg p-6 rounded-2xl">
              <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-xl">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-600">Телефон</p>
                <p className="font-semibold text-gray-900">+998 90 123 45 67</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white shadow-lg p-6 rounded-2xl">
              <div className="w-12 h-12 bg-purple-100 flex items-center justify-center rounded-xl">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-600">Адрес</p>
                <p className="font-semibold text-gray-900">Стамбул, Турция</p>
              </div>
            </div>
          </div>

          {/* Форма */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Напишите нам</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Ваш Email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <textarea
                rows={4}
                placeholder="Ваше сообщение"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
              >
                <Send className="h-5 w-5" />
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
