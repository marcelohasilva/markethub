import { StrictMode } from "react";
import SearchBar from './components/SearchBar';
import Actions from './components/Actions';
import NavMenu from './components/NavMenu';
import TelaCadastro from './pages/Tela-Cadastro.tsx';
import { Routes, Route, useLocation } from "react-router-dom";
import HeaderMain from "./components/HeaderMain.tsx";
import { MainRoutes } from "./routes.tsx";


export default function App() {
 

  return (
    <>

    <div className= 'bg-[#EBEBEB] min-h-screen w-full '>
      <MainRoutes />
      </div>
    </>
  );
}
