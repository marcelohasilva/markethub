import React from "react";

export default function Login() {
  return (
    <div className="bg-[#EBEBEB] flex flex-col items-center justify-center w-full md:w-full min-h-screen px-4 py-8">
      <h1 className="bg-clip-text bg-gradient-to-r from-[#186BC4] to-[#6D44C5] text-transparent font-bold text-3xl sm:text-4xl mb-6">
        Cadastrar
      </h1>

      <form className="flex flex-col w-full max-w-sm p-6 rounded-xl">
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
        />

        <input
          type="password"
          placeholder="Senha"
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 mt-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-[#186BC4]"
        />

        <button
          type="submit"
          className="cursor-pointer font-bold text-white bg-gradient-to-r from-[#186BC4] to-[#6D44C5] rounded-lg py-2 hover:opacity-90 transition"
        >
          PROSSEGUIR
        </button>

        <div className="border border-gray-300 mt-8"></div>
      </form>
    </div>
  );
}
