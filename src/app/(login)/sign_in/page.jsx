import Image from "next/image";
import Link from "next/link";

export default function login() {
  return (
    <>
      <div
        className=" w-[300px] h-[600px] bg-white/50 backdrop-blur-[50px] items-center
 rounded-3xl shadow gap-2.5 shadow-gray-500 leading-[14px] flex flex-col justify-center "
      >
        <Image
          src="/logoonwave.png"
          alt="Onwave Logo"
          className="dark:invert"
          width={200}
          height={200}
          priority
        />

        <form className=" items-center px-8">
          <input
            id="email"
            type="text"
            placeholder="Email"
            class=" w-[250px] h-[45px] bg-white shadow-gray-500 rounded-[19px]  text-black text-[18px] font-bold  pl-10 pr-10
            shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          <input
            id="senha"
            type="password"
            placeholder="Senha"
            class=" mt-3 w-[250px] h-[45px] bg-white shadow-gray-500 rounded-[19px]  text-black text-[18px] font-bold  pl-10 pr-10
            shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </form>

        <a
          href="https://www.remove.bg/pt-br/upload"
          class=" w-[232px] h-[25px] text-center text-black/80 text-[15px] font-bold "
        >
          Esqueci a minha senha
        </a>

        <div class=" mt-10 w-[232px] h-[51px] text-center">
          <span class="text-black text-[15px] font-medium ">Desculpe, sua</span>
          <span class="text-[#ff0000] text-[15px] font-medium "> senha</span>
          <span class="text-black text-[15px] font-medium "> ou </span>
          <span class="text-[#ff0000] text-[15px] font-medium ">login</span>
          <span class="text-black text-[15px] font-medium "> está errado.</span>
          <span class="text-black text-[15px] font-medium ">
            {" "}
            por favor tente novamente.
          </span>
        </div>

        <Link
          href="/dashboard"
          className="w-[232px] h-[55px] bg-blue-600 text-white font-bold rounded-full shadow-md hover:bg-blue-700 transition-colors flex justify-center items-center"
        >
          Entrar
        </Link>

        <br></br>
        <Link href="/homeScreen"> vem cá po</Link>
      </div>
    </>
  );
}
