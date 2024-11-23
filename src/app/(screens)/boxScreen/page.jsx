"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import PopUpEditar from "@/components/ui/PopUpEditar";
import PopUpExcluir from "@/components/ui/PopUpExcluir";
import PopUpNovoProduto from "@/components/ui/PopUpNovoProduto";
import PopUpNovoLote from "@/components/ui/PopUpNovoLote";
// PopUpEditar Component
// PopUpExcluir Component
// PopUpNovoProduto Component
//PopUpNovoLote Component

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function BoxScreen() {
  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
  const [isDeletePopupVisible, setIsDeletePopupVisible] = useState(false);
  const [isNewProductPopupVisible, setIsNewProductPopupVisible] =
    useState(false);
  const [isNewLotePopupVisible, setIsNewLotePopupVisible] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      <div className="h-20 w-full bg-blue-700  flex items-center justify-center">
        <div className="relative w-[330px] h-[50px] flex items-center justify-center top-[40px] p-4 bg-white shadow-lg rounded-full">
          <input
            type="search"
            placeholder="Nome do produto"
            className="w-full h-full bg-transparent rounded-[46px] pl-4 pr-12 outline-none"
          />
          <Button
            size="sm"
            className="bg-transparent  absolute right-3 text-gray-500 cursor-pointe hover:bg-transparent"
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
      <div className="flex justify-center items-center p-4 mt-6 space-x-4">
        <Dialog>
          <DialogTrigger className="w-[200px] h-12 bg-white shadow-lg rounded-lg flex items-center justify-center">
            <Image
              src="/plus.png"
              alt="Adicionar Produto"
              className="w-8 h-8"
              width={32}
              height={32}
            />
            <span className="ml-2 text-sm font-bold text-blue-600">
              Novos Produtos
            </span>
          </DialogTrigger>
        </Dialog>
        <DialogContent className="w-11/12 flex flex-col justify-between rounded-lg">
          <DialogHeader>
            <DialogTitle>Novo produto</DialogTitle>
            <DialogDescription>Adicionar novo produto</DialogDescription>
          </DialogHeader>
          <input
            type="text"
            placeholder="Nome do produto"
            className="mt-3 mb-4 w-[268.04px] h-[44.55px] bg-white rounded-[19px] text-black text-[15px] font-bold pl-10 pr-10 border-2 border-[#008fd7] focus:outline-none"
          />
          <h2 className="text-lg pb-3 text-[#5d5988] font-bold">
            Qual o preço?
          </h2>
          <input
            type="number"
            placeholder="0000"
            className="mb-6 w-[70px] h-[50px] bg-white rounded-lg border-2 border-[#008fd7] focus:outline-none justify-end items-center text-center text-[#61646b] text-sm font-normal"
          />
          <DialogFooter className="flex flex-row justify-evenly">
            <button className="w-[268.04px] h-[44.55px] px-9 py-6 bg-[#008fd7] rounded-[40px] justify-center items-center gap-2 inline-flex text-center text-white text-lg font-bold leading-[18px] mb-6">
              Pronto
            </button>
            <button className="w-[268.04px] h-[44.55px] px-9 py-6 bg-red-600 rounded-[40px] justify-center items-center gap-2 inline-flex text-center text-white text-lg font-bold leading-[18px] mb-6">
              Cancelar
            </button>
          </DialogFooter>
        </DialogContent>

        <button className="w-[200px] h-12 bg-white shadow-lg rounded-lg flex items-center justify-center">
          <Image
            src="/plus.png"
            alt="Adicionar Lote"
            className="w-8 h-8"
            width={32}
            height={32}
          />
          <span className="ml-2 text-sm font-bold text-blue-600">
            Novo lote
          </span>
        </button>
      </div>

      <div className=" p-4 ">
        <div className="items-center justify-center bg-white shadow-lg p-4 rounded-lg ">
          <div className="flex flex-col">
            <div className="flex items-center ">
              <Image
                src="/caixabox.png"
                alt="Caixa Box"
                width={32}
                height={32}
              />
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
                  <Image
                    src="/editar.png"
                    alt="Editar"
                    width={24}
                    height={24}
                  />
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
      </div>
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
