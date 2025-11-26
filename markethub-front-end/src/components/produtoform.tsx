import { useState } from "react";
import type { FormEvent } from "react";



export default function CadastroProduto() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | "">("");

  const [description, setDescription] = useState("");
 

  async function handleSubmit(e:FormEvent) {
    e.preventDefault();

    if(!name || price === "" || !description){
      alert('preencha todos os campos')
      return;
    }
    if(price <= 0 ){
      alert("preço e quantidade deve ser maires que 0");
      return;

    }

  
    try {
      const resposta = await fetch("http://localhost:8000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          price: Number(price),
          description: description.trim(),
        })
      });

       const lerresposta = await resposta.json();

        if(!resposta.ok){
            alert(`Erro: ${lerresposta.message || "Falha no cadastro"}`);
            return;
        }

     

      const data = await resposta.json();
      console.log("Produto salvo no backend:", data);

      

      setName("");
      setPrice("");
      setDescription("");

    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
    }
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='font-bold'>
        Cadastro de Produto
        </h2>

      <form onSubmit={handleSubmit} className = 'flex flex-col w-full max-w-sm p-6 rounded-xl'>
        <input
        className='bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]'
          type="text"
          placeholder="nome do produto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
        className='bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]'
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <input
        className='bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]'
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className=' font-bold text-white bg-gradient-to-r from-[#186BC4] to-[#6D44C5] rounded-lg py-2 transition mt-[30px] h-[60px]'>
          Salvar Produto
        </button>
      </form>

    
      
    </div>
  );
}
