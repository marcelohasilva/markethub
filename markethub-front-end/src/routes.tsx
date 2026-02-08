import { Route, Routes, useLocation } from "react-router-dom"
import TelaCadastro from "./pages/Tela-Cadastro"
import Home from "./pages/Home";
import CadastrarLoja from "./pages/CadastrarLoja";
import Carrinho from "./pages/Carrinho";
import App from "./App";
import CadastroProduto from "./pages/CadastroProduto";
import Favoritos from "./pages/Favoritos";
import Loja from "./pages/Loja";
import Product from "./pages/Product";
import TelaLogin from "./pages/Tela-Login";
import DashbordUser from "./pages/DashbordUser";

export const MainRoutes = () => {
     const location = useLocation();
    const isCadastro = location.pathname === "/cadastro";
   
    return (
        
      <Routes>
        <Route path="/cadastro" element={<TelaCadastro />} />
        <Route path="/" element={<Home />} />
        <Route path="/cadastrarloja" element={<CadastrarLoja />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path='/cadastrarproduto' element= {<CadastroProduto />} />
        <Route path='/favoritos' element= {<Favoritos />} />
        <Route path='/loja' element= {<Loja />} />
        <Route path='/produto/:id' element= {<Product />} />
        <Route path='/login' element= {<TelaLogin />} />
         <Route path='/users' element= {<DashbordUser />} />

      </Routes>
    )
}