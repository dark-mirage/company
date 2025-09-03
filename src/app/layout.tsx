import './globals.css';
import type { Metadata } from 'next';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'FastMarket',
  description: 'Инвестиционная платформа',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  );
}
