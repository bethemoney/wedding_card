"use client";
import { useEffect } from "react";
import "./globals.css";
import { RIDIBatang } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // 확대 방지
    const preventZoom = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };
    document.addEventListener("touchmove", preventZoom, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventZoom);
    };
  }, []);
  return (
    <html lang="en">
      <head>
        <title>승진 ❤️ 유진 결혼해요</title>
        <meta name="description" content="2월 16일 오후 12시 10분" />
        <meta property="og:title" content="승진 ❤️ 유진 결혼해요" />
        <meta property="og:description" content="2월 16일 오후 12시 10분" />
        {/* <meta property="og:image" content="??" /> */}
      </head>
      <body className={`${RIDIBatang.className}`}>
        {children}
      </body>
    </html>
  );
}
