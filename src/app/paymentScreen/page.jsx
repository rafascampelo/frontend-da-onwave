import Image from "next/image";
import Link from "next/link";

export default function paymentScreen() {
  return (
    <div className="bg-gray-200 w-screen h-screen">
      <div className="absolute top-5 left-3">
        <Link href="/homeScreen">
          <Image
            src="/voltar.png"
            alt="Voltar"
            className="dark:invert pb-2"
            width={32}
            height={32}
          />
        </Link>
      </div>

      <div className="pt-24 flex flex-col items-center">
        <span className="text-center text-blue-500 text-[28px] font-extrabold leading-[38px]">
          Formas de pagamento
        </span>

        <div className="text-center text-[#9795b4] text-lg font-normal pt-5 leading-[30px]">
          Escolha a forma de pagamento. <br /> Estamos quase acabando...
        </div>
      </div>

      {/* Centralizando os métodos de pagamento */}
      <div className="flex flex-col items-center justify-center w-screen space-y-4 pt-20">
        <Link href="/serviceScreen">
          <span className="flex items-center text-lg font-normal leading-[30px] text-center text-[#9795b4]">
            <Image
              src="/money.png"
              alt="Iconmoney"
              width={32}
              height={32}
              className="mr-2"
            />
            Dinheiro
          </span>
        </Link>
        <Link href="/serviceScreen">
          <span className="flex items-center text-lg font-normal leading-[30px] text-center text-[#9795b4]">
            <Image
              src="/creditcard.png"
              alt="Icondebito"
              width={32}
              height={32}
              className="mr-2"
            />
            Débito
          </span>
        </Link>
        <Link href="/serviceScreen">
          <span className="flex items-center text-lg font-normal leading-[30px] text-center text-[#9795b4]">
            <Image
              src="/debitcard.png"
              alt="Iconcredito"
              width={32}
              height={32}
              className="mr-2"
            />
            Crédito
          </span>
        </Link>
        <Link href="/serviceScreen">
          <span className="flex items-center text-lg font-normal leading-[30px] text-center text-[#9795b4]">
            <Image
              src="/qrcode.png"
              alt="Iconqrcode"
              width={32}
              height={32}
              className="mr-2"
            />
            Pix
          </span>
        </Link>
      </div>
    </div>
  );
}
