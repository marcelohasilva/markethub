import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    // Validações básicas
    if (!email || !password) {
      alert("Preencha todos os campos");
      return;
    }
    
    if (password.length < 6) {
      alert('A senha deve ter pelo menos 6 dígitos');
      return;
    }

    const payload = {
      email: email.trim(),
      password: password.trim(),
    };

    setIsLoading(true);

    try {
      // CORREÇÃO: body deve estar fora de headers
      const resposta = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload), // Mvido para fora de headers
      });

      const lerResposta = await resposta.json();

      if (!resposta.ok) {
        const msg = lerResposta?.message || `Erro HTTP ${resposta.status}`;
        throw new Error(msg);
      }

      // SUCESSO: Armazenar o token no localStorage
      if (lerResposta.success && lerResposta.token && lerResposta.user) {
        localStorage.setItem("api_token", lerResposta.token);
        localStorage.setItem("user", JSON.stringify(lerResposta.user));
      }

      navigate("/");
      setEmail('');
      setPassword('');
      
      // Aqui você normalmente redirecionaria o usuário:
      // window.location.href = '/dashboard';

    } catch (erro: any) {
      console.error('Erro na autenticação:', erro);
      alert(erro.message || 'Erro ao conectar ao servidor');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-[#EBEBEB] flex items-center justify-center w-full min-h-screen px-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Acessar Conta</h2>
        
        <form onSubmit={handleLogin} className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="exemplo@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
          />

          <label className="text-sm font-medium text-gray-700">Senha</label>
          <input
            type="password"
            placeholder="Sua senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-6 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`cursor-pointer font-bold text-white bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] rounded-lg py-2 transition hover:opacity-90 active:scale-95 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'A autenticar...' : 'Entrar'}
          </button>

          <div className="border-t border-gray-200 mt-8 pt-4 text-center">
            <span className="text-sm text-gray-500">Ainda não tem conta?</span>
            <button type="button" className="ml-2 text-sm text-[#186BC4] font-bold hover:underline">
              Registre-se
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;