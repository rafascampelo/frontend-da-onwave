"use client";

function PopUpNovoLote({ isVisible, onClose }) {
  if (!isVisible) return null; // Não renderiza se não estiver visível

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white transform max-w-[calc(100%-40px)] max-h-[calc(100%-40px)] p-8 rounded-lg shadow-lg relative flex flex-col items-center">
        <h2 className="text-2xl pb-3 text-[#5d5988] font-bold">
          Adicionar novo Lote
        </h2>
        <h2 className="text-lg pb-3 text-blue-400 font-bold">
          Qual a validade?
        </h2>
        <input
          type="date"
          className="mt-3 mb-4 w-[268.04px] h-[44.55px] bg-white rounded-[19px] text-[#61646b] text-[15px] font-bold pl-10 pr-10 border-2 border-[#008fd7] focus:outline-none"
        />
        <h2 className="text-lg pb-3 text-blue-400 font-bold">
          Quantidade do lote
        </h2>
        <input
          type="number"
          placeholder="000000"
          className="mb-6 w-[70px] h-[50px] bg-white rounded-lg border-2 border-[#008fd7] focus:outline-none justify-end items-center text-center text-[#61646b] text-sm font-normal"
        />

        <button className="w-[268.04px] h-[44.55px] px-9 py-6 bg-[#008fd7] rounded-[40px] justify-center items-center gap-2 inline-flex text-center text-white text-lg font-bold leading-[18px] mb-6">
          Pronto
        </button>
        {/* Botão de desistir */}
        <button
          onClick={onClose}
          className="w-[268.04px] h-[44.55px] px-9 py-6 bg-red-600 rounded-[40px] justify-center items-center gap-2 inline-flex text-center text-white text-lg font-bold leading-[18px] mb-6"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default PopUpNovoLote;
