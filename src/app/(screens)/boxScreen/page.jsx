import Image from "next/image";
import Link from "next/link";

export default function BoxScreen() {
  return (
    <>
      <div className="h-20 w-full bg-blue-700 rounded-b-md flex items-center justify-center">
        <Link href="/UserProfile">
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

      <div className="fixed top-36 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-lg max-w-md w-full">
        <div className="flex flex-col mb-4">
          <div className="text-lg font-semibold text-black mb-2">
            Meus Produtos
          </div>
          <div className="flex items-center">
            <Image
              src="/caixabox.png"
              alt="Caixa Box"
              className="w-8 h-8"
              width={32}
              height={32}
            />
            <div className="ml-4 flex-1">
              <div className="text-lg font-semibold text-black">$Produto</div>
              <div className="text-sm text-gray-600">
                Validade 00/00/0000 <br />
                R$ 00.00
              </div>
            </div>
            <Image
              src="/editar.png"
              alt="Editar"
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>

      <div className="relative max-w-[calc(100%-40px)] top-[230px] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 flex items-cente">
        <Image
          src="/plus.png"
          alt="Adicionar Produto"
          className="w-8 h-8"
          width={32}
          height={32}
        />
        <Link href="/" className="ml-4 text-lg font-bold text-blue-600">
          Novos Produtos
        </Link>
      </div>

      <div className="relative max-w-[calc(100%-40px)] top-[240px] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 flex items-center ">
        <Image
          src="/plus.png"
          alt="Adicionar Produto"
          className="w-8 h-8"
          width={32}
          height={32}
        />
        <Link href="/" className="ml-4 text-lg font-bold text-blue-600">
          Registrar o novo lote
        </Link>
      </div>
    </>
  );
}
