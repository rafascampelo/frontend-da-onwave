import Image from "next/image";
import Link from "next/link";

export default function UserProfile() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        {/* Link para voltar */}
        <div className="fixed top-5 left-3">
          <Link href="/homeScreen">
            <Image
              src="/voltar.png"
              alt="Onwave Logo"
              className="dark:invert pb-2"
              width={32}
              height={32}
              priority
            />
          </Link>
        </div>

        {/* Conteúdo com scroll separado */}
        <div className="flex-1 mt-20 flex justify-center items-start overflow-y-auto pb-6">
          <div className="bg-white rounded-[17px] w-[90%] max-w-[850px] p-6 shadow-lg relative">
            {/* Título "Meu perfil" */}
            <span className="text-center text-[#5d5988] text-[28px] font-extrabold leading-[38px] block pb-3">
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

            {/* Nome da barbearia */}
            <div className="flex justify-center items-center pb-1">
              <span className="text-black text-[20px] font-semibold leading-tight tracking-tight">
                nome_barbearia
              </span>
            </div>

            {/* E-mail */}
            <span className="text-[#008fd7] block text-center pb-2 text-[20px] font-semibold leading-tight tracking-tight">
              joaodossanto@email.com
            </span>

            {/* Tabela de serviços */}
            <div className="w-full py-2 bg-white rounded-lg border-2 border-[#aeb0b6] inline-flex">
              <table className="w-full table-auto">
                <tbody>
                  <tr>
                    <td className="px-4 py-2 text-[#61646b] text-sm font-normal leading-tight tracking-tight">
                      Serviço1
                    </td>
                    <td className="px-4 py-2 text-[#61646b] text-sm font-normal leading-tight tracking-tight text-right">
                      R$ 20.00
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-[#61646b] text-sm font-normal leading-tight tracking-tight">
                      Serviço2
                    </td>
                    <td className="px-4 py-2 text-[#61646b] text-sm font-normal leading-tight tracking-tight text-right">
                      R$ 30.00
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-[#61646b] text-sm font-normal leading-tight tracking-tight">
                      Serviço3
                    </td>
                    <td className="px-4 py-2 text-[#61646b] text-sm font-normal leading-tight tracking-tight text-right">
                      R$ 40.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Botão editar */}
            <button className="absolute right-5 top-5">
              <Image
                src="/editar.png"
                alt="editarfinanças"
                width={20}
                height={20}
              />
            </button>

            {/* Data de abertura */}
            <span className="text-black text-[15px] mt-3 font-normal leading-tight tracking-tight block">
              Aberto desde: 09/10/2018
            </span>

            {/* Endereço mostrado em uma div com truncamento e espaço reservado para imagem */}
            <div className="relative flex justify-center mt-4">
              <div className="w-[280px] h-[40px] bg-white border-2 border-blue-500 rounded-full pl-4 pr-10 flex items-center shadow-md overflow-hidden">
                <span className="text-black/60 text-[14px] font-medium truncate">
                  São Paulo Jardim América R.União 332, Apartamento 45, Bloco 2
                </span>
              </div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Image
                  src="/maps.png"
                  alt="Localização"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
