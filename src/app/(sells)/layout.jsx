"use client";

import Image from "next/image";

export default function Layout({ data = [] }) {
  // Garante que data sempre seja um array vazio por padrão, caso seja undefined
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {data.map((item, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-md">
          <Image
            src={item.imageUrl}
            alt={item.name}
            width={150}
            height={150}
            className="mx-auto"
          />
          <h3 className="text-center mt-2 text-xl font-semibold">
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
