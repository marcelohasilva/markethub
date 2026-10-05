"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CreateStorePage from "@/features/store/pages/CreateStorePage";
import { ApiRequestError, fetchCurrentStore } from "@/lib/stores";

const ProtectedCreateStore = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [hasStore, setHasStore] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkStore = async () => {
      const token = localStorage.getItem("api_token");

      if (!token) {
        router.replace("/login");
        return;
      }

      try {
        // A rota permite iniciar o cadastro, mas impede criar uma segunda loja para o mesmo usuário.
        await fetchCurrentStore(token);
        if (isMounted) {
          setHasStore(true);
        }
      } catch (error) {
        if (error instanceof ApiRequestError && error.status === 404) {
          if (isMounted) {
            setHasStore(false);
          }
          return;
        }

        if (error instanceof ApiRequestError && error.status === 401) {
          localStorage.removeItem("api_token");
          router.replace("/login");
          return;
        }

        console.error("Erro ao verificar loja", error);
        if (isMounted) {
          setHasStore(false);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    checkStore();

    return () => {
      isMounted = false;
    };
  }, [router]);

  useEffect(() => {
    if (hasStore) router.replace("/loja");
  }, [hasStore, router]);

  if (loading) return <p className="text-center mt-10">Verificando loja...</p>;
  if (hasStore) return null;

  return <CreateStorePage />;
};

export default ProtectedCreateStore;
