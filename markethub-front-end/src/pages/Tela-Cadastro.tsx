
import Header from "../components/header.tsx";
import Cadastro from "../components/cadastro.tsx";
import Painel from "../components/painel.tsx";
import Home from "../App.tsx";
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
    
    </>
  );
}
