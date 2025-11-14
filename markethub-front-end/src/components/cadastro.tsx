import React from "react"; 
import { useState } from "react"; 
import { FormEvent } from "react";


export default function Cadastro() {
    
    const [email, setEmail] = useState ('')
    const [senha, setSenha] = useState ('')

    async function click(e :FormEvent){
      e.preventDefault();
   
      if(!email || !senha){
        alert("preencha todos os campos")
        return;
      }
      if(senha.length < 6){
        alert('senha tem que ter pelo menos 6 digitos')
      return;
      }


      try{

        const resposta = await fetch('https://jsonplaceholder.typicode.com/users', {
          method : 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({email, senha})
        })
        
        const lerResposta = await resposta.json();

        if(!resposta.ok){
            alert(`Erro: ${lerResposta.message || "Falha no cadastro"}`);
            return;
        }
        
       
        console.log('cadastro realizado', lerResposta);
        alert('cadstro realizado')
        setEmail ('');
        setSenha ('');

        

          }catch (erro){
            console.error('erro ao conectar ao servidor')
            alert('erro ao conectar ao servidor')
          }


        }

  
  return (
    <div className="bg-[#EBEBEB] flex flex-col items-center justify-center w-full md:w-full min-h-screen px-4 py-8">
      <h1 className="bg-clip-text bg-gradient-to-r from-[#186BC4] to-[#6D44C5] text-transparent font-bold text-3xl sm:text-4xl mb-6">
        Cadastrar
      </h1>

   
      <form onSubmit={click} className="flex flex-col w-full max-w-sm p-6 rounded-xl">
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
         onChange={e => setEmail(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
           onChange={e => setSenha(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
        />

        <button
          type="submit"

          className={`cursor-pointer font-bold text-white bg-gradient-to-r from-[#186BC4] to-[#6D44C5] rounded-lg py-2 transition `}
        >
        PROSSEGUIR
        </button>

        <div className="border border-gray-300 mt-8"></div>
      </form>
    </div>
  );
}