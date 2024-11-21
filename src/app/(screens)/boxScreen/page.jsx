"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

// PopUpEditar Component
const PopUpEditar = ({ isVisible, onClose }) => {
  if (!isVisible) return null; // Não renderiza se não estiver visível

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white transform max-w-[calc(100%-40px)] max-h-[calc(100%-40px)] p-8 rounded-lg shadow-lg relative flex flex-col items-center">
        <h2 className="text-2xl text-[#5d5988] font-bold">
          Editar meu produto
        </h2>
        <h2 className="text-lg text-blue-400 font-bold text-center p-3">
          Pesquise o nome do produto e depois escolha o novo preço.
        </h2>

        {/* Input de string */}
        <input
          type="search"
          placeholder="Nome do produto"
          className="mt-3 mb-4 w-[268.04px] h-[44.55px] bg-white rounded-[19px] text-black text-[15px] font-bold pl-10 pr-10 border-2 border-[#008fd7] focus:outline-none"
        />

        {/* Input de número */}
        <input
          type="number"
          placeholder="0000"
          className="mb-6 w-[70px] h-[50px] bg-white rounded-lg border-2 border-[#008fd7] focus:outline-none justify-end items-center text-center text-[#61646b] text-sm font-normal"
        />

        {/* Botão de enviar */}
        <button className="w-[268.04px] h-[44.55px] px-9 py-6 bg-[#008fd7] rounded-[40px] justify-center items-center gap-2 inline-flex text-center text-white text-lg font-bold leading-[18px] mb-6">
          Mudar
        </button>

        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="items-center text-gray-500 hover:text-gray-800"
        >
          <Image src="/voltar.png" alt="Fechar" width={32} height={32} />
        </button>
      </div>
    </div>
  );
};

// PopUpExcluir Component
const PopUpExcluir = ({ isVisible, onClose }) => {
  if (!isVisible) return null; // Não renderiza se não estiver visível

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white transform max-w-[calc(100%-40px)] max-h-[calc(100%-40px)] p-8 rounded-lg shadow-lg relative flex flex-col items-center">
        <h2 className="text-2xl pb-3 text-[#5d5988] font-bold">
          Excluir produto
        </h2>

        {/* Botão de confirmação */}
        <button className="w-[268.04px] h-[44.55px] px-9 py-6 bg-[#008fd7] rounded-[40px] justify-center items-center gap-2 inline-flex text-center text-white text-lg font-bold leading-[18px] mb-6">
          Tenho certeza
        </button>

        {/* Botão de desistir */}
        <button
          onClick={onClose}
          className="w-[268.04px] h-[44.55px] px-9 py-6 bg-red-600 rounded-[40px] justify-center items-center gap-2 inline-flex text-center text-white text-lg font-bold leading-[18px] mb-6"
        >
          Desistir
        </button>
      </div>
    </div>
  );
};

// PopUpNovoProduto Component
const PopUpNovoProduto = ({ isVisible, onClose }) => {
  if (!isVisible) return null; // Não renderiza se não estiver visível

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white transform max-w-[calc(100%-40px)] max-h-[calc(100%-40px)] p-8 rounded-lg shadow-lg relative flex flex-col items-center">
        <h2 className="text-2xl pb-3 text-[#5d5988] font-bold">
          Adicionar novo produto
        </h2>

        <input
          type="text"
          placeholder="Nome do produto"
          className="mt-3 mb-4 w-[268.04px] h-[44.55px] bg-white rounded-[19px] text-black text-[15px] font-bold pl-10 pr-10 border-2 border-[#008fd7] focus:outline-none"
        />
        <h2 className="text-lg pb-3 text-[#5d5988] font-bold">Qual o preço?</h2>
        <input
          type="number"
          placeholder="0000"
          className="mb-6 w-[70px] h-[50px] bg-white rounded-lg border-2 border-[#008fd7] focus:outline-none justify-end items-center text-center text-[#61646b] text-sm font-normal"
        />

        <button className="w-[268.04px] h-[44.55px] px-9 py-6 bg-[#008fd7] rounded-[40px] justify-center items-center gap-2 inline-flex text-center text-white text-lg font-bold leading-[18px] mb-6">
          Pronto
        </button>
        {/* Botão de desistir */}
        <button
          onClick={onClose}
          className="w-[268.04px] h-[44.55px] px-9 py-6 bg-red-600 rounded-[40px] justify-center items-center gap-2 inline-flex text-center text-white text-lg font-bold leading-[18px] mb-6"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};
const PopUpNovoLote = ({ isVisible, onClose }) => {
  if (!isVisible) return null; // Não renderiza se não estiver visível

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white transform max-w-[calc(100%-40px)] max-h-[calc(100%-40px)] p-8 rounded-lg shadow-lg relative flex flex-col items-center">
        <h2 className="text-2xl pb-3 text-[#5d5988] font-bold">
          Adicionar novo Lote
        </h2>
        <h2 className="text-lg pb-3 text-blue-400 font-bold">
          Qual a validade?
        </h2>
        <input
          type="date"
          className="mt-3 mb-4 w-[268.04px] h-[44.55px] bg-white rounded-[19px] text-[#61646b] text-[15px] font-bold pl-10 pr-10 border-2 border-[#008fd7] focus:outline-none"
        />
        <h2 className="text-lg pb-3 text-blue-400 font-bold">
          Quantidade do lote
        </h2>
        <input
          type="number"
          placeholder="000000"
          className="mb-6 w-[70px] h-[50px] bg-white rounded-lg border-2 border-[#008fd7] focus:outline-none justify-end items-center text-center text-[#61646b] text-sm font-normal"
        />

        <button className="w-[268.04px] h-[44.55px] px-9 py-6 bg-[#008fd7] rounded-[40px] justify-center items-center gap-2 inline-flex text-center text-white text-lg font-bold leading-[18px] mb-6">
          Pronto
        </button>
        {/* Botão de desistir */}
        <button
          onClick={onClose}
          className="w-[268.04px] h-[44.55px] px-9 py-6 bg-red-600 rounded-[40px] justify-center items-center gap-2 inline-flex text-center text-white text-lg font-bold leading-[18px] mb-6"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

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
