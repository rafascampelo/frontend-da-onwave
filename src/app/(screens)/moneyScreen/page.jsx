import Image from "next/image";
import Link from "next/link";

export default function moneyScreen() {
  return (
    <>
      <div className="h-20 w-full bg-blue-700 rounded-b-md relative flex justify-center items-center flex-col">
        {/* Contéudo da div azul (opcional) */}
      </div>

      <div className="absolute left-1/2 top-12 w-[274px] h-20 bg-white rounded-[14px] shadow-inner flex items-center px-4 transform -translate-x-1/2">
        <span className="text-left font-semibold text-xl text-black mr-4">
          R$ 00.00
        </span>
        <Image
          src="/porquinhomoney.png"
          alt="porquinhomoney"
          className="absolute right-5"
          width={40}
          height={40}
        />
      </div>

      <div className="flex justify-center items-start relative">
        <div className="w-[293px] h-[219px] bg-[#f2f1f9] border border-black absolute top-[100px] flex flex-row items-center px-3">
          <span className="text-[#5d5988] justify-start font-semibold text-lg ">
            Meus gastos
          </span>
          <h4 className="text-[#5d5988] absolute right-5 font-semibold text-base">
            Mês: pananam
          </h4>
        </div>
      </div>
    </>
  );
}
