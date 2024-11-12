"use client";
import { signOut } from "next-auth/react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

export default function ButtonLogut() {
  const router = useRouter();
  async function logout() {
    await signOut({
      redirect: false,
    });

    router.replace("/");
  }
  return (
    <Button onClick={logout} variant="destructive" className="px-10">
      Sair
    </Button>
  );
}
