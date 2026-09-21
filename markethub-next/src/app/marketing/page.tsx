import RequireActiveStore from "@/components/layout/guards/RequireActiveStore";
import MarketingPage from "@/features/admin/pages/MarketingPage";

export default function Page() {
  return (
    <RequireActiveStore>
      <MarketingPage />
    </RequireActiveStore>
  );
}
