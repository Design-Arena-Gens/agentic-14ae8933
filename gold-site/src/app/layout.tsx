import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-primary",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: {
    default: "طلای بساژ | گالری و کارگاه طلا",
    template: "%s | طلای بساژ",
  },
  description:
    "گالری و کارگاه طلای بساژ؛ طراحی اختصاصی، ساخت و مشاوره سرمایه‌گذاری طلا با تیم متخصص و به‌روزترین نرخ‌های بازار.",
  metadataBase: new URL("https://agentic-14ae8933.vercel.app"),
  openGraph: {
    title: "طلای بساژ | گالری و کارگاه طلا",
    description:
      "جدیدترین طلاهای دست‌ساز، خدمات طراحی اختصاصی و نرخ لحظه‌ای طلا در گالری بساژ.",
    locale: "fa_IR",
    type: "website",
    url: "https://agentic-14ae8933.vercel.app",
  },
  alternates: {
    canonical: "https://agentic-14ae8933.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} antialiased bg-[#09080f] text-stone-100`}>
        {children}
      </body>
    </html>
  );
}
