"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Head from "next/head";

// Dados dos serviços e produtos
const servicesAndProducts = [
  {
    id: 1,
    type: "service",
    name: "Serviço 1",
    imageUrl: "/imagemteoria.png",
    legend: "Descrição do serviço 1",
  },
  {
    id: 2,
    type: "product",
    name: "Produto 1",
    imageUrl: "/caixabox.png",
    legend: "Descrição do produto 1",
  },
  {
    id: 3,
    type: "service",
    name: "Serviço 2",
    imageUrl: "/imagemteoria.png",
    legend: "Descrição do serviço 2",
  },
  {
    id: 4,
    type: "product",
    name: "Produto 2",
    imageUrl: "/caixabox.png",
    legend: "Descrição do produto 2",
  },
];

// Separando serviços e produtos
const services = servicesAndProducts.filter((item) => item.type === "service");
const products = servicesAndProducts.filter((item) => item.type === "product");

export default function RootLayout({ children }) {
  const [emblaRefServices] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 1,
  });
  const [emblaRefProducts] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 1,
  });

  const [activeCard, setActiveCard] = useState(null);

  // Função para manipular o clique e definir o card ativo
  const handleCardClick = (id) => {
    setActiveCard(id === activeCard ? null : id); // Desativa se for o mesmo card
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
        {children}
        <div className="absolute top-5 left-3">
          <Link href="/homeScreen">
            <Image
              src="/voltar.png"
              alt="Voltar"
              className="dark:invert pb-2"
              width={32}
              height={32}
              priority
            />
          </Link>
        </div>
        <div className="flex flex-col items-center mt-12 w-full">
          {/* Carrossel de Serviços */}
          <h2 className="text-2xl text-[#5d5988] text-[28px] font-bold leading-[38px] pb-6">
            Serviços
          </h2>
          <div className="embla mx-auto max-w-3xl">
            <div className="embla__viewport" ref={emblaRefServices}>
              <div className="embla__container flex gap-x-4">
                {services.map((service) => (
                  <div
                    key={services.id}
                    className={`embla__slide flex flex-col bg-white shadow-md w-36 h-44 border-4 rounded-2xl border-blue-400 items-center justify-center
                      cursor-pointer transform transition-transform duration-300 ${
                        activeCard === service.id
                          ? "-translate-y-4 shadow-2xl"
                          : ""
                      }`}
                    onClick={() => handleCardClick(service.id)}
                  >
                    <Image
                      src={service.imageUrl}
                      alt={service.name}
                      width={85}
                      height={85}
                      className="rounded-lg shadow-lg"
                    />
                    <h3 className="text-lg font-bold mt-2 text-blue-600/90 text-center">
                      {service.name}
                    </h3>
                    <p className="text-sm text-bold text-center px-3 text-blue-400">
                      {service.legend}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carrossel de Produtos */}
          <h2 className="text-2xl text-[#5d5988] text-[28px] font-bold leading-[38px] pb-6 pt-8">
            Produtos
          </h2>
          <div className="embla mx-auto  max-w-3xl pb-6">
            <div className="embla__viewport" ref={emblaRefProducts}>
              <div className="embla__container flex gap-x-4">
                {products.map((product) => (
                  <div
                    key={products.id}
                    className={`embla__slide flex flex-col bg-white shadow-md w-36 h-44  border-4 rounded-2xl border-blue-400 items-center justify-center
                      cursor-pointer transform transition-transform duration-300 ${
                        activeCard === product.id
                          ? "-translate-y-4 shadow-2xl"
                          : ""
                      }`}
                    onClick={() => handleCardClick(product.id)}
                  >
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={50}
                      height={50}
                    />
                    <h3 className="text-lg font-bold mt-2 text-blue-600/90 text-center">
                      {product.name}
                    </h3>
                    <p className="text-sm text-bold text-center px-3 text-blue-400">
                      {product.legend}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
