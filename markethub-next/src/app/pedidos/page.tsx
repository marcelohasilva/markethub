import RequireActiveStore from "@/components/layout/guards/RequireActiveStore";
import OrdersPage from "@/features/admin/pages/OrdersPage";

export default function Page() {
  return (
    <RequireActiveStore>
      <OrdersPage />
    </RequireActiveStore>
  );
}
