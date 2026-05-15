"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000";
const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    email: "",
    password: "",
  })
  const [formError, setFormError] = useState("")

  const clearFieldError = (field: "email" | "password") => {
    setFieldErrors(prev => (prev[field] ? { ...prev, [field]: "" } : prev))
  }

  const handleEmailChange = (value: string) => {
    setEmail(value)
    clearFieldError("email")
    if (formError) setFormError("")
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
    clearFieldError("password")
    if (formError) setFormError("")
  }

  const validate = () => {
    const nextErrors = { email: "", password: "" };

    if (!email) {
      nextErrors.email = "Informe o email";
    } else if (!emailRegex.test(email)) {
      nextErrors.email = "Email invalido";
    }

    if (!password) {
      nextErrors.password = "Informe a senha";
    }

    return nextErrors;
  }

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    const nextErrors = validate();
    if (nextErrors.email || nextErrors.password) {
      setFieldErrors(nextErrors);
      return;
    }

    const payload = {
      email: email.trim(),
      password: password.trim(),
    };

    setIsLoading(true);

    try {
      const resposta = await fetch(`${API_BASE_URL}/v1/auth/singin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload), 
      });

      const lerResposta = await resposta.json();

      if (!resposta.ok) {
        const msg = resposta.status === 401
          ? "Senha incorreta"
          : (lerResposta?.message || `Erro HTTP ${resposta.status}`);
        setFormError(msg);
        return;
      }

      if (lerResposta.token) {
        localStorage.setItem('api_token', lerResposta.token);
      }

      setFieldErrors({ email: "", password: "" })
      setFormError("")
      setEmail('');
      setPassword('');
      router.push("/");

    } catch (erro: any) {
      console.error('Erro na autenticação:', erro);
      setFormError(erro.message || 'Erro ao conectar ao servidor');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-[#EBEBEB] flex items-center justify-center w-full min-h-screen px-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Acesso à Conta</h2>
        
        <form onSubmit={handleLogin} className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => handleEmailChange(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
          />
          {fieldErrors.email ? (
            <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
          ) : null}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => handlePasswordChange(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
          />
          {fieldErrors.password ? (
            <p className="mt-1 text-xs text-red-600">{fieldErrors.password}</p>
          ) : null}

          <button
            type="submit"
            disabled={isLoading}
            className={`cursor-pointer font-bold text-white bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] rounded-lg py-2 transition hover:opacity-90 active:scale-95 mt-3 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Carregando...' : 'Entrar'}
          </button>

          {formError ? (
            <p className="mt-3 text-sm text-red-600 text-center">{formError}</p>
          ) : null}

          <div className="border-t border-gray-200 mt-8 pt-4 text-center">
            <span className="text-sm text-gray-500">Não possui uma conta?</span>
            <button
              type="button"
              onClick={() => router.push("/cadastro")}
              className="ml-2 text-sm text-[#186BC4] font-bold hover:underline"
            >
              Registre-se
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;