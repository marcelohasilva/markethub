import RequireActiveStore from "../../components/shared/RequireActiveStore";
import Dashboard from "../../views/Dashboard";

export default function Page() {
  return (
    <RequireActiveStore>
      <Dashboard />
    </RequireActiveStore>
  );
}
