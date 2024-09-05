import Image from "next/image";
import Link from "next/link";

export default function dashboard() {
  return (
    <>
      <div
        className=" w-[300px] h-[400px] bg-white backdrop-blur-[50px] content-start place-items-center
 rounded-3xl shadow gap-2.5 shadow-gray-500 leading-[14px] grid "
      >
        <Image
          src="/logoonwave.png"
          alt="Onwave Logo"
          className="dark:invert"
          width={150}
          height={150}
        />

        <Link
          href="/register"
          class=" text-center text-white text-sl font-bold  h-[40px] w-[190px] 
 justify-center items-center flex 
px-8 py-4 bg-[#0f1cf3] rounded shadow gap-2.5 leading-[14px] "
        >
          Nova Barbearia
        </Link>

        <Link
          href="/"
          class=" mt-5 text-center text-white text-sl font-bold h-[40px] w-[190px] 
 justify-center items-center flex 
px-8 py-4 bg-[#0f1cf3] rounded shadow gap-2.5 leading-[14px] "
        >
          Ver Clientes
        </Link>
      </div>
    </>
  );
}
