import RequireActiveStore from "../../components/RequireActiveStore";
import Pedidos from "../../views/Pedidos";

export default function Page() {
  return (
    <RequireActiveStore>
      <Pedidos />
    </RequireActiveStore>
  );
}
