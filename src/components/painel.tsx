import { useNavigate } from "react-router-dom";

export default function Painel() {
  const navigate = useNavigate();
  return (
    <div className="
      hidden md:flex
      flex-col justify-center items-center text-center
      text-white min-h-screen
      md:w-1/2
      bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0]
      px-6 lg:px-12
    ">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Bem-vindo!
      </h1>

      <p className="text-base md:text-xl mb-8 leading-relaxed">
        Para se manter conectado conosco <br />
        por favor, logue com suas informações pessoais
      </p>

      <button onClick={() => navigate("/login")} className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition">
        ENTRAR
      </button>
    </div>
  );
}

