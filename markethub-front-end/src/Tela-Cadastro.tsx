import { StrictMode } from "react";
import Header from "./components/header";
import Cadastro from "./components/cadastro";
import Painel from "./components/painel";
import Home from "./App.tsx";
import { Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const isCadastro = location.pathname === "/";
  return (
    <>
    <div className='overflow-hidden h-screen'>
      <Header />
      <div className="flex flex-col md:flex-row justify-center items-start w-full ">
        <Painel />
        <Cadastro />
      </div>
    </div>
    <Routes>
        <Route path="/cadastro" element={<Home />} />
        <Route path="/" element={<></>} />
      </Routes>
    </>
  );
}
