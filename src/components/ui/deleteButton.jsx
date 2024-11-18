"use client";
import { deleteEmployee } from "@/services/api";
import { Button } from "./button";

export const DeleteButton = ({ id, employeeId, token }) => {
  const handleDelete = async () => {
    const result = await deleteEmployee(id, token, employeeId);
    console.log(result);
  };

  return (
    <Button variant="destructive" onClick={handleDelete}>
      Confirmar
    </Button>
  );
};
