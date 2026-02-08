import { Route, Routes } from "react-router-dom";
import TelaCadastro from "./pages/Tela-Cadastro";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import CadastroProduto from "./pages/CadastroProduto";
import Favoritos from "./pages/Favoritos";
import Loja from "./pages/Loja";
import Product from "./pages/Product";
import TelaLogin from "./pages/Tela-Login";
import DashbordUser from "./pages/DashbordUser";
import ProtectedCreateStore from "./components/ProtectedCreateStore";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<TelaCadastro />} />
      <Route path="/login" element={<TelaLogin />} />

      {/* 🚀 ROTA PROTEGIDA */}
      <Route
        path="/cadastrarloja"
        element={<ProtectedCreateStore />}
      />

      <Route path="/loja" element={<Loja />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/cadastrarproduto" element={<CadastroProduto />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/produto/:id" element={<Product />} />
      <Route path="/users" element={<DashbordUser />} />
    </Routes>
  );
};
