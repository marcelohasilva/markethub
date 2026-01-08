

import { useLocation } from "react-router-dom";
import Produtoform from "../components/produtoform.tsx";

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
