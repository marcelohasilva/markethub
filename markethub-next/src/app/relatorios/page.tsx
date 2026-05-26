import RequireActiveStore from "../../components/RequireActiveStore";
import Relatorios from "../../views/Relatorios";

export default function Page() {
  return (
    <RequireActiveStore>
      <Relatorios />
    </RequireActiveStore>
  );
}
