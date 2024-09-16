"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PopUpExcluir = ({ isVisible, onClose }) => {
  if (!isVisible) return null; // Não renderiza se não estiver visível

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white h-auto w-[300px] p-5 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Editar Produto</h2>

        {/* Input para o nome do produto */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Nome do Produto
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Digite o nome do produto"
          />
        </div>

        {/* Input para o valor do produto */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Valor do Produto
          </label>
          <input
            type="number"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Digite o valor do produto"
          />
        </div>

        {/* Botões para cancelar ou confirmar */}
        <div className="flex justify-between items-center">
          <button
            onClick={onClose} // Fecha o pop-up
            className="bg-red-500 text-white p-2 rounded"
          >
            Cancelar
          </button>
          <button className="bg-blue-500 text-white p-2 rounded">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default function BoxScreen() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <>
      <div className="h-20 w-full bg-blue-700 rounded-b-md flex items-center justify-center">
        <Link href="/UserProfile">
          <div className="fixed top-10 right-0 flex items-center bg-white shadow-lg p-3 rounded-lg">
            <Image
              src="/userbarb.png"
              alt="User"
              className="w-12 h-12 rounded-full"
              width={48}
              height={48}
            />
            <div className="ml-3 text-lg font-bold text-gray-800">
              $nomeBarboooooo
            </div>
          </div>
        </Link>
      </div>

      <div className="relative max-w-[calc(100%-40px)] top-[50px] left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-lg ">
        <div className="flex flex-col mb-4">
          <div className="text-lg font-semibold text-black mb-2">
            Meus Produtos
          </div>
          <div className="flex items-center">
            <Image
              src="/caixabox.png"
              alt="Caixa Box"
              className="w-8 h-8"
              width={32}
              height={32}
            />
            <div className="ml-4 flex-1">
              <div className="text-lg font-semibold text-black">$Produto</div>
              <div className="text-sm text-gray-600">
                R$ 00.00 <br />
                Lote 1, Quantidade: 100
                <br />
                Validade 00/00/0000
              </div>
            </div>
            <div>
              <button onClick={() => setIsPopupVisible(true)}>
                <Image
                  src="/editar.png"
                  alt="Editar"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              </button>
              <PopUpExcluir
                isVisible={isPopupVisible}
                onClose={() => setIsPopupVisible(false)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-[calc(100%-40px)] top-[100px] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 flex items-cente">
        <Image
          src="/plus.png"
          alt="Adicionar Produto"
          className="w-8 h-8"
          width={32}
          height={32}
        />
        <Link href="/" className="ml-4 text-lg font-bold text-blue-600">
          Novos Produtos
        </Link>
      </div>

      <div className="relative max-w-[calc(100%-40px)] top-[110px] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 flex items-center ">
        <Image
          src="/plus.png"
          alt="Adicionar Produto"
          className="w-8 h-8"
          width={32}
          height={32}
        />
        <Link href="/" className="ml-4 text-lg font-bold text-blue-600">
          Registrar o novo lote
        </Link>
      </div>
    </>
  );
}
