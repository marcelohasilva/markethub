"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import RequireActiveStore from "@/components/layout/guards/RequireActiveStore";
import StorePage from "@/features/store/StorePage";
import { fetchCurrentStore, fetchStoreByIdOrFromList, StoreProfile } from "@/lib/stores";

function StoreRouteContent() {
  const searchParams = useSearchParams();
  const storeId = searchParams.get("id") ?? undefined;
  const [store, setStore] = useState<StoreProfile | null>(null);
  const [canManageStore, setCanManageStore] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("api_token");

    if (!token) {
      return;
    }

    const authToken = token;

    async function loadStore() {
      try {
        if (storeId) {
          const [viewedStore, currentStore] = await Promise.all([
            fetchStoreByIdOrFromList(authToken, storeId),
            fetchCurrentStore(authToken),
          ]);

          setStore(viewedStore);
          setCanManageStore(String(viewedStore.id) === String(currentStore.id));
          return;
        }

        const currentStore = await fetchCurrentStore(authToken);

        setStore(currentStore);
        setCanManageStore(true);
      } catch (error) {
        console.error(error);
      }
    }

    loadStore();
  }, [storeId]);

  return (
    <RequireActiveStore>
      <StorePage storeData={store} canManageStore={canManageStore} />
    </RequireActiveStore>
  );
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <StoreRouteContent />
    </Suspense>
  );
}
