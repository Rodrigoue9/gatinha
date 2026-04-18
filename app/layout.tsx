import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Para Gabrielle, minha Lilium Brownie",
  description: "Uma surpresa romântica e personalizada para Gabrielle, a Fortaleza do meu coração.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
