import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello! I'm xxx",
  description: "一个可复用的交互式个人简历与项目展示网站模板。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="bg-ink antialiased">{children}</body>
    </html>
  );
}
