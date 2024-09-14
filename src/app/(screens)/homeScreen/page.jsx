import Image from "next/image";
import Link from "next/link";

export default function homeScreen() {
  return (
    <>
      <div className="h-20 w-full bg-blue-700 rounded-b-md relative flex justify-center items-center flex-col ">
        {/* Contéudo da div azul (opcional) */}
      </div>
      <Link href="/UserProfile">
        <div className="absolute right-0 top-[50px] flex items-center bg-white  shadow-lg p-2 rounded-md">
          <div className="font-bold text-lg text-gray-800 whitespace-nowrap">
            $nomeBarboooooo
          </div>
          <img src="/userbarb.png" alt="User" className="w-15 h-10 pl-2 pr-2" />
        </div>
      </Link>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <div className="w-[300px] h-[250px] fixed top-[130px] bg-white flex flex-col  items-center rounded-[13px] shadow-lg ">
          <Image
            src="/logoonwave.png"
            alt="Onwave Logo"
            className=""
            width={200}
            height={200}
          />
          <span className="text-center text-black text-sm font-bold ">
            Seja bem-vindo, $User.<p>Esse é o mural de notificações.</p>
          </span>
        </div>

        <Link
          href="/history"
          passHref
          className="w-[150px] h-[43px] px-7 fixed bottom-[190px] flex items-center bg-white rounded-[10px] shadow-lg"
        >
          <Image
            src="/historicobook.png"
            alt="Histórico"
            width={30}
            height={30}
            className=""
          />
          <span className="pl-2 text-black text-sm font-bold">Histórico</span>
        </Link>

        <Link
          href="/"
          passHref
          className="w-[150px] h-[43px] px-2 fixed bottom-[120px] flex items-center bg-white rounded-[10px] shadow-lg"
        >
          <Image
            src="/atendimentotesoura.png"
            alt="Atendimento Tesoura"
            width={30}
            height={30}
            className=""
          />
          <span className="pl-2 text-black text-sm font-bold">Atendimento</span>
        </Link>
      </div>
    </>
  );
}
