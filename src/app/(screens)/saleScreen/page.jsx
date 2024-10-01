"use client";
import Image from "next/image";
import Link from "next/link";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerDemo() {
  const [date, setDate] = React.useState(new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export default function SaleScreen() {
  return (
    <>
      <div className="bg-blue-600 h-16 w-full relative items-center"></div>
      <div className="flex justify-center absolute top-4 w-full pt-2">
        <form className="w-[272px] h-[51px] bg-white rounded-[46px] flex items-center relative shadow-xl">
          <input
            type="search"
            placeholder="Nome do produto"
            className="w-full h-full bg-transparent rounded-[46px] pl-4 pr-12 outline-none"
          />
          <span className="absolute right-3 text-gray-500 cursor-pointer">
            <Image
              src="/pesquisa.png" // Substitua pelo caminho do seu ícone de lupa
              alt="Buscar"
              width={20}
              height={20}
            />
          </span>
        </form>
      </div>

      <div className="absolute top-24 left-3">
        <Link href="/homeScreen">
          <Image
            src="/voltar.png"
            alt="Voltar"
            className="dark:invert pb-2"
            width={32}
            height={32}
            priority
          />
        </Link>
      </div>

      <div className="flex justify-center items-center absolute top-32 w-full">
        <DatePickerDemo />
      </div>
      <div className="relative top-32 w-[350px] max-w-md items-center text-center mx-auto p-6 pb-2 bg-white rounded-lg shadow-md">
        <div className="flex-row flex items-center">
          {/* Ícone da Caixa */}
          <Image src="/caixabox.png" alt="Caixa Box" width={32} height={32} />

          {/* Nome do Produto */}
          <span className="text-lg text-left font-semibold px-8 top-5 text-black">
            $Produto
          </span>

          {/* Preço */}
          <span className="text-base text-right px-8 text-black top-5">
            R$20.00
          </span>
        </div>
        <table className="w-full text-center">
          <thead>
            <tr>
              <th className="px-8 py-3 text-left text-base font-bold tracking-tight text-gray-600">
                Unidade:
              </th>
              <th className="px-8 py-3 text-right text-base font-bold tracking-tight text-black">
                hhhh
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-8 py-3 text-left text-base font-semibold tracking-tight text-gray-600">
                Comissão:
              </td>
              <td className="px-8 py-3 text-right text-base font-semibold tracking-tight text-black">
                hhhhh
              </td>
            </tr>
            <tr>
              <td className="px-8 py-3 text-left text-base font-semibold tracking-tight text-gray-600">
                Pagamento:
              </td>
              <td className="px-8 py-3 text-right text-base font-semibold tracking-tight text-black">
                hhhh
              </td>
            </tr>
          </tbody>
        </table>

        {/* Espaçamento entre as tabelas */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* Tabela de Saldo Líquido e Gastos */}
        <table className="w-full text-center mt-6">
          <thead>
            <tr>
              <th className="py-3 px-8 text-left text-base font-normal tracking-tight text-gray-700">
                Saldo Líquido
              </th>
              <th className="py-3 px-8 text-right text-base font-normal tracking-tight text-blue-500">
                R$ 1.000
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-8 text-left text-base font-normal tracking-tight text-gray-700">
                Gastos
              </td>
              <td className="py-3 px-8 text-right text-base font-normal tracking-tight text-gray-500">
                R$ 10.000
              </td>
            </tr>

            {/* Linha divisória */}
            <tr>
              <td className="border-t border-gray-300" colSpan="2"></td>
            </tr>

            {/* Resultado final */}
            <tr>
              <td className="py-3 px-8 text-left text-base font-normal tracking-tight text-gray-700">
                Resultado
              </td>
              <td className="py-3 px-8 text-right text-base font-normal tracking-tight text-red-500">
                R$ -9000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
