import Image from "next/image";

export default function sellProducts() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center gap-6 ">
        {/* aqui é o titulo cabeção */}
        <span className=" text-center pt-14 text-[#5d5988] text-[28px] font-extrabold leading-[38px]">
          Escolha os <br />
          serviços novos
        </span>

        {/* Botões para selecionar tema */}

        <div className="flex justify-center ">
          <form className="w-[272px] h-[51px]  bg-white rounded-[46px] flex items-center relative">
            <input
              type="search"
              placeholder="Pesquisar..."
              className="w-full h-full border-blue-400 border-2 bg-transparent rounded-[46px] pl-4 pr-10 outline-none"
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
