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
import { UserServices } from "@/services/user";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useContext } from "react";
import { UserContext } from "@/app/context/user";

const services = new UserServices();

export default function LoginForm() {
  const router = useRouter();
  const form = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const { register, setUser } = useContext(UserContext);

  const onSubmit = async (data) => {
    const res = await services.signin(data);

    if (res.error) {
      setErrorMessage(result.error);
    } else {
      const { result } = res;
      Cookies.set("auth_token", result.token);
      router.push("/homeScreen");
    }
  };

  return (
    <Form {...form}>
      {errorMessage && <p className="text-rose-500">{errorMessage}</p>}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" items-center px-8"
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
