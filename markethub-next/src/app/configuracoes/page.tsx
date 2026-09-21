import RequireActiveStore from "@/components/layout/guards/RequireActiveStore";
import StoreSettingsPage from "@/features/store/pages/StoreSettingsPage";

export default function Page() {
  return (
    <RequireActiveStore>
      <StoreSettingsPage />
    </RequireActiveStore>
  );
}
