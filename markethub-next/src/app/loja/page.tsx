"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import RequireActiveStore from "../../components/shared/RequireActiveStore";
import Loja from "../../views/Loja";
import { fetchCurrentStore, fetchStoreByIdOrFromList, StoreProfile } from "@/lib/stores";

export default function Page() {
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
      <Loja storeData={store} canManageStore={canManageStore} />
    </RequireActiveStore>
  );
}
