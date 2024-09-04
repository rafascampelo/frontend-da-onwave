"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function moneyScreen() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="h-20 w-full bg-blue-700 rounded-b-md relative flex justify-center items-center flex-col">
        {/* Contéudo da div azul (opcional) */}
      </div>

      <div className="absolute left-1/2 top-12 w-[274px] h-20 bg-white rounded-[14px] shadow-inner flex items-center px-4 transform -translate-x-1/2">
        <span className="text-left font-semibold text-xl text-black mr-4">
          R$ 00.00
        </span>
        <Image
          src="/porquinhomoney.png"
          alt="porquinhomoney"
          className="absolute right-5"
          width={40}
          height={40}
        />
      </div>

      <div className="flex justify-center items-start relative">
        <div className=" shadow-inner transform left-1/2 -translate-x-1/2 w-full max-w-[calc(100%-40px)] h-[219px] bg-[#f2f1f9] border border-black absolute top-[70px] flex flex-row items-center ">
          <span className="text-[#5d5988]  font-bold text-2xl absolute top-[20px] left-5">
            Meus gastos:
          </span>
          <span className="text-[#5d5988] absolute top-[25px] flex right-5 font-semibold text-lg">
            Mês 07-2000
          </span>
          <span className="text-[#5d5988]  font-semibold text-2xl absolute top-[60px] left-5">
            R$ -100.00
          </span>

          {/* daqui pra frente tem váriavel*/}
          <div className="">
            <Image
              src="/check.svg"
              alt="check"
              className="absolute left-5 top-[110px] "
              width={20}
              height={20}
            />
            <span className=" text-[#9795b4] text-base font-normal absolute top-[110px] left-12 leading-[18px]">
              Gasto1 - R$50.00
            </span>
          </div>

          <div className="">
            <Image
              src="/check.svg"
              alt="check"
              className="absolute left-5 top-[140px] "
              width={20}
              height={20}
            />
            <span className=" text-[#9795b4] text-base font-normal absolute top-[140px] left-12 leading-[18px]">
              Gasto2 - R$50.00
            </span>
          </div>

          <div className="items-center absolute right-5 top-[160px] flex space-x-1.5">
            <button className="h-10 w-10 bg-white shadow-inner rounded-[14px] flex items-center justify-center">
              <Image
                src="/plus.png"
                alt="plusfinanças"
                width={20}
                height={20}
              />
            </button>

            <button className="h-10 w-10 bg-white shadow-inner rounded-[14px] flex items-center justify-center">
              <Image
                src="/editar.png"
                alt="editarfinanças"
                width={20}
                height={20}
              />
            </button>

            <button className="h-10 w-10 bg-white shadow-inner rounded-[14px] flex items-center justify-center">
              <Image src="/lixeira.png" alt="lixeira" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <button
          onClick={() => setShowModal(true)}
          className="absolute top-[320px] left-1/2 w-[200px] h-[90px]
   bg-white rounded-[14px] shadow-inner flex flex-col items-center 
   px-4 transform -translate-x-1/2 font-bold  text-black text-normal underline"
        >
          <Image
            src="/calendario.png"
            alt="calendario"
            className="py-2"
            width={40}
            height={40}
          />
          Ver com gráfico
        </button>

        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-xl mb-4">Este é um pop-up</h2>
              <p className="mb-4">Conteúdo do pop-up vai aqui.</p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>

      <Link
        href="/"
        class=" text-center text-white text-sl font-bold h-[50px] w-[150px] 
 justify-center items-center flex 
px-2 py-4 bg-[#0f1cf3] rounded shadow gap-2.5 leading-[14px] absolute transform -translate-x-1/2 left-1/2 bottom-[110px] "
      >
        Minhas vendas
      </Link>
    </>
  );
}
