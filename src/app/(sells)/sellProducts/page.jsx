"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function SellProducts() {
  const [selectedTheme, setSelectedTheme] = useState("produtos");

  const themes = [
    {
      id: "produtos",
      label: "Produtos",
      description:
        "Esses são os produtos que você adicionou na sessão produtos.",
      img: "/imagemteoria.png",
    },
    {
      id: "servicos",
      label: "Serviços",
      description:
        "Esses são os serviços que você adicionou na sessão serviços.",
      img: "/imagemteoria.png",
    },
  ];

  // Dados de produtos e serviços embutidos no componente
  const data = {
    produtos: [
      { name: "Produto 1", imageUrl: "/imagemteoria.png" },
      { name: "Produto 2", imageUrl: "/imagemteoria.png" },
      { name: "Produto 3", imageUrl: "/imagemteoria.png" },
    ],
    servicos: [
      { name: "Serviço 1", imageUrl: "/imagemteoria.png" },
      { name: "Serviço 2", imageUrl: "/imagemteoria.png" },
      { name: "Serviço 3", imageUrl: "/imagemteoria.png" },
    ],
  };

  return (
    <>
      <Head>
        <title>Onwave - Gestão de Comércio</title>
        <meta name="description" content="APP para a gestão do seu comércio" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center">
        {/* Link para voltar */}
        <div className="fixed top-5 left-3">
          <Link href="/homeScreen">
            <Image
              src="/voltar.png"
              alt="Voltar"
              width={32}
              height={32}
              priority
              className="dark:invert pb-2"
            />
          </Link>
        </div>

        {/* Título e descrição */}
        <div className="text-center pt-10">
          <h1 className="text-[#5d5988] text-2xl font-bold">
            Escolha{" "}
            {selectedTheme === "produtos" ? "os produtos" : "os serviços"}
          </h1>
          <p className="text-[#9795b4] text-lg leading-7">
            {themes.find((theme) => theme.id === selectedTheme)?.description}
          </p>
        </div>

        {/* Botões para selecionar tema */}
        <div className="flex justify-center my-4">
          {themes.map((theme) => (
            <button
              key={theme.id}
              className={`px-4 py-2 mx-2 text-white font-semibold rounded-lg transition-colors ${
                selectedTheme === theme.id
                  ? "bg-blue-600"
                  : "bg-blue-400 hover:bg-blue-500"
              }`}
              onClick={() => setSelectedTheme(theme.id)}
            >
              {theme.label}
            </button>
          ))}
        </div>

        {/* Renderizando Layout de acordo com o tema */}
        <Layout data={data[selectedTheme]} />
      </div>
    </>
  );
}
