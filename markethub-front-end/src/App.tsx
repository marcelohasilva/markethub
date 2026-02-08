import { StrictMode } from "react";
import SearchBar from './components/SearchBar';
import Actions from './components/Actions';
import NavMenu from './components/NavMenu';
import TelaCadastro from './Tela-Cadastro.tsx';
import { Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const isCadastro = location.pathname === "/cadastro";

  return (
    <>
      {!isCadastro && (
        <header className="w-full bg-white shadow-md inset-shadow-sm fill-white drop-shadow-xl">
          <div className="flex items-center justify-between px-10 bg-white inset-shadow-sm">
            <SearchBar />
            <Actions />
          </div>
          <NavMenu />
        </header>
      )}

      <Routes>
        <Route path="/cadastro" element={<TelaCadastro />} />
        <Route path="/" element={<></>} />
      </Routes>
    </>
  );
}
