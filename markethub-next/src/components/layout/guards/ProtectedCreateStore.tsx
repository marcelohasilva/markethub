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
    const checkStore = async () => {
      const token = localStorage.getItem("api_token");

      if (!token) {
        setLoading(false);
        setHasStore(false);
        return;
      }

      try {
        // A rota permite iniciar o cadastro, mas impede criar uma segunda loja para o mesmo usuário.
        await fetchCurrentStore(token);
        setHasStore(true);
      } catch (error) {
        if (error instanceof ApiRequestError && error.status === 404) {
          setHasStore(false);
          return;
        }

        console.error("Erro ao verificar loja", error);
        setHasStore(false);
      } finally {
        setLoading(false);
      }
    };

    checkStore();
  }, []);

  useEffect(() => {
    if (hasStore) router.replace("/loja");
  }, [hasStore, router]);

  if (loading) return <p className="text-center mt-10">Verificando loja...</p>;
  if (hasStore) return null;

  return <CreateStorePage />;
};

export default ProtectedCreateStore;
