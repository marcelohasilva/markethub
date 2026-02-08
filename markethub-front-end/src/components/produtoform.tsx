import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function ProdutoForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name || price === "" || !description) {
      alert("Preencha todos os campos");
      return;
    }

    if (Number(price) <= 0) {
      alert("O preço deve ser maior que 0");
      return;
    }

    // 1. PEGAR O TOKEN DO LOCALSTORAGE
    // O ID do utilizador está codificado dentro deste token.
    const token = localStorage.getItem('api_token');

    if (!token) {
      alert("Você precisa estar logado para cadastrar produtos!");
      return;
    }

    try {
      // O payload contém apenas os dados do produto. 
      // Não enviamos o seller_id aqui para evitar que um utilizador malintencionado 
      // tente enviar um ID de outra pessoa.
      const payload = {
        name: name.trim(),
        price: Number(price),
        description: description.trim(),
      };

      console.debug("Enviando produto com token...");

      const resposta = await fetch("http://localhost:8000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 2. ENVIAR O TOKEN NO HEADER
          // A API vai ler este cabeçalho, validar o token e extrair o ID do utilizador (o "sub").
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify(payload),
      });

      const data = await resposta.json();

      if (!resposta.ok) {
        throw new Error(data.message || "Erro ao salvar produto");
      }

      navigate("/loja");
      setName("");
      setPrice("");
      setDescription("");

    } catch (error: any) {
      console.error("Erro:", error);
      alert(error.message || "Erro ao conectar ao servidor");
    }
  }

  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <h2 className='font-bold text-[30px]'>Cadastrar Produto</h2>

      <form onSubmit={handleSubmit} className='flex flex-col w-full max-w-sm p-6'>
        <label className="mt-4">Nome do Produto</label>
        <input
          className='bg-white border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-[#186BC4] outline-none'
          type="text"
          placeholder="Ex: Teclado Mecânico"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="mt-4">Preço</label>
        <input
          className='bg-white border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-[#186BC4] outline-none'
          type="number"
          placeholder="0.00"
          value={price}
          onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
        />

        <label className="mt-4">Descrição</label>
        <textarea
          className='bg-white border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-[#186BC4] outline-none min-h-[100px]'
          placeholder="Detalhes do produto..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className='cursor-pointer font-bold text-white bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] rounded-lg py-3 transition mt-8 hover:opacity-90'>
          Salvar Produto
        </button>
      </form>
    </div>
  );
}