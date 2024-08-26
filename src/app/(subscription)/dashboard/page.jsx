import Image from "next/image";
import Input from "postcss/lib/input";
import Link from "next/link";
import RootLayout from "../../layout";


export default function dashboard() {

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
<Link href="/register" class=" mt-20  w-[120px] h-[60px] p-4 rounded-[5px] justify-center items-center inline-flex
py-0.5 bg-[#3742fa] hover:bg-[#3742fa] active:bg-blue-600 text-white text-xs text-center font-bold leading-[20px]  "> 
  Novo usuário</Link>

  <Link href="/" class=" mt-20  w-[120px] h-[60px] p-4 rounded-[5px] justify-center items-center inline-flex
py-0.5 bg-[#3742fa] hover:bg-[#3742fa] active:bg-blue-600 text-white text-xs text-center font-bold leading-[20px]  "> 
  Ver usuário</Link>
</div>
</main>
    );
};