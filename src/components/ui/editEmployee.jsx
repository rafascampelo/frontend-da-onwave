import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";
import { Input } from "./input";

export default function EditEmployee(id) {
  // console.log(id);
  return (
    <Dialog>
      <DialogTrigger className="bg-slate-100 shadow-md h-10 w-10 rounded-full absolute right-0 top-2 flex justify-center items-center">
        <Image src="/editar.png" alt="editarfinanças" width={20} height={20} />
      </DialogTrigger>
      <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
        <DialogHeader>
          <DialogTitle>Atualize os dados do funcionário</DialogTitle>
          <DialogDescription>
            Só é possivel atualizar os dados de pagamento e comissão
          </DialogDescription>
        </DialogHeader>
        {/* fixo */}
        <Dialog>
          <DialogTrigger>
            <Button className="min-w-[185px] bg-blue-600 hover:bg-blue-600 text-slate-200 font-semibold px-6">
              Pagamento Fixo
            </Button>
          </DialogTrigger>
          <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
            <DialogHeader>
              <DialogTitle>Atualize o pagamento fixo</DialogTitle>
              <DialogDescription>Digite o valor em reais</DialogDescription>
            </DialogHeader>
            <Input type="number"></Input>
            <DialogFooter className=" w-full">
              <div className="flex justify-end">
                <Button className="bg-blue-600 hover:bg-blue-700 font-semibold">
                  Salvar
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* Comissão corte */}
        <Dialog>
          <DialogTrigger>
            <Button className="w-[185px] bg-blue-600 hover:bg-blue-600 text-slate-200 font-semibold px-6">
              Comissão de corte
            </Button>
          </DialogTrigger>
          <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
            <DialogHeader>
              <DialogTitle>Atualize a comissão de corte</DialogTitle>
              <DialogDescription>
                O valor digitado será usado em %
              </DialogDescription>
            </DialogHeader>
            <Input type="number"></Input>
            <DialogFooter className=" w-full">
              <div className="flex justify-end">
                <Button className="bg-blue-600 hover:bg-blue-700 font-semibold">
                  Salvar
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* comissão por produto */}
        <Dialog>
          <DialogTrigger>
            <Button className="w-[185px] bg-blue-600 hover:bg-blue-600 text-slate-200 font-semibold px-4">
              Comissão de produto
            </Button>
          </DialogTrigger>
          <DialogContent className="flex items-center justify-center flex-col transition-all duration-300 ease-in-out w-11/12 rounded-lg">
            <DialogHeader>
              <DialogTitle>Atualize a comissão de produto</DialogTitle>
              <DialogDescription>
                O valor digitado será usado em %
              </DialogDescription>
            </DialogHeader>
            <Input type="number"></Input>
            <DialogFooter className=" w-full">
              <div className="flex justify-end">
                <Button className="bg-blue-600 hover:bg-blue-700 font-semibold">
                  Salvar
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <DialogFooter>
          <DialogClose>
            <div>
              <Button className="text-slate-200" variant="destructive">
                Fechar
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
