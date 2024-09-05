import Image from "next/image";
import Link from "next/link";

export default function boxScreen() {
  return (
    <>
      <div className="h-20 w-full bg-blue-700 rounded-b-md relative flex justify-center items-center flex-col ">
        {/* Contéudo da div azul (opcional) */}
      </div>

      <div className="absolute right-0 top-[50px] flex items-center bg-white  shadow-lg p-2 rounded-md">
        <div className="font-bold text-lg text-gray-800 whitespace-nowrap">
          $nomeBarboooooo
        </div>
        <img src="/userbarb.png" alt="User" className="w-15 h-10 pl-2 pr-2" />
      </div>

      <div className="absolute left-5 top-[130px] px-4 flex items-center bg-white  shadow-lg p-2 rounded-[15px]">
        <span className="text-center font-semibold text-black ">
          Meus produtos
        </span>
      </div>
      <div className="absolute right-5 top-[180px]  font-bold text-base px-10 flex items-center bg-blue-600  shadow-lg p-2 rounded-[15px]">
        Há $300
      </div>
      <Image
        src="/caixabox.png"
        alt="caixaboxScreen"
        className="absolute top-[190px] left-6 flex "
        width={26}
        height={26}
      />

      <span className="font-semibold text-lg top-[190px] text-black absolute left-14 flex ">
        $Produto
      </span>

      <span className="font-semibold top-[240px] text-black absolute left-14 flex ">
        Validade 00/00/0000 <br />
        R$ 00.00
      </span>

      <Image
        src="/editar.png"
        alt="editar"
        className="absolute top-[268px] right-5 flex "
        width={15}
        height={15}
      />
      <div className="absolute top-[290px] left-1/2 transform -translate-x-1/2 w-full max-w-[calc(100%-40px)] h-[1px] bg-black" />

      {/*aqui pra frente já não tem mais variavel*/}
      <div
        className="absolute top-[320px] left-1/2 w-[200px] h-[70px]
   bg-white rounded-[14px] shadow-inner flex items-center 
   px-4 transform -translate-x-1/2"
      >
        <Image
          src="/plus.png"
          alt="plus"
          className="absolute left-5"
          width={40}
          height={40}
        />

        <Link href="/" className="absolute right-4 pl-2 font-bold text-black">
          Novos Produtos
        </Link>
      </div>

      <Link
        href="/"
        className="absolute top-[410px] left-4 text-black text-base font-bold underline leading-tight tracking-tight"
      >
        Registrar o novo lote
      </Link>
    </>
  );
}
