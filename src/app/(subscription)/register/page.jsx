import Image from "next/image";
import Input from "postcss/lib/input";
import Link from "next/link";
import RootLayout from "../../layout";


export default function register() {

    return(
    
    <main className="  flex flex-col items-center h-screen bg-gradient-to-b m">

            <Image
              src="/logoonwave.png"
              alt="Onwave Logo"
              className="dark:invert"
              width={75}
              height={60}
              priority/>

<div className="-mx-10 w-[300px] h-[560px] bg-white backdrop-blur-[50px] content-start place-items-center
 rounded-3xl shadow gap-2.5 shadow-gray-500 leading-[14px] grid ">

<form class="justify-between items-center flex flex-col mx-auto ">

<span class="mt-5 text-center text-blue-500 text-[13px] font-bold ">Comece adicionando as suas informações pincipais!</span>
    <input 
    id="Nome da barbearia"
    type="text"
    placeholder="Nome da barbearia" 
    class=" mt-3 w-[250px] h-[38px] bg-white rounded-[19px]  text-black/50 text-[15px] font-bold  pl-10 pr-10
            shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
   
    </input>

    <input 
    id="CNPJ OU CPF"
    type="text"
    placeholder="CNPJ/CPF" 
    class=" mt-3 w-[250px] h-[38px] bg-white rounded-[19px]  text-black/50 text-[15px] font-bold  pl-10 pr-10
            shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
   
    </input>

    <input 
    id="Email"
    type="text"
    placeholder="Email" 
    class=" mt-3 w-[250px] h-[38px] bg-white rounded-[19px]  text-black/50 text-[15px] font-bold  pl-10 pr-10
            shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
   
    </input>

    
    <input 
    id="Senha"
    type="password"
    placeholder="Senha" 
    class=" mt-3 w-[250px] h-[38px] bg-white rounded-[19px]  text-black/50 text-[15px] font-bold  pl-10 pr-10
            shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
   
    </input>

    <input 
    id="Data inauguração"
    type="date"
    placeholder="Data de inauguração" 
    class=" mt-3 w-[250px] h-[38px] bg-white rounded-[19px]  text-black/50 text-[15px] font-bold  pl-10 pr-10
            shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
   
    </input>

    <input 
    id="Celular"
    type="text"
    placeholder="Celular" 
    class=" mt-3 w-[250px] h-[38px] bg-white rounded-[19px]  text-black/50 text-[15px] font-bold  pl-10 pr-10
            shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
   
    </input>

    <span class="mt-3 mb-3 text-center text-blue-500  text-[13px] font-bold ">Onde está situada a unidade principal?</span>
    <input
  id="Endereço principal"
  type="text"
  placeholder="Endereço" 
  class=" w-[250px] h-[38px] bg-white rounded-[19px]  text-black/50 text-[15px] font-bold  pl-10 pr-10
          shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"

>
</input>


    <input
id="logar"
type="submit" 
placeholder="Pronto"
class="mt-7 h-[50px] flex
  px-8 py-4 bg-[#0f1cf3] rounded shadow gap-2.5 text-white text-sm font-bold  leading-[14px]">
</input>

  

</form>
</div>








</main>
    );
};