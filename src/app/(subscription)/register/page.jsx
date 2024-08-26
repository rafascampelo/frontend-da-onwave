import Image from "next/image";
import Input from "postcss/lib/input";
import Link from "next/link";
import RootLayout from "../../layout";


export default function register() {

    return(
    
    <main className=" flex-col justify-start  h-full bg-gradient-to-b ">

<div className="left-auto">
            <Image
              src="/logoonwave.png"
              alt="Onwave Logo"
              className="dark:invert"
              width={75}
              height={60}
              priority/>
</div>

<div className="bg-[#0984e3] text-center text-white text-2xl font-bold">Aqui o cadastro é fácil</div>
<div className="mt-2 text-center text-black text-[13px] font-bold">Adicione apenas informações reais</div>


<form class="justify-between items-center flex flex-col ">

    <input 
    id="Nome da barbearia"
    type="text"
    placeholder="Nome da barbearia" 
    class=" mt-8 w-[250px] h-[38px] bg-white rounded-[19px]  text-black/50 text-[15px] font-bold  pl-10 pr-10
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

    <Link href="/adduser" class="mt-10 h-[50px]  justify-center items-center flex
  px-8 py-4 bg-[#0f1cf3] rounded shadow gap-2.5 text-white text-sm font-bold  leading-[14px] "> 
  Entrar </Link>
</form>

</main>
    );
};