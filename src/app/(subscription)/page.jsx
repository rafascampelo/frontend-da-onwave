import Image from "next/image";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
} from "@radix-ui/react-alert-dialog";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserRoundPlus } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import EditEmployee from "@/components/ui/editEmployee";
export default function MyEmployeesScreen() {
  const funcionarios = [
    {
      id: 1,
      nome: "Cleyton",
      fixo: 200,
      comissaoProduto: 3,
      comissaoCorte: 4,
      contato: "11 96956-8931",
    },
    {
      id: 2,
      nome: "Felipe",
      fixo: 200,
      comissaoProduto: 3,
      comissaoCorte: 40,
      contato: "11 96956-8931",
    },
    {
      id: 3,
      nome: "Rogerio",
      fixo: 200,
      comissaoProduto: 30,
      comissaoCorte: 40,
      contato: "11 96956-8931",
    },
    {
      id: 4,
      nome: "Paulo",
      fixo: 200,
      comissaoProduto: 2,
      comissaoCorte: 4,
      contato: "11 96956-8931",
    },
  ];

  return (
    <div className="flex flex-col gap-2 ">
      <div className="h-20 w-full bg-blue-700  flex items-center justify-center">
        <div className="relative w-[330px] h-[50px] flex items-center justify-center top-[50px] bg-white shadow-lg rounded-lg">
          <span className="text-lg font-semibold text-black text-center">
            Meus Funcionários
          </span>
        </div>
      </div>
      <div className="pt-10 flex justify-center">
        <Carousel className="w-[65%] max-w-xs flex flex-col ">
          <CarouselContent>
            {funcionarios.map((funcionário) => (
              <CarouselItem key={funcionário.id}>
                <Card className="p-4 pt-0">
                  <CardHeader className="px-0 pb-2 relative">
                    <CardTitle>{funcionário.nome}</CardTitle>
                    <EditEmployee id={funcionário.id} />
                  </CardHeader>
                  <div className="">
                    <CardContent className="pt-2 px-0 flex flex-col aspect-square items-center w-full">
                      <div className="flex flex-col gap-1 bg-blue-100/50 rounded-lg border-2 border-blue-600 w-full p-2">
                        <div className="text-left flex flex-col w-full">
                          <h3 className=" text-gray-700 text-xl font-semibold">
                            Contato:
                          </h3>
                          <div className="w-full flex justify-between">
                            <span className="text-sm">Celular</span>
                            <span className="text-sm">
                              +55 {funcionário.contato}
                            </span>
                          </div>
                        </div>
                        <hr className="bg-blue-600 h-[2px] mt-3" />
                        <div className="flex flex-col items-start w-full">
                          <h3 className="text-gray-700 text-xl font-semibold">
                            Pagamento:
                          </h3>

                          <div className="w-full flex justify-between">
                            <span>Fixo</span>
                            <span>R$ {funcionário.fixo.toFixed(2)}</span>
                          </div>
                        </div>
                        <hr className="bg-blue-600 h-[2px] mt-3" />
                        <div className="flex flex-col items-start w-full">
                          <h3 className="text-gray-700 text-xl font-semibold">
                            Comissões:
                          </h3>
                          <div className="w-full flex justify-between">
                            <span>Corte</span>
                            <span>{funcionário.comissaoCorte.toFixed(1)}%</span>
                          </div>
                        </div>
                        <div className="w-full flex justify-between">
                          <span>Produto</span>
                          <span>{funcionário.comissaoProduto.toFixed(1)}%</span>
                        </div>
                      </div>
                    </CardContent>

                    <div className="flex justify-center">
                      <AlertDialog>
                        <AlertDialogTrigger className="bg-slate-100 shadow-md h-10 w-10 rounded-full flex justify-center items-center">
                          <Image
                            src="/lixeira.png"
                            alt="editarfinanças"
                            width={20}
                            height={20}
                          />
                        </AlertDialogTrigger>
                        <AlertDialogContent className="w-11/12 flex flex-col justify-between rounded-lg">
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Excluir Funcionário
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              Tem certeza?
                              <br /> Essa ação não pode ser revertida
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter className="flex flex-row justify-evenly">
                            <AlertDialogCancel className="bg-primary text-primary-foreground h-10 rounded-md px-3 hover:bg-primary/90 ">
                              Cancelar
                            </AlertDialogCancel>
                            <AlertDialogAction>
                              <div>
                                <Button variant="destructive">Confirmar</Button>
                              </div>
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex items-center justify-center">
        <Button className="bg-blue-700 hover:bg-blue-800">
          <Link href="/createEmployee" className="flex items-center gap-2">
            Novo funcionário
            <UserRoundPlus />
          </Link>
        </Button>
      </div>
    </div>
  );
}
