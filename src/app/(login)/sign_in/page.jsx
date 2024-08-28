import Image from "next/image";
import Input from "postcss/lib/input";
import RootLayout from "../../layout"; 
import Link from "next/link";

export default function login() {
  

  return (
 
    <main className="flex flex-col items-center justify-start h-screen bg-gradient-to-b ">
           
            <Image
              src="/logoonwave.png"
              alt="Onwave Logo"
              className="dark:invert"
              width={200}
              height={200}
              priority/>
         
            <div class="mt-0">
        <form class="flex items-center justify-center flex-col">
          <input
            id="email"
            type="text"
            placeholder="Email"
            class=" w-[250px] h-[38px] bg-white/50 rounded-[19px]  text-black/50 text-[15px] font-bold  pl-10 pr-10
            shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/>
 
          <input
            id="senha"
            type="password"
            placeholder="Senha"
            class=" mt-3 w-[250px] h-[38px] bg-white/50 rounded-[19px]  text-black/50 text-[15px] font-bold  pl-10 pr-10
            shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"/>
 
        </form>

      </div>

     <a href="https://www.remove.bg/pt-br/upload" class=""> <div class="mt-2 w-[232px] h-[25px] text-center text-black/70 text-[13px] font-bold ">
      Esqueci a minha senha</div>
      </a>

      <div class=" mt-10 w-[232px] h-[51px] text-center">
        <span class="text-black text-[13px] font-semibold ">Desculpe, sua</span>
        <span class="text-[#ff0000] text-[13px] font-semibold "> senha</span>
        <span class="text-black text-[13px] font-semibold "> ou </span>
        <span class="text-[#ff0000] text-[13px] font-semibold ">login</span>
        <span class="text-black text-[13px] font-semibold ">  está errado.</span>
        <span class="text-black text-[13px] font-semibold "> por favor tente novamente.</span>
      </div>

      

   
</main>


  );
};




