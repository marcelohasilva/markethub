import RequireActiveStore from "@/components/layout/guards/RequireActiveStore";
import FinancePage from "@/features/admin/pages/FinancePage";

export default function Page() {
  return (
    <RequireActiveStore>
      <FinancePage />
    </RequireActiveStore>
  );
}
