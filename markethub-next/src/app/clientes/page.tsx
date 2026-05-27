import RequireActiveStore from "../../components/shared/RequireActiveStore";
import Clientes from "../../views/Clientes";

export default function Page() {
  return (
    <RequireActiveStore>
      <Clientes />
    </RequireActiveStore>
  );
}
