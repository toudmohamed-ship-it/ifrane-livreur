import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ifrane Livreur",
  description: "Service de livraison rapide à Ifrane, Maroc.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
