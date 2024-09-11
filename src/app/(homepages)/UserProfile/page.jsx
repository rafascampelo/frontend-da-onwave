import Image from "next/image";
import Link from "next/link";

export default function UserProfile() {
  return (
    <>
      <Link href={"/"}>
        <Image
          src="/voltar.png"
          alt="Onwave Logo"
          className="dark:invert relative left-3 top-5 pb-10"
          width={32}
          height={32}
          priority
        />
      </Link>
      <div className="flex justify-center items-start h-[100px]">
        {/* Card com bordas arredondadas */}
        <div className="bg-white rounded-[17px] w-[90%] max-w-[850px] p-6 shadow-lg relative">
          {/* Título "Meu perfil" */}
          <span className="text-center text-[#5d5988] text-[28px] font-extrabold leading-[38px] block pt-3 pb-3">
            Meu perfil
          </span>

          {/* Imagem do usuário */}
          <div className="flex justify-center">
            <img
              src="/userbarb.png"
              alt="User"
              className="w-[85px] h-[90px] pb-3"
            />
          </div>

          {/* Nome da barbearia e botão editar */}
          <div className="flex justify-center items-center">
            <span className="text-black pr-4 text-[20px] font-semibold leading-tight tracking-tight">
              nome_barbearia
            </span>
            <Link href="/">
              <img src="/editar.png" alt="editar" className="w-4 h-4" />
            </Link>
          </div>

          {/* E-mail */}
          <span className="text-[#008fd7] block text-center pt-1 text-[20px] font-semibold leading-tight tracking-tight">
            joaodossanto@email.com
          </span>

          {/* "Meus serviços" e botão adicionar */}
          <div className="flex flex-row relative left-3 mt-6 items-center pb-3">
            <span className="text-black text-[15px] font-bold leading-[14px] pr-1">
              Meus serviços
            </span>
            <button className="h-10 w-10 flex items-center justify-center">
              <Image
                src="/plus.png"
                alt="Adicionar serviços"
                width={32}
                height={32}
              />
            </button>
          </div>

          <div className="w-[277px] h-auto py-2 bg-white rounded-lg border-2 border-[#aeb0b6] inline-flex">
            <table className="w-full table-auto">
              <tbody>
                <tr>
                  <td className="w-60 px-4 py-2 text-[#61646b] text-sm font-normal leading-tight tracking-tight">
                    Serviço1
                  </td>
                  <td className="w-60 px-4 py-2 text-[#61646b] text-sm font-normal leading-tight tracking-tight text-right">
                    R$ 20.00
                  </td>
                </tr>
                <tr>
                  <td className="w-60 px-4 py-2 text-[#61646b] text-sm font-normal leading-tight tracking-tight">
                    Serviço2
                  </td>
                  <td className="w-60 px-4 py-2 text-[#61646b] text-sm font-normal leading-tight tracking-tight text-right">
                    R$ 30.00
                  </td>
                </tr>
                <tr>
                  <td className="w-60 px-4 py-2 text-[#61646b] text-sm font-normal leading-tight tracking-tight">
                    Serviço3
                  </td>
                  <td className="w-60 px-4 py-2 text-[#61646b] text-sm font-normal leading-tight tracking-tight text-right">
                    R$ 40.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
