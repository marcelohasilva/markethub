"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CadastrarLoja from "../views/CadastrarLoja";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000";

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
        const response = await fetch(`${API_BASE_URL}/v1/stores`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
        const result = await response.json();

        const stores = Array.isArray(result) ? result : result?.data ?? [];
        setHasStore(stores.length > 0);
      } catch (error) {
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

  return <CadastrarLoja />;
};

export default ProtectedCreateStore;
