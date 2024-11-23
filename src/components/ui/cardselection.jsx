import React, { useState } from "react";

const CardsSelection = () => {
  // Estado para rastrear os cards selecionados
  const [selectedCards, setSelectedCards] = useState([]);

  const cards = [
    { id: 1, title: "Card 1", content: "Conteúdo do card 1" },
    { id: 2, title: "Card 2", content: "Conteúdo do card 2" },
    { id: 3, title: "Card 3", content: "Conteúdo do card 3" },
  ];

  // Função para selecionar/deselecionar um card
  const toggleSelection = (id) => {
    setSelectedCards(
      (prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((cardId) => cardId !== id) // Deseleciona
          : [...prevSelected, id] // Seleciona
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`p-4 border rounded-md relative cursor-pointer ${
            selectedCards.includes(card.id) ? "bg-blue-200/50" : "bg-white"
          }`}
          onClick={() => toggleSelection(card.id)}
        >
          <h3 className="font-semibold">{card.title}</h3>
          <p>{card.content}</p>

          {/* Filtro azul transparente */}
          {selectedCards.includes(card.id) && (
            <div className="absolute inset-0 bg-blue-500/30 pointer-events-none"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardsSelection;
