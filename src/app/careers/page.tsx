"use client";
import React from "react";
import Link from "next/link";

const CareersPage: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Страница{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Careers
          </span>
        </h1>
        <p className="text-xl text-gray-600">
          Эта страница находится в разработке 🚀
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300"
        >
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
};

export default CareersPage;
