import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-blue-500/50  flex  flex-col items-center w-screen h-screen bg-gradient-to-b justify-center">
        <div
          className=" w-[300px] h-[560px] bg-white backdrop-blur-[50px] content-start place-items-center 
 rounded-3xl shadow gap-2.5 shadow-gray-500 leading-[14px] grid "
        >
          <div className="">
            <Image
              src="/welcome-image.png"
              alt="img de entrada"
              className=""
              width={154}
              height={132}
              priority
            />
          </div>

          <span className="mt-10 text-[#1f41bb] font-bold text-center text-xl ">
            A Onwave...
          </span>
          <span className=" mx-5 text-black text-sm text-justify ">
            É o software responsável pelo gerenciamento completo do seu negócio
            de barbearia! Aqui o enfoque total é direcionado a atender suas
            demandas com responsabilidade e atenção. Assim, podemos ser seu app
            de gestão fácil na palma da mão!
          </span>

          <Link
            href="/sign_in"
            class="mt-20 text-center text-white text-xl font-bold  h-[40px] w-[100px] 
 justify-center items-center flex 
px-8 py-4 bg-[#0f1cf3] rounded shadow gap-2.5 leading-[14px] "
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
