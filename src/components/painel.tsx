import React from "react";
import logo from '../assets/logo.png';

export default function Painel() {
  return (
    <div className="overflow-hidden h-screen w-screen">
        <header className="w-full">
            <div className="h-20 bg-white flex items-center px-8 py-4 shadow-sm">
            <img className="h-30 w-auto" src={logo} alt="Logo" />
            </div>
        </header>
    <div className="flex flex-col justify-center items-center text-center text-white w-150 h-screen bg-gradient-to-r from-[#186BC4] to-[#6D44C5] p-8">
        <h1 className="text-4xl font-bold mb-4">Bem Vindo!</h1>
        <p className="text-lg mb-8">Para se manter conectado conosco <br />por favor logue com suas informações pessoais</p>
        <button className="border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-indigo-600 transition cursor-pointer">ENTRAR</button>
    </div>
    </div>
  );
}