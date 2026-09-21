import RequireActiveStore from "@/components/layout/guards/RequireActiveStore";
import ProductsPage from "@/features/admin/pages/ProductsPage";

export default function Page() {
  return (
    <RequireActiveStore>
      <ProductsPage />
    </RequireActiveStore>
  );
}
