import RequireActiveStore from "../../../components/shared/RequireActiveStore";
import ProdutosColecoes from "../../../views/ProdutosColecoes";

export default function Page() {
  return (
    <RequireActiveStore>
      <ProdutosColecoes />
    </RequireActiveStore>
  );
}
