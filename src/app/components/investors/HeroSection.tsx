'use client'
import { DollarSign, Download } from "lucide-react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

const HeroSection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl max-[540px]:text-[40px] lg:text-7xl font-bold text-gray-900 leading-tight">
              Инвестируйте в
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                будущее <div className="inline whitespace-nowrap">e-commerce</div>
              </span>
            </h1>
            <p className="text-xl max-[540px]:text-[18px] text-gray-600 leading-relaxed max-w-3xl mx-auto">
              FastMarket революционизирует онлайн-торговлю в СНГ. Присоединяйтесь к нам на раннем этапе 
              и станьте частью следующего единорога в сфере e-commerce.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contacts">
              <button className="max-[540px]:text-[14px] max-[540px]:py-3 max-[540px]:px-5 group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <DollarSign className="mr-2 h-5 w-5" />
                Инвестировать сейчас
              </button>
            </a>
            <a href="/public/pitchdeck/TurkeyExpress.pdf" download>
              <button className="max-[540px]:text-[14px] max-[540px]:py-3 max-[540px]:px-5 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                <Download className="mr-2 h-5 w-5" />
                Скачать Pitch Deck
              </button>
            </a>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-blue-600">$500K</div>
              <div className="text-gray-600">Цель сбора</div>
              <div className="text-sm text-gray-500 mt-2">Pre-Seed раунд</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-purple-600">6 мес</div>
              <div className="text-gray-600">До запуска</div>
              <div className="text-sm text-gray-500 mt-2">MVP готов к Q2 2026</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-3xl font-bold text-pink-600">10-15%</div>
              <div className="text-gray-600">Доля за $500K</div>
              <div className="text-sm text-gray-500 mt-2">Оценка $3.5M</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
