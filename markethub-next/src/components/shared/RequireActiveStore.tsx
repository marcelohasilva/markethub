"use client";

import { type PropsWithChildren, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ApiRequestError, CREATE_STORE_ROUTE, fetchCurrentStore } from "@/lib/stores";

export default function RequireActiveStore({ children }: PropsWithChildren) {
  const router = useRouter();
  const [canAccessPanel, setCanAccessPanel] = useState(false);
  const [isCheckingStore, setIsCheckingStore] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function checkStore() {
      const token = localStorage.getItem("api_token");

      if (!token) {
        router.replace("/login");
        return;
      }

      try {
        await fetchCurrentStore(token);

        if (isMounted) {
          setCanAccessPanel(true);
        }
      } catch (error) {
        if (error instanceof ApiRequestError && error.status === 404) {
          router.replace(CREATE_STORE_ROUTE);
          return;
        }

        if (error instanceof ApiRequestError && error.status === 401) {
          router.replace("/login");
          return;
        }

        console.error("Erro ao verificar loja ativa", error);
      } finally {
        if (isMounted) {
          setIsCheckingStore(false);
        }
      }
    }

    checkStore();

    return () => {
      isMounted = false;
    };
  }, [router]);

  if (isCheckingStore || !canAccessPanel) {
    return <p className="mt-10 text-center text-sm text-gray-600">Verificando loja...</p>;
  }

  return children;
}
