import Header from "../components/header";
import Cadastro from "../components/cadastro";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function TelaCadastro() {
  return (
    <div className={`min-h-screen bg-[#F7F8FC] ${poppins.className}`}>
      <Header />
      <Cadastro />
    </div>
  );
}
