import RequireActiveStore from "@/components/layout/guards/RequireActiveStore";
import ReportsPage from "@/features/admin/pages/ReportsPage";

export default function Page() {
  return (
    <RequireActiveStore>
      <ReportsPage />
    </RequireActiveStore>
  );
}
