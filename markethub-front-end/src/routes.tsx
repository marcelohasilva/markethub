import { Route, Routes, useLocation } from "react-router-dom"
import TelaCadastro from "./pages/Tela-Cadastro"
import Home from "./pages/Home";
import CadastrarLoja from "./pages/CadastrarLoja";

export const MainRoutes = () => {
     const location = useLocation();
    const isCadastro = location.pathname === "/cadastro";
   
    return (
        
      <Routes>
        <Route path="/cadastro" element={<TelaCadastro />} />
        <Route path="/" element={<Home />} />
        <Route path="cadastrarloja" element={<CadastrarLoja />} />
        
      </Routes>
    )
}