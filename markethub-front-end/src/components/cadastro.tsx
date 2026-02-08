import { useState } from "react"; 
import type { FormEvent } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
    const navigate = useNavigate();
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [name, setName] = useState ('')
    const [mostrar, setMostrar] = useState (false)

    async function click(e :FormEvent){
      e.preventDefault();
   
      if(!email || !password){
        alert("preencha todos os campos")
        return;
      }
      if(password.length < 6){
        alert('password tem que ter pelo menos 6 digitos')
      return;
      }


      try {
        const payload = {
          email: email.trim(),
          password: password.trim(),
          name: name.trim(),
        };

        console.debug('Enviando payload de cadastro:', payload);

        const resposta = await fetch('http://localhost:8000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        // Log básico do response
        console.debug('Response status:', resposta.status, 'ok:', resposta.ok);

        // Tentar ler texto primeiro para garantir que obtenhamos qualquer corpo mesmo em erro 500
        const textBody = await resposta.text();
        let lerResposta: any = null;
        try {
          lerResposta = textBody ? JSON.parse(textBody) : null;
        } catch (e) {
          // corpo não é JSON
          lerResposta = { raw: textBody };
        }

        console.debug('Response body parsed:', lerResposta);

        if (!resposta.ok) {
          const msg = lerResposta?.message || lerResposta?.error || lerResposta?.raw || `Erro HTTP ${resposta.status}`;
          console.error('Erro no cadastro:', msg);
          alert(`Erro no cadastro: ${msg}`);
          return;
        }

        console.log('cadastro realizado', lerResposta);
        navigate("/");
        setEmail('');
        setPassword('');
        setName('');
      } catch (erro) {
        console.error('erro ao conectar ao servidor', erro);
        alert('erro ao conectar ao servidor: ver console para detalhes');
      }


        }

  
  return (
  <div className="bg-[#EBEBEB] flex items-center justify-center w-full md:w-1/2 min-h-screen px-4">
  <div className="w-full max-w-sm">
    <h1 className="bg-clip-text bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] text-transparent font-bold text-3xl sm:text-4xl mb-6 text-center">
      Cadastrar
    </h1>

    <form onSubmit={click} className="flex flex-col">
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
          value={password}
           onChange={e => setPassword(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 mb-3 pr-10 sm:pr-12 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
        />
       
        <button
          type="button"
          onClick={() => setMostrar(!mostrar)}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 mb-4 text-sm text-[#186BC4] font-semibold cursor-pointer"
        >
          {mostrar ? <EyeSlashIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : <EyeIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>    
    </div>  
     <input
          type = "text"
          id = "name"
          placeholder = "Name"
          value={name}
          onChange ={e => setName(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2  w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
        />  

 
        <button
          type="submit"

          className={`cursor-pointer font-bold text-white bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] rounded-lg py-2 transition mt-[10px]`}
        >
        Criar Conta
        </button>

        <div className="border border-gray-300 mt-8"></div>
     </form>
  </div>
</div>
  );
}