import RequireActiveStore from "@/components/layout/guards/RequireActiveStore";
import CustomersPage from "@/features/admin/pages/CustomersPage";

export default function Page() {
  return (
    <RequireActiveStore>
      <CustomersPage />
    </RequireActiveStore>
  );
}
