import { StrictMode } from "react";
import Home from "./App.tsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Produtoform from "./components/produtoform.tsx";

export default function App() {
  const location = useLocation();
  const isCadastro = location.pathname === "/";
  return (
    <>
      <Produtoform />
    </>
  );
}
