import Image from "next/image";
import Input from "postcss/lib/input";
import Link from "next/link";
import RootLayout from "../../layout";


export default function dashboard() {

    return(
    
      <main class=" mt-8 flex  flex-col items-center  h-screen bg-gradient-to-b" >

<div className="-mx-10 w-[260px] h-[400px] bg-white backdrop-blur-[50px] content-start place-items-center
 rounded-3xl shadow gap-2.5 shadow-gray-500 leading-[14px] grid ">

<Image
              src="/logoonwave.png"
              alt="Onwave Logo"
              className="dark:invert"
              width={75}
              height={60}
              priority/>


<Link href="/register" 
 class="mt-16 text-center text-white text-sl font-bold  h-[40px] w-[150px] 
 justify-center items-center flex 
px-8 py-4 bg-[#0f1cf3] rounded shadow gap-2.5 leading-[14px] "> 
Novo user </Link>

  <Link href="/" 
 class="mt-5 text-center text-white text-sl font-bold h-[40px] w-[150px] 
 justify-center items-center flex 
px-8 py-4 bg-[#0f1cf3] rounded shadow gap-2.5 leading-[14px] "> 
Ver user </Link>
</div>

</main>
    );
};