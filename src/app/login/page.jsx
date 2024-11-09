import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/ui/LoginForm";

export default function Login() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className=" w-[300px] h-[600px] bg-white/50 backdrop-blur-[50px] items-center
 rounded-3xl shadow gap-2.5 shadow-gray-500 leading-[14px] flex flex-col justify-center "
      >
        <Image
          src="/logoonwave.png"
          alt="Onwave Logo"
          className="dark:invert"
          width={200}
          height={200}
          priority
        />

        <LoginForm />

        <Link
          href=""
          className=" w-[232px] h-[25px] text-center text-black/80 text-[15px] font-bold "
        >
          Esqueci minha senha
        </Link>

        {/* <div className=" mt-10 w-[232px] h-[51px] text-center">
          <span className="text-black text-[15px] font-medium ">
            Desculpe, sua
          </span>
          <span className="text-[#ff0000] text-[15px] font-medium ">
            {" "}
            senha
          </span>
          <span className="text-black text-[15px] font-medium "> ou </span>
          <span className="text-[#ff0000] text-[15px] font-medium ">login</span>
          <span className="text-black text-[15px] font-medium ">
            {" "}
            está errado.
          </span>
          <span className="text-black text-[15px] font-medium ">
            {" "}
            por favor tente novamente.
          </span>
        </div> */}
      </div>
    </div>
  );
}
