import Image from "next/image";
import React from "react";
import Link from "next/link";
// Componente de tela de atendimentos
const AtendimentosScreen = ({ atendimentos }) => {
  return (
    <div className="flex justify-center items-center pt-[30px]">
      <div className="bg-gray-100 rounded-lg shadow-lg max-w-[calc(100%-40px)] w-[600px] h-[70vh] overflow-y-auto p-6">
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
        <Link href="/sellProducts">
          <button className="flex items-center justify-center mx-auto my-6 bg-white px-2 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
            <Image
              src="/plus.png"
              alt="Adicionar Atendimento"
              width={32}
              height={32}
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

// Página de Atendimentos
export default function ServiceScreen() {
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
      <div className=" flex flex-col items-center mt-6">
        {/* Título da página */}
        <h1 className="text-3xl font-bold text-blue-600 ">Atendimentos</h1>
      </div>
      {/* Renderizando o componente de atendimentos */}
      <AtendimentosScreen atendimentos={atendimentos} />
    </>
  );
}
