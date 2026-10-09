import type { Metadata, Viewport } from 'next';
import './globals.css';
import { CurrencyProvider } from '@/context/CurrencyContext';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#040507',
};

export const metadata: Metadata = {
  title: 'APEX GLOSS | Precision Auto Detailing & 9H Ceramic Studio (USA & Canada)',
  description:
    'North America’s premier mobile auto detailing and 9H ceramic coating service. Hospital-grade steam interior sanitization, 2-stage paint correction, and CARFAX verified warranties.',
  keywords: [
    'car detailing',
    'mobile auto detailing',
    'ceramic coating',
    'paint correction',
    'interior detailing',
    'car detailing USA',
    'car detailing Canada',
    'Toronto car detailing',
    'Dallas auto detailing',
    'Los Angeles mobile wash',
    'CARFAX verified ceramic',
  ],
  authors: [{ name: 'Apex Gloss Detailing Inc.' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-brand-darker text-slate-100 antialiased selection:bg-brand-cyan selection:text-black">
        <CurrencyProvider>{children}</CurrencyProvider>
      </body>
    </html>
  );
}

