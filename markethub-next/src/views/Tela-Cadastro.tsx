import Header from "../components/header";
import Cadastro from "../components/cadastro";
import Painel from "../components/painel";

export default function TelaCadastro() {
  return (
    <div className="overflow-hidden h-screen">
      <Header />
      <div className="flex flex-col md:flex-row justify-center items-start w-full ">
        <Painel />
        <Cadastro />
      </div>
    </div>
  );
}
