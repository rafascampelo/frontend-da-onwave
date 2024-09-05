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
            class=" w-[250px] h-[38px] bg-white shadow-gray-500 rounded-[19px]  text-black text-[15px] font-bold  pl-10 pr-10
            shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          <input
            id="senha"
            type="password"
            placeholder="Senha"
            class=" mt-3 w-[250px] h-[38px] bg-white shadow-gray-500 rounded-[19px]  text-black text-[15px] font-bold  pl-10 pr-10
            shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </form>

        <a
          href="https://www.remove.bg/pt-br/upload"
          class=" w-[232px] h-[25px] text-center text-black/80 text-[13px] font-bold "
        >
          Esqueci a minha senha
        </a>

        <div class=" mt-10 w-[232px] h-[51px] text-center">
          <span class="text-black text-[13px] font-semibold ">
            Desculpe, sua
          </span>
          <span class="text-[#ff0000] text-[13px] font-semibold "> senha</span>
          <span class="text-black text-[13px] font-semibold "> ou </span>
          <span class="text-[#ff0000] text-[13px] font-semibold ">login</span>
          <span class="text-black text-[13px] font-semibold ">
            {" "}
            está errado.
          </span>
          <span class="text-black text-[13px] font-semibold ">
            {" "}
            por favor tente novamente.
          </span>
        </div>

        <Link
          href="/dashboard"
          class="mt-5 text-center text-white text-sl font-bold h-[40px] w-[150px] 
 justify-center items-center flex 
px-8 py-4 bg-[#0f1cf3] rounded shadow gap-2.5 leading-[14px] "
        >
          Entrar
        </Link>
        <br></br>
        <Link href="/homeScreen"> vem cá po</Link>
      </div>
    </>
  );
}
