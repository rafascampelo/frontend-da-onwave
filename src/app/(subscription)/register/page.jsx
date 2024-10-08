export default function Register() {
  return (
   
      <div className="flex items-center justify-center h-screen w-screen  bg-gray-200">
        <div className="w-[320px] h-[80vh] bg-white p-6 rounded-3xl shadow-lg flex flex-col overflow-y-auto">
          <form className="flex flex-col gap-6">
            <span className="text-center text-blue-600 text-[22px] font-bold">
              Adicione suas informações principais!
            </span>

            <input
              type="text"
              placeholder="Nome da barbearia"
              className="w-full h-[50px] bg-gray-100 rounded-full shadow-sm pl-4 text-gray-700 text-[16px] font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="CNPJ/CPF"
              className="w-full h-[50px] bg-gray-100 rounded-full shadow-sm pl-4 text-gray-700 text-[16px] font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full h-[50px] bg-gray-100 rounded-full shadow-sm pl-4 text-gray-700 text-[16px] font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Senha"
              className="w-full h-[50px] bg-gray-100 rounded-full shadow-sm pl-4 text-gray-700 text-[16px] font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="date"
              placeholder="Data de inauguração"
              className="w-full h-[50px] bg-gray-100 rounded-full shadow-sm pl-4 pr-4 text-gray-700 text-[16px] font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Celular"
              className="w-full h-[50px] bg-gray-100 rounded-full shadow-sm pl-4 text-gray-700 text-[16px] font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />

            <span className="text-center text-blue-600 text-[20px] font-bold">
              Endereço da unidade principal
            </span>

            <input
              type="text"
              placeholder="Endereço"
              className="w-full h-[50px] bg-gray-100 rounded-full shadow-sm pl-4 text-gray-700 text-[16px] font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full h-[55px] bg-blue-600 text-white font-bold rounded-full shadow-md hover:bg-blue-700 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    
  );
}
