"use client";
import React from "react";
import { Globe } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Лого */}
          <div className="flex items-center space-x-3">
            <Globe className="h-8 w-8 text-white" />
            <span className="text-xl font-bold">FastMarket</span>
          </div>

          {/* Навигация */}
          <div className="flex justify-center space-x-6">
            <a href="#investors" className="hover:underline">
              Инвесторам
            </a>
            <a href="#contacts" className="hover:underline">
              Связаться
            </a>
            <a href="#about" className="hover:underline">
              О нас
            </a>
          </div>

          {/* Авторские права */}
          <div className="text-center md:text-right text-sm opacity-80">
            © {new Date().getFullYear()} FastMarket. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
