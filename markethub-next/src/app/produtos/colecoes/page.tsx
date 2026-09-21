import RequireActiveStore from "@/components/layout/guards/RequireActiveStore";
import ProductCollectionsPage from "@/features/admin/pages/ProductCollectionsPage";

export default function Page() {
  return (
    <RequireActiveStore>
      <ProductCollectionsPage />
    </RequireActiveStore>
  );
}
