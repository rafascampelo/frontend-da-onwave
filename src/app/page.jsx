import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="w-full max-w-[calc(100%-50px)] h-[560px] bg-white/90 backdrop-blur-[50px] rounded-3xl shadow-lg shadow-gray-500 flex flex-col items-center p-5">
          <div className="flex flex-col items-center">
            <Image
              src="/welcome-image.png"
              alt="img de entrada"
              width={154}
              height={132}
              priority
            />
          </div>

          <span className="mt-10 text-[#1f41bb] font-bold text-center text-xl">
            A Onwave...
          </span>
          <span className="mt-5 px-5 text-black text-sm text-justify">
            É o software responsável pelo gerenciamento completo do seu negócio
            de barbearia! Aqui o enfoque total é direcionado a atender suas
            demandas com responsabilidade e atenção. Assim, podemos ser seu app
            de gestão fácil na palma da mão!
          </span>

          <Link
            href="/sign_in"
            className="mt-auto text-center text-white text-xl font-bold h-[40px] w-[100px] flex justify-center items-center bg-[#0f1cf3] rounded shadow"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
