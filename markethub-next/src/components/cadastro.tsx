"use client";
import { useState } from "react"; 
import type { FormEvent } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000";
const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;

export default function Cadastro() {
    const router = useRouter();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [mostrar, setMostrar] = useState(false)

    const [fieldErrors, setFieldErrors] = useState({
      email: "",
      password: "",
      name: "",
    })

    const [formError, setFormError] = useState("")

    const clearFieldError = (field: "email" | "password" | "name") => {
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

    const handleNameChange = (value: string) => {
      setName(value)
      clearFieldError("name")
      if (formError) setFormError("")
    }

    const validate = () => {
      const nextErrors = { email: "", password: "", name: "" };

      if (!email) {
        nextErrors.email = "Informe o email";
      } else if (!emailRegex.test(email)) {
        nextErrors.email = "Email invalido";
      }

      if (!name) {
        nextErrors.name = "Informe o nome";
      }

      if (!password) {
        nextErrors.password = "Informe a senha";
      } else if (password.length < 8) {
        nextErrors.password = "A senha deve ter pelo menos 8 digitos";
      } else if (!/[A-Z]/.test(password)) {
        nextErrors.password = "A senha deve conter pelo menos uma letra maiuscula";
      } else if (!/[a-z]/.test(password)) {
        nextErrors.password = "A senha deve conter pelo menos uma letra minuscula";
      } else if (!/[0-9]/.test(password)) {
        nextErrors.password = "A senha deve conter pelo menos um numero";
      }

      return nextErrors;
    }

    async function click(e: FormEvent) {
      e.preventDefault();

      const nextErrors = validate();
      if (Object.values(nextErrors).some(error => error !== "")) {
        setFieldErrors(nextErrors);
        return;
      }

      try {
        const resposta = await fetch(`${API_BASE_URL}/v1/auth/singup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.trim(),
            password: password.trim(),
            name: name.trim(),
            role: "CLIENT",
          }),
        });

        let data = null;
        try {
          data = await resposta.json();
        } catch {
          data = null;
        }

        if (!resposta.ok) {
          const msg = data?.message || data?.error || `Erro HTTP ${resposta.status}`;
          setFormError(msg);
          return;
        }

        if (data?.token) {
          localStorage.setItem('api_token', data.token);
        }

        setFieldErrors({ email: "", password: "", name: "" });
        setFormError("");
        setEmail('');
        setPassword('');
        setName('');

        router.push("/");
      } catch (erro) {
        setFormError('Erro ao conectar ao servidor');
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
         onChange={e => handleEmailChange(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
        />
        {fieldErrors.email ? (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
        ) : null}
    <div className="relative">
        <input
          type={mostrar ? "text" : "password"}
          placeholder="Password"
          value={password}
           onChange={e => handlePasswordChange(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 pr-10 sm:pr-12 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
        />
       
        <button
          type="button"
          onClick={() => setMostrar(!mostrar)}
          className="absolute right-3 sm:right-4 inset-y-0 flex items-center text-sm text-[#186BC4] font-semibold cursor-pointer"
        >
          {mostrar ? <EyeSlashIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : <EyeIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>    
    </div>  
    {fieldErrors.password ? (
      <p className="mt-1 text-xs text-red-600">{fieldErrors.password}</p>
    ) : null}
    <input
          type = "text"
          id = "name"
          placeholder = "Name"
          value={name}
      onChange ={e => handleNameChange(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
        />  
        {fieldErrors.name ? (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>
        ) : null}

        <button
          type="submit"
          className={`cursor-pointer font-bold text-white bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] rounded-lg py-2 transition mt-[10px]`}
        >
        Criar Conta
        </button>

        {formError ? (
          <p className="mt-3 text-sm text-red-600 text-center">{formError}</p>
        ) : null}

        <div className="border border-gray-300 mt-8"></div>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-500">Ja tem conta?</span>
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="ml-2 text-sm text-[#186BC4] font-bold hover:underline"
          >
            Entrar
          </button>
        </div>
     </form>
  </div>
</div>
  );
}