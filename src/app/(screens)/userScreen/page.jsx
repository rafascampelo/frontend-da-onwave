import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import ButtonLogut from "@/components/ui/buttonLogut";

// const user = {
//   id: "kdfkasjklfsa",
//   firstName: "John",
//   lastName: "Watson",
//   email: "john.watson@onwave.com",
//   password: "0000",
//   born: "mm/dd/aa",
//   cpf: "563.656.789-98",
//   cellphone: "11 96897-4835",
//   role: "ADMIN",
//   unitId: "0",
//   adminId: null,
//   barbeshopId: "0",
//   firstLogin: false,
// };

export default async function UserProfile() {
  const user = await getServerSession(nextAuthOptions);

  return (
    <>
      <div className="min-h-screen flex flex-col ">
        {/* Link para voltar */}
        <div className="fixed top-5 left-3">
          <Link href="/homeScreen">
            <Image
              src="/voltar.png"
              alt="Onwave Logo"
              className="dark:invert pb-2  "
              width={32}
              height={32}
              priority
            />
          </Link>
        </div>

        {/* Conteúdo com scroll separado */}
        <div className="flex-1 mt-20 flex justify-center items-start overflow-y-auto pb-6">
          <div className="bg-white rounded-[17px] w-[90%] max-w-[850px] p-6 shadow-lg relative">
            {/* Título "Meu perfil" */}
            <span className="text-center text-[#5d5988] text-[28px] font-normal leading-[38px] block pb-3">
              Meu perfil
            </span>

            {/* Imagem do usuário */}
            <div className="flex justify-center">
              <Image width={75} height={80} src="/userbarb.png" alt="User" />
            </div>

            <div className="px-8">
              {/* Nome da barbearia */}
              <div className="flex justify-center items-center pb-1">
                <span className="text-slate-800 mt-3 text-lg font-semibold leading-tight tracking-tight">
                  {user.firstName} {user.lastName}
                </span>
              </div>
              {/* E-mail */}
              <div className="text-[#008fd7] pb-2 text-lg l leading-tight tracking-tight">
                {user.email}
              </div>
              {/* Celular */}
              <div>
                <span className="pb-2 text-lg font-medium leading-tight tracking-tight">
                  Contato:{" "}
                </span>
                <span className="text-slate-800 font-medium">
                  {user.cellphone}
                </span>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <button className="absolute right-5 top-5">
                  <Image
                    src="/editar.png"
                    alt="editarfinanças"
                    width={20}
                    height={20}
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
                <DialogHeader>
                  <DialogTitle>Atualize seu perfil</DialogTitle>
                  <DialogDescription>Escolha uma opção</DialogDescription>
                </DialogHeader>
                {/* mudar Celular */}

                <Dialog>
                  <DialogTrigger>
                    <Button className="bg-blue-600 hover:bg-blue-600 font-semibold  ">
                      Atualizar Contato
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
                    <DialogHeader>
                      <DialogTitle>Contato</DialogTitle>
                      <DialogDescription>
                        Atualize seu número para contato
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex gap-3 items-center">
                      <label htmlFor="cellphone">Celular</label>
                      <Input
                        type="text"
                        pattern="\d{2}\s9\d{4}-\d{4}"
                        placeholder="xx xxxxx-xxxx"
                      />
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

                {/* mudar senha */}
                <Dialog>
                  <DialogTrigger>
                    <Button className="px-6 bg-blue-600 hover:bg-blue-600 font-semibold  ">
                      Atualizar Senha
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
                    <DialogHeader>
                      <DialogTitle>Senha</DialogTitle>
                      <DialogDescription>Atualize sua senha</DialogDescription>
                    </DialogHeader>
                    <div className="flex gap-3 items-center">
                      <label htmlFor="cellphone">Senha</label>
                      <Input
                        type="password"
                        placeholder="Digite sua nova senha"
                      />
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

                {/* <Button
                    type="submit"
                    className="bg-blue-400 hover:bg-blue-600 font-semibold  "
                  >
                    Salvar
                  </Button> */}
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Voltar</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Endereço mostrado em uma div com truncamento e espaço reservado para imagem */}
            <div className="relative flex justify-center mt-4">
              <div className="w-[280px] h-[40px] bg-white border-2 border-blue-500 rounded-full pl-4 pr-10 flex items-center shadow-md overflow-hidden">
                <span className="text-black/60 text-[14px] font-medium truncate">
                  São Paulo Jardim América R.União 332, Apartamento 45, Bloco 2
                </span>
              </div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Image
                  src="/maps.png"
                  alt="Localização"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className="w-full flex justify-center py-5">
              <ButtonLogut />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
