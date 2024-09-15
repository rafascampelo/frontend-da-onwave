import Image from "next/image";
import Link from "next/link";

export default function homeScreen() {
  return (
    <>
      <div className="h-20 w-full bg-blue-700 rounded-b-md flex items-center justify-center">
        <Link href="/UserProfile">
          <div className="fixed top-10 right-0 flex items-center bg-white shadow-lg p-3 rounded-lg">
            <Image
              src="/userbarb.png"
              alt="User"
              className="w-12 h-12 rounded-full"
              width={48}
              height={48}
            />
            <div className="ml-3 text-lg font-bold text-gray-800">
              $nomeBarboooooo
            </div>
          </div>
        </Link>
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
          href="/history"
          passHref
          className="w-[150px] h-[43px] px-7 fixed bottom-[190px] flex items-center bg-white rounded-full shadow-lg"
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
          className="w-[150px] h-[43px] px-2 fixed bottom-[120px] flex items-center bg-white rounded-full shadow-lg"
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
