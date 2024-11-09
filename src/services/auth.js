export const login = async (email, password) => {
  const res = await fetch("http://localhost:3080/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("erro ao fazer login");

  return await res.json();
};