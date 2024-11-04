import Image from "next/image";
import Link from "next/link";

// Componente da Página History
export default function History() {
  // Exemplo de dados de atendimentos
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
    <div className="flex flex-col items-center gap-6">
      <div className="h-20 w-full bg-blue-700  flex items-center justify-center">
        <div className="relative w-[330px] h-[50px] flex items-center justify-center top-[50px] bg-white shadow-lg rounded-lg">
          <span className="text-lg font-semibold text-black text-center">
            Histórico
          </span>
        </div>
      </div>

      <div>
        <Link href="/homeScreen" className="fixed top-5 left-3">
          <Image
            src="/voltar.png"
            alt="Onwave Logo"
            className="dark:invert pb-2"
            width={32}
            height={32}
          />
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg  max-w-[calc(100%-40px)] w-[600px] h-[65vh] overflow-y-auto p-6">
        {atendimentos.length === 0 ? (
          <p className="text-center text-gray-500">
            Nenhum atendimento registrado.
          </p>
        ) : (
          atendimentos.map((atendimento, index) => (
            <div
              key={index}
              className="bg-gray-100 mb-4 p-4 rounded-lg shadow-sm border border-gray-300"
            >
              <div className="text-lg font-semibold text-blue-700">
                {atendimento.cliente}
              </div>
              <div className="text-sm text-gray-600">{atendimento.data}</div>
              <div className="mt-2 text-gray-800">
                Corte Feito: {atendimento.corte}
              </div>
              <div className="text-gray-800">
                Produto Usado: {atendimento.produto}
              </div>
              <div className="text-gray-800">
                Pagamento: {atendimento.pagamento}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
