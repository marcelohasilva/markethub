"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import RequireActiveStore from "../../components/shared/RequireActiveStore";
import Loja from "../../views/Loja";
import { StoreProfile } from "@/lib/stores";

export default function Page() {
  const searchParams = useSearchParams();
  const storeId = searchParams.get("id");
  const [store, setStore] = useState<StoreProfile | null>(null);

  useEffect(() => {
    if (storeId) {
      const token = localStorage.getItem("api_token");
      if (token) {
        fetch(`http://localhost:3000/v1/stores/${storeId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then(res => res.json())
          .then(data => setStore(data))
          .catch(console.error);
      }
    }
  }, [storeId]);

  return (
    <RequireActiveStore>
      <Loja storeData={store} />
    </RequireActiveStore>
  );
}
