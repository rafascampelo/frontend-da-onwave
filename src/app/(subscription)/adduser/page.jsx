import Image from "next/image";
import Input from "postcss/lib/input";
import Link from "next/link";
import RootLayout from "../../layout";


export default function adduser() {

    return(
    
    <main className="flex flex-col h-screen bg-gradient-to-b ">

<div className="left-auto">
            <Image
              src="/logoonwave.png"
              alt="Onwave Logo"
              className="dark:invert"
              width={75}
              height={60}
              priority/>
</div>
<div class="items-center flex-col flex justify-between">

<div class=" mt-10 w-[232px] h-[51px] text-center">
        <span class="text-black text-[13px] font-bold ">Desculpe, sua</span>
        <span class="text-[#ff0000] text-[13px] font-bold "> senha</span>
        <span class="text-black text-[13px] font-bold "> ou </span>
        <span class="text-[#ff0000] text-[13px] font-bold ">login</span>
        <span class="text-black text-[13px] font-bold ">  está errado.</span>
        <span class="text-black text-[13px] font-bold "> por favor tente novamente.</span>
      </div>

<form class="mt-5">

<input
  id="Endereço principal"
  type="text"
  placeholder="Endereço da unidade principal" 
  class=" mt-8 w-[250px] h-[38px] bg-white rounded-[19px]  text-black/50 text-[15px] font-bold  pl-10 pr-10
          shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"

>
</input>

<input
id="logar"
type="submit" 
placeholder="Entrar"
class="mt-10 h-[50px] flex
  px-8 py-4 bg-[#0f1cf3] rounded shadow gap-2.5 text-white text-sm font-bold  leading-[14px]">
</input>



</form>
</div>
</main>
    );
};