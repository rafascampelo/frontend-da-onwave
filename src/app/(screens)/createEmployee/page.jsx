import FormCreateUser from "@/components/ui/formCreateUser";
import Image from "next/image";
import Link from "next/link";

export default function CreateEmployee() {
  return (
    <div>
      <div className="h-20 w-full bg-blue-700  flex items-center justify-center">
        <div className="relative w-[330px] h-[50px] flex items-center justify-center top-[50px] bg-white shadow-lg rounded-lg">
          <span className="text-lg font-semibold text-black text-center">
            Novo Funcionário
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <FormCreateUser />
      </div>
    </div>
  );
}
