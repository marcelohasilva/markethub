import RequireActiveStore from "../../../components/RequireActiveStore";
import ProdutosColecoes from "../../../views/ProdutosColecoes";

export default function Page() {
  return (
    <RequireActiveStore>
      <ProdutosColecoes />
    </RequireActiveStore>
  );
}
