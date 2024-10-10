"use client";

import { useForm } from "react-hook-form";
import { Button } from "./button";
import { Input } from "./input";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { UserServices } from "@/services/user";

export default function FormCreateUser() {
  const form = useForm();
  const service = new UserServices();
  const onSubmit = async (data) => {
    console.log(await service.create(data));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[300px]  h-[65%] fixed top-[125px] bg-white flex flex-col  items-center rounded-[13px] shadow-lg p-4 gap-2 overflow-y-scroll"
      >
        <h1 className="text-2xl font-extrabold text-slate-600 text-center">
          Cadastre seu <br /> novo funcionário
        </h1>
        <span className="text-center text-sm text-muted-foreground">
          {" "}
          Preencha corretamente as informações do seu novo funcionário
        </span>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite o nome" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sobrenome</FormLabel>
              <FormControl>
                <Input placeholder="Digite o sobrenome" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Digite o email" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF</FormLabel>
              <FormControl>
                <Input placeholder="Digite o CPF" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="born"
          render={({ field }) => (
            <FormItem className="w-[202px]">
              <FormLabel>Data de Nascimento</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[202px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "d/MM/y")
                        ) : (
                          <span>Selecione</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      captionLayout="dropdown-buttons"
                      hideNavigation
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cellphone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Celular pra contato</FormLabel>
              <FormControl>
                <Input placeholder="Digite o celular" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-evenly pt-2 w-full">
          <Button
            asChild
            className="bg-red-500 rounded-md text-primary-foreground hover:bg-red-700 py-2 h-10 w-24"
          >
            <Link href="myEmployeesScreen">Cancelar</Link>
          </Button>
          <Button className="bg-blue-500 w-24 hover:bg-blue-700">Criar</Button>
        </div>
      </form>
    </Form>
  );
}
// className="w-[300px]  h-[65%] fixed top-[125px] bg-white flex flex-col  items-center rounded-[13px] shadow-lg p-4 gap-2 overflow-y-scroll"

/*<form onSubmit={handleSubmit(onSubmit)}>
  
  <div>
    <Label htmlFor="firstName">Nome</Label>
    <Input {...register("firstName", { required: true })} />
  </div>

  <div>
    <Label htmlFor="lastName">Sobrenome</Label>
    <Input {...register("lastName", { required: true })} />
  </div>

  <div>
    <Label htmlFor="email">Email</Label>
    <Input {...register("email", { required: true })} />
  </div>

  <div>
    <Label htmlFor="cpf">CPF</Label>
    <Input {...register("cpf", { required: true })} />
  </div>

  <div>
    <Label htmlFor="born">Data de Nascimento</Label>
    <Input {...register("born", { required: true })} />
    <DatePicker />
  </div>

  <div>
    <Label htmlFor="cellphone">Celular</Label>
    <Input {...register("cellphone", { required: true })} />
  </div>
</form>; */
