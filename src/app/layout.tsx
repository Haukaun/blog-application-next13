"use client";

import React, { useState, useEffect } from "react";
import NavBar from "@/components/Navbar/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "@/components/Providers";
import Footer from "@/components/LandingPage/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <html
      lang="en"
      data-theme={theme}
      className="flex flex-col min-h-screen items-center"
    >
      <body className={poppins.className + "flex flex-col min-h-screen"}>
        <Providers>
          <div className="max-w-4xl mx-5 flex flex-col min-h-screen">
            <NavBar theme={theme} setTheme={setTheme} />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
