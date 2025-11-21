import { useState } from "react"; 
import type { FormEvent } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Cadastro() {
    
    const [email, setEmail] = useState ('')
    const [senha, setSenha] = useState ('')
    const [mostrar, setMostrar] = useState (false)

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

                const resposta = await fetch('http://127.0.0.1:8000/users', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.trim(),
                password: senha.trim()   // <-- alterado aqui
            })
        });

        
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
        Entrar
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
    <div className="relative">
        <input
          type={mostrar ? "text" : "password"}
          placeholder="Password"
          value={senha}
           onChange={e => setSenha(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 mb-4 pr-10 sm:pr-12 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
        />
        <button
          type="button"
          onClick={() => setMostrar(!mostrar)}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 mb-4 text-sm text-[#186BC4] font-semibold cursor-pointer"
        >
          {mostrar ? <EyeSlashIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : <EyeIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>    
    </div>    

    <a href="#" className="text-sm-[11px]  text-[#707274] mb-3 underline w-full sm:text-right-align ml-[10px] cursor-pointer">
      ESQUECI MINHA SENHA
    </a>

        <button
          type="submit"

          className={`cursor-pointer font-bold text-white bg-gradient-to-r from-[#186BC4] to-[#6D44C5] rounded-lg py-2 transition `}
        >
        ACESSAR MINHA CONTA
        </button>

        <div className="border border-gray-300 mt-8"></div>
      </form>
    </div>
  );
}