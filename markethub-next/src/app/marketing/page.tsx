import RequireActiveStore from "../../components/shared/RequireActiveStore";
import Marketing from "../../views/Marketing";

export default function Page() {
  return (
    <RequireActiveStore>
      <Marketing />
    </RequireActiveStore>
  );
}
