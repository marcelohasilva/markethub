import RequireActiveStore from "../../../components/RequireActiveStore";
import ProdutosImportados from "../../../views/ProdutosImportados";

export default function Page() {
  return (
    <RequireActiveStore>
      <ProdutosImportados />
    </RequireActiveStore>
  );
}
