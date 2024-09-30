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

      <div className="flex justify-center absolute top-32 w-full">
        <DatePickerDemo />{" "}
       
      </div>
  
    </>
  );
}
