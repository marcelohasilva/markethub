import RequireActiveStore from "@/components/layout/guards/RequireActiveStore";
import ProductCreatePage from "@/features/products/ProductCreatePage";

export default function Page() {
  return (
    <RequireActiveStore>
      <ProductCreatePage />
    </RequireActiveStore>
  );
}
