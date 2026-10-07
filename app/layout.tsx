import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KURA MATCHA — Artisanal Ceremonial Iced Latte",
  description:
    "Experience the explosion of ceremonial Uji matcha, crystalline ice, creamy dairy, and bold espresso swirls in our signature iced matcha latte.",
  keywords: [
    "Matcha Latte",
    "Ceremonial Matcha",
    "Artisanal Coffee",
    "Uji Matcha",
    "Specialty Beverage",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-black">
      <body className="bg-black text-white antialiased min-h-screen selection:bg-emerald-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
