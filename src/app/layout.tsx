import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import worldIcon from "./_assets/world.svg";
import "./globals.css";
import Image from "next/image";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Países do mundo",
  description: "Mostra todos os países do mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable}  antialiased`}>
        <main className="bg-gray-100 min-h-screen flex flex-col items-center">
          <nav className="w-full bg-white h-16 flex items-center justify-center">
            <section className="container flex items-center gap-3">
              <Image
                width={48}
                height={48}
                src={worldIcon}
                alt="Logo da aplicação - emoji de globo"
              />
              <h1 className="font-bold text-2xl">Países do mundo</h1>
            </section>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
