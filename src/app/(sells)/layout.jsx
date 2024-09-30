"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
<<<<<<< HEAD
  {
    id: 4,
    type: "product",
    name: "Produto 5",
    imageUrl: "/caixabox.png",
    legend: "Descrição do produto 2",
  },

  {
    id: 4,
    type: "product",
    name: "Produto 3",
    imageUrl: "/caixabox.png",
    legend: "Descrição do produto 2",
  },

  {
    id: 4,
    type: "product",
    name: "Produto 4",
    imageUrl: "/caixabox.png",
    legend: "Descrição do produto 2",
  },

  {
    id: 4,
    type: "product",
    name: "Produto 8",
    imageUrl: "/caixabox.png",
    legend: "Descrição do produto 2",
  },

  {
    id: 4,
    type: "product",
    name: "Produto 5",
    imageUrl: "/caixabox.png",
    legend: "Descrição do produto 2",
  },

  {
    id: 3,
    type: "service",
    name: "Serviço 2",
    imageUrl: "/imagemteoria.png",
    legend: "Descrição do serviço 2",
  },
  {
    id: 3,
    type: "service",
    name: "Serviço 2",
    imageUrl: "/imagemteoria.png",
    legend: "Descrição do serviço 2",
  },
  {
    id: 3,
    type: "service",
    name: "Serviço 2",
    imageUrl: "/imagemteoria.png",
    legend: "Descrição do serviço 2",
  },
  {
    id: 3,
    type: "service",
    name: "Serviço 2",
    imageUrl: "/imagemteoria.png",
    legend: "Descrição do serviço 2",
  },
=======
>>>>>>> b9b3cf4d2eb21ad589766e56766bab134a3773de
];

// Separando serviços e produtos
const services = servicesAndProducts.filter((item) => item.type === "service");
const products = servicesAndProducts.filter((item) => item.type === "product");

export default function RootLayout({ children }) {
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
<<<<<<< HEAD
      <div className="flex flex-col items-center justify-center bg-gray-100 h-full w-full">
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
          <Carousel
            className="w-full max-w-xs"
            opts={{
              align: "start",
            }}
          >
            <CarouselContent>
              {services.map((service) => (
                <CarouselItem
                  key={service.id}
                  className="basis-1/2 lg:basis-1/3"
                >
                  <div
                    key={service.id}
                    className={`flex flex-col bg-white shadow-md w-36 h-44 border-4 rounded-2xl border-blue-400 items-center justify-center
                      cursor-pointer transform transition-transform duration-300 ${
                        activeCard === service.id
                          ? "bg-blue-200/50 w-36 h-44 rounded-md shadow-2xl"
                          : ""
                      }`}
                    onClick={() => handleCardClick(service.id)}
=======
      <div className="flex flex-col items-center justify-center">
        <div className="fund ">
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
          <div className="flex flex-col items-center pt-12 w-full">
            {/* Carrossel de Serviços */}
            <h2 className="text-2xl text-blue-500 text-[28px] font-extrabold leading-[38px] pb-6">
              Serviços
            </h2>
            <Carousel
              className="w-full  max-w-xs"
              opts={{
                align: "start",
              }}
            >
              <CarouselContent>
                {services.map((service) => (
                  <CarouselItem
                    key={service.id}
                    className="basis-1/2 lg:basis-1/3"
>>>>>>> b9b3cf4d2eb21ad589766e56766bab134a3773de
                  >
                    <div
                      key={service.id}
                      className={` flex flex-col bg-white shadow-md w-36 h-44 border-4 rounded-2xl border-blue-400 items-center justify-center
                      cursor-pointer transform transition-transform duration-300 ${
                        activeCard === service.id
                          ? "translate-y-4 shadow-2xl"
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
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

<<<<<<< HEAD
          {/* Carrossel de Produtos */}
          <h2 className="text-2xl text-[#5d5988] text-[28px] font-bold leading-[38px] pb-6 pt-8">
            Produtos
          </h2>
          <Carousel
            className="w-full max-w-xs"
            opts={{
              align: "start",
            }}
          >
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="basis-1/2 lg:basis-1/3"
                >
                  <div
                    key={product.id}
                    className={`flex flex-col bg-white shadow-md w-36 h-44 border-4 rounded-2xl border-blue-400 items-center justify-center
                      cursor-pointer transform transition-transform duration-300 pt-3 mb-3 ${
                        activeCard === product.id
                          ? "bg-blue-200/50 w-36 h-44 rounded-md shadow-2xl "
                          : ""
                      }`}
                    onClick={() => handleCardClick(product.id)}
                  >
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={45}
                      height={45}
                    />
                    <h3 className="text-lg font-bold mt-2 text-blue-600/90 text-center">
                      {product.name}
                    </h3>
                    <p className="text-sm text-bold text-center px-3 text-blue-400">
                      {product.legend}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
=======
            {/* Carrossel de Produtos */}
            <h2 className="text-2xl text-blue-500 text-[28px] font-extrabold leading-[38px] pb-6 pt-8">
              Produtos
            </h2>
            <Carousel
              className="w-full max-w-xs overflow-visible"
              opts={{
                align: "start",
              }}
            >
              <CarouselContent>
                {products.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="basis-1/2 lg:basis-1/3"
                  >
                    <div
                      key={product.id}
                      className={` flex flex-col bg-white shadow-md w-36 h-44 border-4 rounded-2xl border-blue-400 items-center justify-center mb-5
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
                        className=""
                      />
                      <h3 className="text-lg font-bold mt-2 text-blue-600/90 text-center">
                        {product.name}
                      </h3>
                      <p className="text-sm text-bold text-center px-3 text-blue-400">
                        {product.legend}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
>>>>>>> b9b3cf4d2eb21ad589766e56766bab134a3773de
        </div>
      </div>
    </>
  );
}
