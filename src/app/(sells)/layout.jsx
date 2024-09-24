"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const PageServicesAndProducts = () => {
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
      imageUrl: "/imagemteoria.png",
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
      id: 10,
      type: "service",
      name: "Serviço 50",
      imageUrl: "/imagemteoria.png",
      legend: "Descrição do serviço 2",
    },
    {
      id: 9,
      type: "service",
      name: "Serviço 7",
      imageUrl: "/imagemteoria.png",
      legend: "Descrição do serviço 2",
    },
    {
      id: 4,
      type: "product",
      name: "Produto 2",
      imageUrl: "/imagemteoria.png",
      legend: "Descrição do produto 2",
    },
  ];

  const services = servicesAndProducts.filter(
    (item) => item.type === "service"
  );
  const products = servicesAndProducts.filter(
    (item) => item.type === "product"
  );

  const [serviceIndex, setServiceIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);

  const nextService = () => {
    setServiceIndex((prevIndex) => (prevIndex + 2) % services.length);
  };

  const prevService = () => {
    setServiceIndex(
      (prevIndex) => (prevIndex - 2 + services.length) % services.length
    );
  };

  const nextProduct = () => {
    setProductIndex((prevIndex) => (prevIndex + 2) % products.length);
  };

  const prevProduct = () => {
    setProductIndex(
      (prevIndex) => (prevIndex - 2 + products.length) % products.length
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="container mx-auto p-4 flex flex-col gap-4 mt-2">
        <h2 className="text-[24px] font-extrabold leading-[38px] text-[#5d5988]">
          Serviços
        </h2>
        <div className="relative flex items-center">
          <button
            className="absolute left-0 z-10 p-2 disabled:opacity-50 mx-2" // Adicionando margem horizontal
            onClick={prevService}
            disabled={services.length <= 2}
            aria-label="Previous service"
          >
            <Image
              src="/seta_esquerda.png"
              alt="Seta Esquerda"
              width={30}
              height={30}
            />
          </button>

          <div className="flex overflow-hidden justify-center">
            {services.slice(serviceIndex, serviceIndex + 2).map((service) => (
              <div key={service.id} className="p-2 min-w-[120px] mx-2">
                <div className="bg-gray-200 border border-blue-500 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                  <h3 className="text-lg font-bold text-gray-800">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600">{service.legend}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute right-0 z-10 p-2 disabled:opacity-50 mx-2" // Adicionando margem horizontal
            onClick={nextService}
            disabled={services.length <= 2}
            aria-label="Next service"
          >
            <Image
              src="/seta_direita.png"
              alt="Seta Direita"
              width={30}
              height={30}
            />
          </button>
        </div>

        <h2 className="text-[24px] font-extrabold leading-[38px] text-[#5d5988] mt-4">
          Produtos
        </h2>
        <div className="relative flex items-center">
          <button
            className="absolute left-0 z-10 p-2 disabled:opacity-50 mx-2" // Adicionando margem horizontal
            onClick={prevProduct}
            disabled={products.length <= 2}
            aria-label="Previous product"
          >
            <Image
              src="/seta_esquerda.png"
              alt="Seta Esquerda"
              width={30}
              height={30}
            />
          </button>

          <div className="flex overflow-hidden justify-center">
            {products.slice(productIndex, productIndex + 2).map((product) => (
              <div key={product.id} className="p-2 min-w-[120px] mx-2">
                <div className="bg-gray-200 border border-blue-500 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                  <h3 className="text-lg font-bold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.legend}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute right-0 z-10 p-2 disabled:opacity-50 mx-2" // Adicionando margem horizontal
            onClick={nextProduct}
            disabled={products.length <= 2}
            aria-label="Next product"
          >
            <Image
              src="/seta_direita.png"
              alt="Seta Direita"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function RootLayout({ children }) {
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
      <div className="flex flex-col items-center justify-center bg-gray-100 ">
        {children}
        <div className="absolute top-5 left-3">
          <Link href="/homeScreen">
            <Image
              src="/voltar.png"
              alt="Onwave Logo"
              className="dark:invert pb-2"
              width={32}
              height={32}
              priority
            />
          </Link>
        </div>

        <PageServicesAndProducts />
      </div>
    </>
  );
}
