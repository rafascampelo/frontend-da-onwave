"use client";
import Image from "next/image";
import { useState } from "react";

export default function MyUsersScreen() {
  const funcionarios = [
    {
      nome: "Func 1",
      unidade: "Local",
      comissao: "5%",
      pagamento: "20% o corte",
      servicos: [
        { src: "/imagemteoria.png", label: "Corte 1" },
        { src: "/imagemteoria.png", label: "Corte 2" },
      ],
    },
    {
      nome: "Func 2",
      unidade: "Local 2",
      comissao: "10%",
      pagamento: "30% o corte",
      servicos: [
        { src: "/imagemteoria.png", label: "Corte A" },
        { src: "/imagemteoria.png", label: "Corte B" },
      ],
    },
  ];

  const [activeFuncIndex, setActiveFuncIndex] = useState(0);
  const [activeServicoIndex, setActiveServicoIndex] = useState(0);

  const handleNextFunc = () => {
    setActiveFuncIndex((prevIndex) => (prevIndex + 1) % funcionarios.length);
    setActiveServicoIndex(0); // Resetar o carrossel de serviços ao mudar o funcionário
  };

  const handlePrevFunc = () => {
    setActiveFuncIndex(
      (prevIndex) => (prevIndex - 1 + funcionarios.length) % funcionarios.length
    );
    setActiveServicoIndex(0);
  };

  const handleNextServico = () => {
    setActiveServicoIndex(
      (prevIndex) =>
        (prevIndex + 1) % funcionarios[activeFuncIndex].servicos.length
    );
  };

  const handlePrevServico = () => {
    setActiveServicoIndex(
      (prevIndex) =>
        (prevIndex - 1 + funcionarios[activeFuncIndex].servicos.length) %
        funcionarios[activeFuncIndex].servicos.length
    );
  };

  return (
    <>
      <div className="justify-center items-center flex flex-col ">
        <span className="flex pt-10 text-center text-[#5d5988] text-[28px] font-extrabold">
          Meus funcionários
        </span>

        {/* Carrossel de funcionários */}
        <div className="relative flex items-center">
          {/* Seta esquerda para navegar entre os funcionários */}
          <button
            className="absolute bottom-[85px] left-[-45px] transform -translate-y-1/2"
            onClick={handlePrevFunc}
          >
            <Image
              src="/esquerdauser.png"
              alt="Seta anterior"
              width={32}
              height={32}
            />
          </button>

          <div className="w-[254px] h-[250px] flex flex-col relative mt-10 bg-white rounded-[18px]">
            <span className="text-[#9db2ce] text-2xl absolute top-2 left-5 font-bold leading-[38px]">
              {funcionarios[activeFuncIndex].nome}
            </span>
            <div className="mt-12 w-full">
              <table className="w-full text-center">
                <thead>
                  <tr>
                    <th className="px-5 text-left text-base font-bold tracking-tight">
                      Unidade:
                    </th>
                    <th className="px-5 text-right text-base font-bold tracking-tight text-black">
                      {funcionarios[activeFuncIndex].unidade}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="px-5 text-left text-base font-bold tracking-tight">
                      Comissão:
                    </th>
                    <th className="px-5 text-right text-base font-bold tracking-tight text-black">
                      {funcionarios[activeFuncIndex].comissao}
                    </th>
                  </tr>

                  <tr>
                    <td className="px-5 text-left text-base font-bold tracking-tight">
                      Pagamento:
                    </td>
                    <td className="px-2 absolute right-3 text-base font-bold tracking-tight text-black">
                      {funcionarios[activeFuncIndex].pagamento}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <span className="text-left px-5 text-black text-[18px] font-semibold">
              Serviços oferecidos:
            </span>

            {/* Carrossel de serviços */}
            <div className="w-[254px] h-[179px] flex flex-col justify-center items-center relative mt-5 bg-white rounded-[18px]">
              {/* Setas para o carrossel de serviços */}
              <button
                className="absolute left-2 transform -translate-y-1/2"
                onClick={handlePrevServico}
              >
                <Image
                  src="/seta_esquerda.png"
                  alt="seta da esquerda"
                  width={24}
                  height={24}
                />
              </button>

              <div className="flex justify-center items-center">
                {/* Imagem ativa no carrossel de serviços */}
                <Image
                  src={
                    funcionarios[activeFuncIndex].servicos[activeServicoIndex]
                      .src
                  }
                  alt={
                    funcionarios[activeFuncIndex].servicos[activeServicoIndex]
                      .label
                  }
                  width={100}
                  height={100}
                  className="rounded-[8px]"
                />
              </div>

              <button
                className="absolute right-2 transform -translate-y-1/2"
                onClick={handleNextServico}
              >
                <Image
                  src="/seta_direita.png"
                  alt="seta da direita"
                  width={24}
                  height={24}
                />
              </button>

              {/* Rótulo do serviço */}
              <span className="text-center pt-1 text-[15px] font-bold text-[#5d5a88] ">
                {
                  funcionarios[activeFuncIndex].servicos[activeServicoIndex]
                    .label
                }
              </span>
            </div>
          </div>

          {/* Seta direita para navegar entre os funcionários */}
          <button
            className="absolute bottom-[85px] right-[-45px] transform -translate-y-1/2"
            onClick={handleNextFunc}
          >
            <Image
              src="/direitauser.png"
              alt="Seta próxima"
              width={32}
              height={32}
            />
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center pt-8 ">
        <button className="h-10 w-10  mx-1 space-x-1.5 bg-white shadow-inner rounded-full flex items-center justify-center">
          <Image
            src="/lixeira.png"
            alt="editarfinanças"
            width={20}
            height={20}
          />
        </button>

        <button className="h-10 w-10 mx-1 space-x-1.5 bg-white shadow-inner rounded-full flex items-center justify-center">
          <Image
            src="/editar.png"
            alt="editarfinanças"
            width={20}
            height={20}
          />
        </button>

        <button className="h-10 w-10 mx-1 space-x-1.5 bg-white shadow-inner rounded-full flex items-center justify-center">
          <Image src="/plus.png" alt="editarfinanças" width={20} height={20} />
        </button>
      </div>
    </>
  );
}
