import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "周旭豪 · 后端开发工程师",
  description: "后端开发工程师周旭豪的个人简历与项目展示：Go / AI 应用方向。",
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
