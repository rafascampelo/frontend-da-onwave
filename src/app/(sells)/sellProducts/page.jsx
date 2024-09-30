import Image from "next/image";
import Link from "next/link";

export default function sellProducts() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center bg-gray-100 ">
        {/* aqui é o titulo cabeção */}
        <span className=" text-justify relative pt-4 top-10 text-[#5d5988] text-[28px] font-extrabold leading-[38px]">
          Produtos & Serviços
        </span>

        <div className="text-center pt-10">
          <div className="w-[300px] h-[60px] relative pt-2 pb-2 text-center text-[#9795b4] text-lg font-normal leading-[30px]">
            Esses são os produtos do estoque e os serviços escolhidos no perfil.
          </div>
        </div>
        {/* Botões para selecionar tema */}

        <div className="flex justify-center relative top-4 pt-4">
          <form className="w-[272px] h-[51px]  bg-white rounded-[46px] flex items-center relative">
            <input
              type="search"
              placeholder="Pesquisar..."
              className="w-full h-full border-blue-500 border-2 bg-transparent rounded-[46px] pl-4 pr-10 outline-none"
            />
            <span className="absolute right-3 text-gray-500 cursor-pointer">
              <Image
                src="/pesquisa.png" // Substitua pelo caminho do seu ícone de lupa
                alt="Buscar"
                width={20}
                height={20}
              />
            </span>
          </form>
        </div>
      </div>
    </>
  );
}
