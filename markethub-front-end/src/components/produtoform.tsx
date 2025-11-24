import { useState } from "react";

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  descricao?: string;
}

export default function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState<number | "">("");
  const [quantidade, setQuantidade] = useState<number | "">("");
  const [descricao, setDescricao] = useState("");
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const novoProduto = {
      nome,
      preco: Number(preco),
      quantidade: Number(quantidade),
      descricao,
    };

  
    try {
      const response = await fetch("http://127.0.0.1:8000/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoProduto),
      });

      const data = await response.json();
      console.log("Produto salvo no backend:", data);

      setProdutos((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...novoProduto,
        },
      ]);

      setNome("");
      setPreco("");
      setQuantidade("");
      setDescricao("");

    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
    }
  }

  return (
    <div>
      <h2>Cadastro de Produto</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(Number(e.target.value))}
          required
        />

        <input
          type="number"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(Number(e.target.value))}
          required
        />

        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <h3>Produtos cadastrados:</h3>
      <ul>
        {produtos.map((p) => (
          <li key={p.id}>
            {p.nome} — R${p.preco} — Quantidade: {p.quantidade}
          </li>
        ))}
      </ul>
    </div>
  );
}
