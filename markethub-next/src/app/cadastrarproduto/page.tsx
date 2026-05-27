import RequireActiveStore from "../../components/shared/RequireActiveStore";
import CadastroProduto from "../../views/CadastroProduto";

export default function Page() {
  return (
    <RequireActiveStore>
      <CadastroProduto />
    </RequireActiveStore>
  );
}
