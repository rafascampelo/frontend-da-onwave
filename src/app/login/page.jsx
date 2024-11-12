import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/ui/LoginForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

        <Dialog>
          <DialogTrigger
            className=" w-[232px] h-[25px] text-center text-black/80 text-[15px]
        font-bold "
          >
            Esqueci minha senha
          </DialogTrigger>
          <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
            <DialogHeader>
              <DialogTitle>Senha</DialogTitle>
              <DialogDescription>Atualize sua senha</DialogDescription>
            </DialogHeader>
            <div className="flex gap-3 items-center">
              <label htmlFor="cellphone">Senha</label>
              <Input type="password" placeholder="Digite sua nova senha" />
            </div>
            <DialogFooter className=" w-full">
              <div className="flex justify-end">
                <Button className="bg-blue-600 hover:bg-blue-700 font-semibold">
                  Salvar
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
