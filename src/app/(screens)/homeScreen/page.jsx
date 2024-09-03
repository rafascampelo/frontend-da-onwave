import Image from "next/image";
import Link from "next/link";

export default function homeScreen() {
  return (
    <>
      <div className="fixed right-0 top-[60px] flex items-center bg-white  shadow-lg p-2 pr-5 rounded-md">
        <div className="font-bold text-lg text-gray-800 whitespace-nowrap">
          $nomeBarboooooo
        </div>
        <img src="/userbarb.png" alt="User" className="w-15 h-10 pr-1 pl-2" />
      </div>

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
          href="/"
          className="w-[150px] h-[43px]  px-2 fixed bottom-[190px] flex items-center bg-white rounded-[10px] shadow-lg"
        >
          <Image
            src="/historicobook.png"
            alt="Historico"
            width={45} // Tamanho ajustável
            height={45} // Tamanho ajustável
            className="pl-2 pr-2"
          />
          
          <span className="text-center text-black text-sm font-bold pt-2 whitespace-nowrap ">
            Histórico
          </span>
        </Link>

        <Link
          href="/"
          className="w-[150px] h-[43px] px-2 fixed bottom-[120px] flex items-center bg-white rounded-[10px] shadow-lg"
        >
          <Image
            src="/atendimentotesoura.png"
            alt="Atendimento Tesoura"
            width={45} // Tamanho ajustável
            height={45} // Tamanho ajustável
            className="pl-2 pr-2"
          />
          
          <span className="text-center text-black text-sm font-bold pt-2 whitespace-nowrap ">
          Atendimento
          </span>
        </Link>
</div>
    </>
  );
}
