import RequireActiveStore from "../../components/shared/RequireActiveStore";
import Loja from "../../views/Loja";

export default function Page() {
  return (
    <RequireActiveStore>
      <Loja />
    </RequireActiveStore>
  );
}
