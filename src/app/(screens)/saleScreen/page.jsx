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
const ProdutosTable = () => {
    // Dados fictícios para exibição
    const produtos = [
      {
        produto: "Produto A",
        valor: "R$ 50,00",
        vendidos: "50",
        barbeiros: ["Barbeiro 1", "Barbeiro 2"],
        comissaoBarbeiro: "R$ 10,00",
      },
      {
        produto: "Produto B",
        valor: "R$ 70,00",
        vendidos: "30",
        barbeiros: ["Barbeiro 1", "Barbeiro 3"],
        comissaoBarbeiro: "R$ 15,00",
      },
      {
        produto: "Produto C",
        valor: "R$ 60,00",
        vendidos: "40",
        barbeiros: ["Barbeiro 2", "Barbeiro 3"],
        comissaoBarbeiro: "R$ 12,00",
      },
    ];}
export default function Produtos(){ 

  
    return (
      <div className="flex justify-center items-center pt-[30px]">
        <div className="bg-blue-400 rounded-lg shadow-lg max-w-[calc(100%-40px)] w-[600px] h-[70vh] overflow-y-auto p-6">
          <h2 className="text-2xl font-bold text-center text-white mb-4">Produtos</h2>
          {produtos.length === 0 ? (
            <p className="text-center text-gray-200">
              Nenhum produto registrado.
            </p>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-2 text-white">Produto</th>
                  <th className="py-2 text-white">Valor</th>
                  <th className="py-2 text-white">Vendidos</th>
                  <th className="py-2 text-white">Barbeiros Participantes</th>
                  <th className="py-2 text-white">Comissão</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((item, index) => (
                  <tr key={index} className="border-b border-transparent hover:bg-blue-300">
                    <td className="py-2 text-white">{item.produto}</td>
                    <td className="py-2 text-white">{item.valor}</td>
                    <td className="py-2 text-white">{item.vendidos}</td>
                    <td className="py-2 text-white">{item.barbeiros.join(", ")}</td>
                    <td className="py-2 text-white">{item.comissaoBarbeiro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {/* Seção de lucro */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white">Cálculo de Lucro</h3>
            <div className="mt-2 text-white">
              <p>Valor Cheio das Vendas: R$ 4.000,00</p>
              <p>Menos Comissões: R$ 300,00</p>
              <p className="font-bold">Lucro Total: R$ 3.700,00</p>
            </div>
          </div>
        </div>
      </div>
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

      <div className="flex justify-center absolute top-32 w-full">
        <DatePickerDemo />{" "}
        <Produtos/>
      </div>
  
    </>
  );
}
