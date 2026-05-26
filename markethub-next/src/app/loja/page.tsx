import RequireActiveStore from "../../components/RequireActiveStore";
import Loja from "../../views/Loja";

export default function Page() {
  return (
    <RequireActiveStore>
      <Loja />
    </RequireActiveStore>
  );
}
