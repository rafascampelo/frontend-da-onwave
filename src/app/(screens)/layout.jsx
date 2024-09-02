"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import "../globals.css";

export default function HomeScreen({ children }) {
  const [activeItem, setActiveItem] = useState(null);
  const router = useRouter();

  const handleClick = (item) => {
    setActiveItem(item.id);
    router.push(item.href);
  };

  return (
    <>
      <Head>
        <title>Onwave</title>
        <meta name="description" content="APP para a gestão do seu comércio" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        />
      </Head>
      <section className="fund">
        {children}
        <footer className="w-[311px] h-[61px] bg-white flex justify-center items-center fixed bottom-8 left-1/2 transform -translate-x-1/2 rounded-[75px]">
          <ul className="flex space-x-8">
            {[
              {
                id: "home",
                label: "Home",
                img: "/homeactive.svg",
                href: "/homeScreen",
              },
              {
                id: "Carteira",
                label: "Carteira",
                img: "/moneyactive.svg",
                href: "/moneyScreen",
              },
              {
                id: "estoque",
                label: "Estoque",
                img: "/boxactive.svg",
                href: "/boxScreen",
              },
              {
                id: "Equipe",
                label: "Equipe",
                img: "/usersactive.svg",
                href: "/myusersScreen",
              },
            ].map((item) => (
              <li
                key={item.id}
                className={`flex flex-col items-center justify-center h-[60px] transition-all duration-300 ${
                  activeItem === item.id
                    ? "bg-blue-200 rounded-full px-3"
                    : "bg-transparent"
                }`}
                onClick={() => handleClick(item)}
              >
                <img src={item.img} alt={item.id} className="w-6 h-6" />
                {activeItem === item.id && (
                  <span className="text-sm font-bold text-black/50">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </footer>
      </section>
    </>
  );
}
