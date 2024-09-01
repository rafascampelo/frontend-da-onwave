import Image from "next/image";
import Link from "next/link";

export default function homeScreen() {
  return (
    <>
      <div className="fixed right-0 top-[60px] transform -translate-y-1/2 flex items-center bg-white  shadow-lg p-2 pr-5 rounded-md">
        <div className="font-bold text-lg text-gray-800 whitespace-nowrap">
          $nomeBarboooooo
        </div>
        <img src="/userbarb.png" alt="User" className="w-10 h-10 ml-2" />
      </div>

      <div className="justify-center px-8">
        <div className="w-[300px] h-[250px] fixed top-[100px] bg-white flex flex-col  items-center rounded-[13px] shadow-md shadow-blue-400">
          <Image
            src="/logoonwave.png"
            alt="Onwave Logo"
            className=""
            width={200}
            height={200}
          />
          <span className="text-center text-black text-sm font-bold leading-tight tracking-tight">
            Seja bem-vindo, $User
          </span>
        </div>

        <div className="w-[300px] h-[50px] fixed bottom-[240px] bg-white flex flex-col  items-center rounded-[13px] shadow-md shadow-blue-400">
          <span className="text-center text-black text-sm font-bold pt-4 leading-tight tracking-tight">
            Seu mural de notificações.
          </span>
        </div>
      </div>
      <div className="justify-center px-28">
        <Link
          href="/"
          className="w-[136px] h-[42px] px-5 fixed bottom-[180px] flex items-center bg-white rounded-[10px] shadow-md shadow-blue-400"
        >
          <Image
            src="/historicobook.png"
            alt="Atendimento Tesoura"
            width={30} // Tamanho ajustável
            height={30} // Tamanho ajustável
            className=" pr-2"
          />
          <span className="text-center text-black text-sm font-bold pt-2 whitespace-nowrap ">
            Histórico
          </span>
        </Link>

        <Link
          href="/"
          className="w-[136px] h-[42px] px-2 fixed bottom-[120px] flex items-center bg-white rounded-[10px] shadow-md shadow-blue-400"
        >
          <Image
            src="/atendimentotesoura.png"
            alt="Atendimento Tesoura"
            width={30} // Tamanho ajustável
            height={30} // Tamanho ajustável
            className="pr-1"
          />

          <span className="text-center text-black text-sm font-bold pt-2 whitespace-nowrap">
            Atendimento
          </span>
        </Link>
      </div>
    </>
  );
}
