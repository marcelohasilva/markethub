import RequireActiveStore from "../../components/RequireActiveStore";
import Produtos from "../../views/Produtos";

export default function Page() {
  return (
    <RequireActiveStore>
      <Produtos />
    </RequireActiveStore>
  );
}
