import RequireActiveStore from "../../components/RequireActiveStore";
import Configuracoes from "../../views/Configuracoes";

export default function Page() {
  return (
    <RequireActiveStore>
      <Configuracoes />
    </RequireActiveStore>
  );
}
