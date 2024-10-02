'use client';

import { useState } from 'react';
import Image from "next/image";
import React from "react";

// Função para o popup de agendar atendimento
const Popup = ({ closePopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 transition-all duration-300 ease-in-out">
    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md mx-4 sm:mx-auto max-h-[90vh] overflow-y-auto transform transition-transform duration-500 ease-in-out scale-100">
      <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
        Agendar Atendimento
      </h2>
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">
            Nome do Cliente:
          </label>
          <input
            type="text"
            className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none focus:border-transparent"
            placeholder="Digite o nome"
          />
        </div>
       
        <div className="flex justify-end space-x-3 mt-6">
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
            onClick={closePopup}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  </div>
  
  
  );
};

const AtendimentosScreen = ({ atendimentos, openPopup }) => {
  return (
    <div className="flex justify-center items-center pt-[30px]">
      <div className="bg-white rounded-lg shadow-lg max-w-[calc(100%-40px)] w-[600px] h-[70vh] overflow-y-auto p-6">
        {atendimentos.length === 0 ? (
          <p className="text-center text-gray-500">
            Nenhum atendimento registrado.
          </p>
        ) : (
          atendimentos.map((atendimento, index) => (
            <div
              key={index}
              className="bg-blue-100/50 mb-4 p-4 rounded-lg shadow-md border-2 border-blue-600 hover:shadow-lg transition-shadow"
            >
              <div className="text-lg font-semibold text-blue-700">
                {atendimento.cliente}
              </div>
              <div className="text-sm text-gray-500">{atendimento.data}</div>
              <div className="mt-2 text-gray-700">
                <strong>Corte Feito:</strong> {atendimento.corte}
              </div>
              <div className="text-gray-700">
                <strong>Produto Usado:</strong> {atendimento.produto}
              </div>
              <div className="text-gray-700">
                <strong>Pagamento:</strong> {atendimento.pagamento}
              </div>
              <div className="mt-6 flex justify-between">
                <button className="bg-green-500 text-white px-5 py-3 rounded-full hover:bg-green-600 transition">
                  Finalizar
                </button>
                <button className="bg-red-500 text-white px-5 py-3 rounded-full hover:bg-red-600 transition">
                  Cancelar
                </button>
              </div>
            </div>
          ))
        )}
        {/* Botão centralizado com a imagem */}
        <button
          className="flex items-center justify-center mx-auto my-6 bg-white px-2 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-100 ease-in-out"
          onClick={openPopup}
        >
          <Image
            src="/plus.png"
            alt="Adicionar Atendimento"
            width={32}
            height={32}
          />
        </button>
      </div>
    </div>
  );
};

// Componente principal
export default function ServiceScreen() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const atendimentos = [
    {
      cliente: "João da Silva",
      data: "01/09/2024",
      corte: "Corte de cabelo",
      produto: "Shampoo",
      pagamento: "R$ 50,00",
    },
    {
      cliente: "Maria Oliveira",
      data: "02/09/2024",
      corte: "Pintura",
      produto: "Tintura",
      pagamento: "R$ 150,00",
    },
    // Adicione mais atendimentos conforme necessário
  ];

  return (
    <>
      <div className="flex flex-col items-center">
        {/* Título da página */}
        <h1 className="text-3xl font-extrabold text-[#5d5988] pt-4">Atendimentos</h1>
      </div>
      {/* Renderizando o componente de atendimentos */}
      <AtendimentosScreen atendimentos={atendimentos} openPopup={openPopup} />

      {isOpen && <Popup closePopup={closePopup} />}
    </>
  );
}
