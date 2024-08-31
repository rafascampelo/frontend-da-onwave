"use client";

import { useState } from "react";
import Head from "next/head";
import "../globals.css";
import Image from "next/image";

export default function home_screen({ children }) {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item);
  };
  return (
    <html lang="pt-br">
      <Head>
        <title>Onwave</title>
        <meta name="description" content="APP para a gestão do seu comércio" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {children}
        <main className="w-[311px] h-[61px] bg-white flex justify-center items-center fixed bottom-0 left-1/2 transform -translate-x-1/2 rounded-[75px] ">
          <ul className="flex space-x-8">
            {[
              {
                id: "home",
                label: "Home",
                img: "/home.svg",
                href: "/home_screen",
              },
              {
                id: "Carteira",
                label: "Carteira",
                img: "/money.svg",
                href: "/money_screen",
              },
              {
                id: "estoque",
                label: "Estoque",
                img: "/box.svg",
                href: "/box_screen",
              },
              {
                id: "Equipe",
                label: "Equipe",
                img: "/users.svg",
                href: "/myusers_screen",
              },
            ].map((item) => (
              <li
                key={item.id}
                className={`flex flex-col items-center justify-center px-3 py-1 h-[60px] transition-all duration-300 ${
                  activeItem === item.id
                    ? "bg-blue-400 rounded-lg"
                    : "bg-transparent rounded-full"
                }`}
                onClick={() => handleClick(item.id)}
              >
                <img src={item.img} alt={item.id} className="w-6 h-6" />
                {activeItem === item.id && (
                  <span className="text-sm font-semibold text-white mt-1">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </main>
      </body>
    </html>
  );
}
