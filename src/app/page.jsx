import Image from "next/image";
import Input from "postcss/lib/input";

export default function Home() {
  

  return (

    <main className="flex flex-col items-center justify-start h-screen bg-gradient-to-b ">
            <div className="mt-8">
            <Image
              src="/logoonwave.png"
              alt="Onwave Logo"
              className="dark:invert"
              width={154}
              height={132}
              priority/>
            </div>
            <div class="mt-0">
        <form className="flex items-center justify-center flex-col">
          <input
            id="email"
            type="text"
            placeholder="Email"
            class=" w-[250px] h-[38px] bg-white rounded-[19px]  text-black/50 text-[15px] font-bold font-['Judson'] pl-10 pr-10
            shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/>
 
          <input
            id="senha"
            type="password"
            placeholder="Senha"
            class=" mt-3 w-[250px] h-[38px] bg-white rounded-[19px]  text-black/50 text-[15px] font-bold font-['Judson'] pl-10 pr-10
            shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/>
 
        </form>

      </div>

     <a href="https://www.remove.bg/pt-br/upload" class=""> <div class="mt-2 w-[232px] h-[25px] text-center text-black/70 text-[13px] font-bold font-['Judson']">
      Esqueci a minha senha</div>
      </a>

      <div class=" mt-10 w-[232px] h-[51px] text-center">
        <span class="text-black text-[13px] font-bold font-['Judson']">Desculpe, sua</span>
        <span class="text-[#ff0000] text-[13px] font-bold font-['Judson']"> senha</span>
        <span class="text-black text-[13px] font-bold font-['Judson']"> ou </span>
        <span class="text-[#ff0000] text-[13px] font-bold font-['Judson']">login</span>
        <span class="text-black text-[13px] font-bold font-['Judson']"> está errado<br />por favor tente novamente.</span>
      </div>

<button class="mt-20 h-[50px] pb-1 justify-center items-center inline-flex">
<div class="px-8 py-4 bg-[#0f1cf3] rounded shadow justify-center items-center gap-2.5 flex">
        <div class="text-white text-sm font-bold font-['Judson'] leading-[14px]">Entrar</div>
    </div>
 
</button>
      </main>
  );
}
