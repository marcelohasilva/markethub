import RequireActiveStore from "@/components/layout/guards/RequireActiveStore";
import DashboardPage from "@/features/admin/pages/DashboardPage";

export default function Page() {
  return (
    <RequireActiveStore>
      <DashboardPage />
    </RequireActiveStore>
  );
}
