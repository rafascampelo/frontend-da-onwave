"use client";
import { useState, createContext } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({}); // Inicializa o estado do usuário como um objeto vazio

  const register = (data) => {
    console.log(data); // Exibe os dados no console
    setUser((prevUser) => ({
      ...prevUser, // Mantém o estado anterior
      id: data.id,
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      cellphone: data.cellphone,
    }));
  };
  return (
    <UserContext.Provider value={{ user, register, setUser }}>
      <>{children}</>
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
