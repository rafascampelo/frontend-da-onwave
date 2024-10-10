import FormCreateUser from "@/components/ui/formCreateUser";
import Image from "next/image";
import Link from "next/link";

export default function CreateEmployee() {
  return (
    <div>
      <div className="h-20 w-full bg-blue-700 rounded-b-md flex items-center justify-center fixed overflow-hidden">
        <Link href="/userProfile">
          <div className="fixed top-10 right-0 flex items-center bg-white shadow-lg p-3 rounded-lg">
            <Image
              src="/userbarb.png"
              alt="User"
              className="w-12 h-12 rounded-full"
              width={48}
              height={48}
            />
            <div className="ml-3 text-lg font-bold text-gray-800">
              $nomeBarboooooo
            </div>
          </div>
        </Link>
      </div>
      <div className="flex justify-center items-center min-h-screen flex-col">
        <FormCreateUser />
      </div>
    </div>
  );
}
