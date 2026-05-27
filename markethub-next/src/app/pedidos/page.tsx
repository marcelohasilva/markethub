import RequireActiveStore from "../../components/shared/RequireActiveStore";
import Pedidos from "../../views/Pedidos";

export default function Page() {
  return (
    <RequireActiveStore>
      <Pedidos />
    </RequireActiveStore>
  );
}
