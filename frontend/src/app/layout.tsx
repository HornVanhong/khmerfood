import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KhmerFood — Cambodian Recipes & Cooking Guides",
  description: "Discover authentic Cambodian dishes and learn traditional Khmer cooking with step-by-step photos and ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="km">
      <body className="min-h-screen flex flex-col bg-khmer-cream text-khmer-charcoal antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
