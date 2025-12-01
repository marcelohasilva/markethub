import { StrictMode } from "react";
import Home from "./App.tsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Produtoform from "./components/produtoform.tsx";
import Header from "./components/header";

export default function App() {
  const location = useLocation();
  const isCadastro = location.pathname === "/";
  return (
    <>
      <div className="overflow-hidden h-screen">
       
      <Produtoform />
      </div>
    </>
  );
}
