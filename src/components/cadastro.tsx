import React, { useState } from "react";
import type { FormEvent } from "react";

export default function Cadastro() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    if (senha.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      setLoading(true);

      // 🚀 Envia os dados para o backend
      const response = await fetch("http://localhost:3000/api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      // 🔍 Verifica se deu certo
      if (!response.ok) {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message || "Falha no cadastro"}`);
        return;
      }

      const data = await response.json();
      console.log("Usuário cadastrado com sucesso:", data);

      alert("✅ Cadastro realizado com sucesso!");
      setEmail("");
      setSenha("");
    } catch (error) {
      console.error("Erro ao conectar com o servidor:", error);
      alert("Erro ao conectar com o servidor. Verifique o backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#EBEBEB] flex flex-col w-[60%] h-full">
      <div className="flex flex-col items-center pt-[30px]">
        <h1 className="bg-clip-text bg-gradient-to-r from-[#186BC4] to-[#6D44C5] text-transparent font-bold text-[40px]">
          Cadastrar
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col w-[400px]">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#F9FAFB] border border-gray-300 rounded-lg px-2 py-2 mt-[15px] w-full"
          />

          <input
            type="password"
            id="senha"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="bg-[#F9FAFB] border border-gray-300 rounded-lg px-2 py-2 mt-[15px] mb-[15px] w-full"
          />

          <button
            type="submit"
            disabled={loading}
            className={`cursor-pointer font-bold text-white rounded-lg p-2 ${
              loading
                ? "bg-gray-400"
                : "bg-gradient-to-r from-[#186BC4] to-[#6D44C5]"
            }`}
          >
            {loading ? "Enviando..." : "PROSSEGUIR"}
          </button>

          <div className="border border-gray-300 mt-[50px]" />
        </form>
      </div>
    </div>
  );
}
