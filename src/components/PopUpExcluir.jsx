"use client";

function PopUpExcluir({ isVisible, onClose }) {
  if (!isVisible) return null; // Não renderiza se não estiver visível

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white transform max-w-[calc(100%-40px)] max-h-[calc(100%-40px)] p-8 rounded-lg shadow-lg relative flex flex-col items-center">
        <h2 className="text-2xl pb-3 text-[#5d5988] font-bold">
          Excluir produto
        </h2>

        {/* Botão de confirmação */}
        <button className="w-[268.04px] h-[44.55px] px-9 py-6 bg-[#008fd7] rounded-[40px] justify-center items-center gap-2 inline-flex text-center text-white text-lg font-bold leading-[18px] mb-6">
          Tenho certeza
        </button>

        {/* Botão de desistir */}
        <button
          onClick={onClose}
          className="w-[268.04px] h-[44.55px] px-9 py-6 bg-red-600 rounded-[40px] justify-center items-center gap-2 inline-flex text-center text-white text-lg font-bold leading-[18px] mb-6"
        >
          Desistir
        </button>
      </div>
    </div>
  );
}
export default PopUpExcluir;
