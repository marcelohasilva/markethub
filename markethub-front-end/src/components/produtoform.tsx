import { useState } from "react";
import type { FormEvent } from "react";



export default function ProdutoForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | "">("");

  const [description, setDescription] = useState("");
 

  async function handleSubmit(e: FormEvent) {
  e.preventDefault();

  if (!name || price === "" || !description) {
    alert("preencha todos os campos");
    return;
  }

  if (price <= 0) {
    alert("preço deve ser maior que 0");
    return;
  }

  try {
    const payload = {
      name: name.trim(),
      price: Number(price),
      description: description.trim(),
    };

    console.debug("Enviando payload do produto:", payload);

    const resposta = await fetch("http://localhost:8000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.debug("Response status:", resposta.status, "ok:", resposta.ok);

    // 🔑 ler o body UMA vez (igual ao cadastro)
    const textBody = await resposta.text();
    let data: any = null;

    try {
      data = textBody ? JSON.parse(textBody) : null;
    } catch {
      data = { raw: textBody };
    }

    console.debug("Response body parsed:", data);

    if (!resposta.ok) {
      const msg =
        data?.message ||
        data?.error ||
        data?.raw ||
        `Erro HTTP ${resposta.status}`;

      alert(`Erro ao cadastrar produto: ${msg}`);
      return;
    }

    console.log("Produto salvo no backend:", data);
    alert("Produto cadastrado com sucesso");

    setName("");
    setPrice("");
    setDescription("");

  } catch (error) {
    console.error("Erro ao cadastrar produto:", error);
    alert("Erro ao conectar ao servidor");
  }
}

  return (
    
    <div className='flex flex-col justify-center items-center  mt-20'>
     

    
      <h2 className='font-bold text-[30px]  mr-[80px]'> 
        Cadastrar Produto
        </h2>

      <form onSubmit={handleSubmit} className = 'flex flex-col w-full max-w-sm p-6 rounded-xl'>
        <p className=' mb-[8px]'
        >Produto</p>
        <input
        className='bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 w-[422px] focus:outline-none focus:ring-2 focus:ring-[#186BC4]'
          type="text"
          placeholder="nome do produto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className='mt-[40px] mb-[8px]'
        >preço</p>
        <input
        className='bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 w-[422px] focus:outline-none focus:ring-2 focus:ring-[#186BC4]'
          type="number"
          placeholder="Preço"
          value={price}
         onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
        />
        <p className='mt-[40px] mb-[8px]'
        >Descrição</p>
        <input
        className='bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 w-[422px] focus:outline-none focus:ring-2 focus:ring-[#186BC4]'
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        


        <button type="submit" className='cursor-pointer font-bold text-white bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] rounded-lg py-2 transition mt-[30px] h-[60px] w-[422px]'>
          Salvar Produto
        </button>
      </form>

    
      
    </div>
  );
}
