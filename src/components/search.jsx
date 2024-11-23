import React from "react";
import Image from "next/image"; // Importa o componente Image do Next.js

const search = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Título */}
      <span className="text-center pt-14 text-[#5d5988] text-[28px] font-extrabold leading-[38px]">
        {title}
      </span>

      {/* Campo de busca */}
      <div className="flex justify-center">
        <form className="w-[272px] h-[51px] bg-white rounded-[46px] flex items-center relative">
          <input
            type="search"
            placeholder={placeholder}
            className="w-full h-full border-blue-400 border-2 bg-transparent rounded-[46px] pl-4 pr-10 outline-none"
          />
          <span className="absolute right-3 text-gray-500 cursor-pointer">
            <Image src="/pesquisa.png" alt="Buscar" width={20} height={20} />
          </span>
        </form>
      </div>
    </div>
  );
};

export default search;
