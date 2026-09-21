import RequireActiveStore from "@/components/layout/guards/RequireActiveStore";
import ImportedProductsPage from "@/features/admin/pages/ImportedProductsPage";

export default function Page() {
  return (
    <RequireActiveStore>
      <ImportedProductsPage />
    </RequireActiveStore>
  );
}
