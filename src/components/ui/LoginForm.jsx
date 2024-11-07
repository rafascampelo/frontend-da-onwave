"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { useForm } from "react-hook-form";
import { Button } from "./button";
import { Input } from "./input";
import { login } from "@/services/auth";

import { useState } from "react";

export default function LoginForm() {
  const form = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    setErrorMessage(""); // Limpa a mensagem de erro antes de tentar o login
    try {
      const response = await login(data.email, data.password);
      console.log("Login bem-sucedido", response);
      // Aqui você pode redirecionar o usuário ou armazenar as informações necessárias
    } catch (error) {
      setErrorMessage("Credenciais inválidas. Tente novamente."); // Mensagem de erro genérica
      console.error("Erro ao fazer login:", error);
    }
  };
  return (
    <Form {...form}>
      {errorMessage && <p className="text-rose-500">{errorMessage}</p>}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="items-center px-8"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Digite o seu email"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Digite a sua senha"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-2 w-full bg-blue-500 hover:bg-blue-700">
          Entrar
        </Button>
      </form>
    </Form>
  );
}
