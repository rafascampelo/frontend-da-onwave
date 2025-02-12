/*
{
  id: 'cm3mei1rh000366e47vaj9s86',
  firstname: 'John',
  lastname: 'Doe',
  email: 'johndoe@onwave.com',
  password: '$2b$15$FcgX8VVLxNERsx1oOs0P0.Y2VXOspFF/rJ8Q3x/ny/zGmR1lLsXuC',
  cellphone: '11 99869-8963',
  role: 'ADMIN',
  fixedPayment: null,
  commissionProduct: null,
  commissionProcedure: null,
  firstLogin: false,
  adminId: null,
  barbershopId: 'cm3mbaqf4000210rnv6tqqqzh',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNtM21laTFyaDAwMDM2NmU0N3ZhajlzODYiLCJpYXQiOjE3MzE4OTY4NDQsImV4cCI6MTczMTk4MzI0NH0.WtbiDHwQJ9KrvNC5OlljTvGswnSl_jH0-5_SYm05HfQ'
}
*/
const url = "http://localhost:3080";

export const createEmployee = async (data, id, barbershopId, token) => {
  const {
    firstname,
    lastname,
    email,
    cellphone,
    fixedPayment,
    commissionProcedure,
    commissionProduct,
  } = data;
  const res = await fetch(`${url}/user/createEmployee`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      firstname,
      lastname,
      email,
      cellphone,
      fixedPayment,
      commissionProcedure,
      commissionProduct,
      role: "EMPLOYEE",
      adminId: id,
      barbershopId,
    }),
  });

  if (!res.ok) throw new Error("Erro ao fazer a requisição");

  return await res.json();
};

export const getMyUser = async (id, token) => {
  const res = await fetch(`${url}/user/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Erro ao fazer a requisição");

  const data = await res.json();

  return data.user;
};

export const getEmployees = async (id, token) => {
  const res = await fetch(`${url}/user/${id}/employees/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Erro ao fazer a requisição");

  const data = await res.json();

  return data.result;
};

export const updateFixedPayment = async (id, token, employeeId, value) => {
  const res = await fetch(
    `${url}/user/${id}/employees/${employeeId}/fixedPayment`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        value,
      }),
    }
  );

  if (!res.ok) throw new Error("Erro ao fazer a requisição");

  const data = await res.json();

  return data.user;
};

export const updateCommissionProcedure = async (
  id,
  token,
  employeeId,
  value
) => {
  const res = await fetch(
    `${url}/user/${id}/employees/${employeeId}/commissionProcedure `,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        value,
      }),
    }
  );

  if (!res.ok) throw new Error("Erro ao fazer a requisição");

  const data = await res.json();

  return data.user;
};

export const updateCommissionProduct = async (id, token, employeeId, value) => {
  const res = await fetch(
    `${url}/user/${id}/employees/${employeeId}/commissionProduct `,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        value,
      }),
    }
  );

  if (!res.ok) throw new Error("Erro ao fazer a requisição");

  const data = await res.json();

  return data.user;
};

export const updateCellphone = async (id, token, value) => {
  const res = await fetch(`${url}/user/${id}/cellphone `, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      value,
    }),
  });

  if (!res.ok) throw new Error("Erro ao fazer a requisição");

  const data = await res.json();

  return data.user;
};

export const updatePassword = async (id, token, value) => {
  const res = await fetch(`${url}/user/${id}/password `, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      value,
    }),
  });

  if (!res.ok) throw new Error("Erro ao fazer a requisição");

  const data = await res.json();

  return data.user;
};

export const deleteEmployee = async (id, token, employeeId) => {
  const res = await fetch(`${url}/user/${id}/employees/${employeeId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Erro ao fazer a requisição");

  const data = await res.json();

  return data.user;
};
