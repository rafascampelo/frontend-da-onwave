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
<div className="grid grid-cols-2 h-screen ">
<div className="-mx-10 w-[300px] h-[450px] bg-white backdrop-blur-[50px] content-start place-items-center
 rounded-3xl shadow gap-2.5 shadow-gray-500 leading-[14px] grid ">

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

    
  <Link href="/adduser" 
 class="mt-5 text-center text-white text-sl font-bold h-[40px] w-[150px] 
 justify-center items-center flex 
px-8 py-4 bg-[#0f1cf3] rounded shadow gap-2.5 leading-[14px] "> 
Pronto </Link>

</form>
</div>

<div className="-mx-10 w-[300px] h-[450px] bg-white backdrop-blur-[50px] content-start place-items-center
 rounded-3xl shadow gap-2.5 shadow-gray-500 leading-[14px] grid ">
    
  </div>



</div>



</main>
    );
};