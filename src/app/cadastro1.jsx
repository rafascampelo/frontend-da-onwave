import Image from "next/image";
import Input from "postcss/lib/input";

export default function Home() {
  

  return (
<main>
<div className="mt-8 left-full">
            <Image
              src="/logoonwave.png"
              alt="Onwave Logo"
              className="dark:invert"
              width={75}
              height={60}
              priority/>
            </div>
    

            <div className="w-[169px] h-[82px] p-4 rounded-[5px] justify-center items-center inline-flex">
    <div className="py-0.5 justify-center items-center flex">
        <div className="px-8 py-4 bg-[#3742fa] rounded shadow justify-center items-center gap-2.5 flex">
            <div className="text-white text-sm font-bold font-['Lato'] leading-[14px]">Novo usuário</div>
        </div>
    </div>
    <div className="pb-1 justify-center items-center flex">
        <div className="px-8 py-4 bg-[#0f1cf3] rounded shadow justify-center items-center gap-2.5 flex">
            <div className="text-white text-sm font-bold font-['Lato'] leading-[14px]">Novo usuário</div>
        </div>
    </div>
</div>
    </main>
  );



}