import Image from "next/image";
import Input from "postcss/lib/input";
import RootLayout from "./layout"; 
import Link from "next/link";

export default function Home() {
  

  return (
    <main class=" mt-8 flex  flex-col items-center  h-screen bg-gradient-to-b" >


<div className=" -mx-10 w-[260px] h-[400px] bg-white backdrop-blur-[50px] content-start place-items-center
 rounded-3xl shadow gap-2.5 shadow-gray-500 leading-[14px] grid ">

        <div className="mt-2 mb-0">
        <Image
          src="/welcome-image.png"
          alt="img de entrada"
          className=""
          width={154}
          height={132}
          priority/>
        </div>

        <span className="text-[#1f41bb] font-bold text-center text-xl ">A Onwave ...</span>
        <span className=" text-center text-black text-xs ">Explore all the existing job roles based on your interest and study major</span>



<Link href="/sign_in" 
 class="mt-10 text-center text-white text-xl font-bold  h-[40px] w-[100px] 
 justify-center items-center flex 
px-8 py-4 bg-[#0f1cf3] rounded shadow gap-2.5 leading-[14px] "> 
Login </Link>

</div>
<Image
          src="/logoonwave.png"
          alt="logo onwave"
          className=" mt-10"
          width={64}
          height={64}
          priority/>

 </main>

        );
        }