import React from "react";

export default function Painel() {
  return (
    <div className="flex flex-col justify-center items-center text-center text-white min-h-screen w-[55%] bg-gradient-to-r from-[#186BC4] to-[#6D44C5] p-6 sm:p-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Bem-vindo!
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-8">
        Para se manter conectado conosco <br className="hidden sm:block" />
        por favor, logue com suas informações pessoais
      </p>
      <button className="border border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-white hover:text-indigo-600 transition cursor-pointer">
        ENTRAR
      </button>
    </div>
  );
}

