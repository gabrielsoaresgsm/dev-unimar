'use client';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

import { ThemeProvider } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { ReduxProvider } from 'redux/provider';
import { LightTheme } from 'themes';

import './globals.css';
import './reset.css';
const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700', '900']
});
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <html lang="pt-BR">
      <head>
        <title>Tiger</title>
        <meta
          name="description"
          content="Compre os melhores produtos!"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/favicon/favicon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-7I9F2I4at8B3adDFxyzFmqxyP73O9cdhN7RmOjGpK7f5j5F5NzjKfeeTwlL25k5BpVf1an6QMBW9VY+5eqJSag=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider theme={LightTheme}>
            {children}
            <Analytics />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
