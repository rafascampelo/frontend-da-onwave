import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "http://localhost:3080",
});

export class UserServices {
  async getAll() {
    const result = await AxiosInstance.get("/dev/");

    return result.data;
  }

  async getUser(id) {
    try {
      const result = await AxiosInstance.post(`/dev/user/${id}`, data);
      return result.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return error.response.data;
        } else if (error.request) {
          console.error("Sem resposta do servidor:", error.request);
          throw new Error("Sem resposta do servidor. Verifique a conexão.");
        } else {
          console.error("Erro ao configurar a requisição:", error.message);
          throw new Error("Erro ao configurar a requisição.");
        }
      } else {
        console.error("Erro inesperado:", error);
        throw new Error("Erro inesperado.");
      }
    }
  }

  async signin(data) {
    try {
      const result = await AxiosInstance.post("/signin", data);
      return result.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return error.response.data;
        } else if (error.request) {
          console.error("Sem resposta do servidor:", error.request);
          throw new Error("Sem resposta do servidor. Verifique a conexão.");
        } else {
          console.error("Erro ao configurar a requisição:", error.message);
          throw new Error("Erro ao configurar a requisição.");
        }
      } else {
        console.error("Erro inesperado:", error);
        throw new Error("Erro inesperado.");
      }
    }
  }

  async create(data) {
    const b = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: "0000",
      born: data.born,
      cellphone: data.cellphone,
      cpf: data.cpf,
      role: "user",
    };
    const result = await AxiosInstance.post(
      "/user/cm22zbe3i0001oa4r6rchl4uw/employees/",
      b
    );

    return result.data;
  }
}
