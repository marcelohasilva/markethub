import RequireActiveStore from "../../components/RequireActiveStore";
import Dashboard from "../../views/Dashboard";

export default function Page() {
  return (
    <RequireActiveStore>
      <Dashboard />
    </RequireActiveStore>
  );
}
