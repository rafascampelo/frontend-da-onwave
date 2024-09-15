import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="w-[320px] h-auto bg-white backdrop-blur-[50px] p-8 rounded-3xl shadow-lg flex flex-col items-center">
          <Image
            src="/logoonwave.png"
            alt="Onwave Logo"
            className="dark:invert mb-8"
            width={150}
            height={150}
          />

          <Link
            href="/register"
            className="text-center text-white text-lg font-bold h-[45px] w-[200px] 
            flex justify-center items-center bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition-colors"
          >
            Nova Barbearia
          </Link>

          <Link
            href="/"
            className="mt-6 text-center text-white text-lg font-bold h-[45px] w-[200px] 
            flex justify-center items-center bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition-colors"
          >
            Ver Clientes
          </Link>
        </div>
      </div>
    </>
  );
}
