"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import PopUpEditar from "@/components/ui/PopUpEditar";
import PopUpExcluir from "@/components/PopUpExcluir";
import PopUpNovoProduto from "@/components/ui/PopUpNovoProduto";
import PopUpNovoLote from "@/components/ui/PopUpNovoLote";
// PopUpEditar Component
// PopUpExcluir Component
// PopUpNovoProduto Component
//PopUpNovoLote Component

export default function BoxScreen() {
  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
  const [isDeletePopupVisible, setIsDeletePopupVisible] = useState(false);
  const [isNewProductPopupVisible, setIsNewProductPopupVisible] =
    useState(false);
  const [isNewLotePopupVisible, setIsNewLotePopupVisible] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      <div className="h-20 w-full bg-blue-700  flex items-center justify-center">
        <div className="relative w-[330px] h-[50px] flex items-center justify-center top-[50px] bg-white shadow-lg rounded-lg">
          <span className="text-lg font-semibold text-black text-center">
            Meus Produtos
          </span>
        </div>
      </div>

      <div className="flex justify-center pt-10">
        <div className="w-[272px] h-[50px] bg-white rounded-[46px] flex items-center relative shadow-xl">
          <input
            type="search"
            placeholder="Nome do produto"
            className="w-full h-full bg-transparent rounded-[46px] pl-4 pr-12 outline-none"
          />
          <Button
            size="sm"
            className="bg-transparent  absolute right-3 text-gray-500 cursor-pointe hover:bg-transparent"
            onClick={() => console.log("oi")}
          >
            <Image
              src="/pesquisa.png" // Substitua pelo caminho do seu ícone de lupa
              alt="Buscar"
              width={20}
              height={20}
            />
          </Button>
        </div>
      </div>

      <div className="relative max-w-[calc(100%-40px)] h-auto top-[50px] left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-lg ">
        <div className="flex flex-col ">
          <div className="flex items-center">
            <Image src="/caixabox.png" alt="Caixa Box" width={32} height={32} />
            <div className="ml-4 flex-1">
              <div className="text-lg font-semibold text-black">$Produto</div>
              <div className="text-sm text-gray-600">
                R$ 00.00 <br />
                Lote 1, Quantidade: 100 <br />
                Validade 00/00/0000
              </div>
            </div>
            <div>
              <button className="flex flex-col">
                <Image
                  src="/check.png"
                  alt="novolote"
                  className="pb-4"
                  width={24}
                  height={24}
                />
              </button>

              {/* Botão para abrir pop-up de edição */}
              <button onClick={() => setIsEditPopupVisible(true)}>
                <Image src="/editar.png" alt="Editar" width={24} height={24} />
              </button>

              {/* Botão para abrir pop-up de exclusão */}
              <button
                onClick={() => setIsDeletePopupVisible(true)}
                className="flex flex-col"
              >
                <Image
                  src="/lixeira.png"
                  alt="Excluir"
                  className="pt-4"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsNewProductPopupVisible(true)}
        className="relative w-[330px] top-[100px] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 flex items-center"
      >
        <Image
          src="/plus.png"
          alt="Adicionar Produto"
          className="w-8 h-8"
          width={32}
          height={32}
        />
        <span className="ml-4 text-lg font-bold text-blue-600">
          Novos Produtos
        </span>
      </button>

      <button
        onClick={() => setIsNewLotePopupVisible(true)}
        className="relative w-[330px] top-[110px] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 flex items-center"
      >
        <Image
          src="/plus.png"
          alt="Adicionar Produto"
          className="w-8 h-8"
          width={32}
          height={32}
        />
        <span className="ml-4 text-lg font-bold text-blue-600">
          Registrar novo lote
        </span>
      </button>

      <PopUpEditar
        isVisible={isEditPopupVisible}
        onClose={() => setIsEditPopupVisible(false)}
      />
      <PopUpExcluir
        isVisible={isDeletePopupVisible}
        onClose={() => setIsDeletePopupVisible(false)}
      />
      <PopUpNovoProduto
        isVisible={isNewProductPopupVisible}
        onClose={() => setIsNewProductPopupVisible(false)}
      />
      <PopUpNovoLote
        isVisible={isNewLotePopupVisible}
        onClose={() => setIsNewLotePopupVisible(false)}
      />
    </div>
  );
}
