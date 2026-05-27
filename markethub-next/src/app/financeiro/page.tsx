import RequireActiveStore from "../../components/shared/RequireActiveStore";
import Financeiro from "../../views/Financeiro";

export default function Page() {
  return (
    <RequireActiveStore>
      <Financeiro />
    </RequireActiveStore>
  );
}
