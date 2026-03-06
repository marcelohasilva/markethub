"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CadastrarLoja from "../views/CadastrarLoja";

const ProtectedCreateStore = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [hasStore, setHasStore] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setUserId(user?.id ?? null);
  }, []);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      setHasStore(false);
      return;
    }

    const checkStore = async () => {
      try {
        const response = await fetch(`http://localhost:8000/stores/${userId}`);
        const result = await response.json();

        if (result.success && Array.isArray(result.data) && result.data.length > 0) {
          setHasStore(true);
        } else {
          setHasStore(false);
        }
      } catch (error) {
        console.error("Erro ao verificar loja", error);
        setHasStore(false);
      } finally {
        setLoading(false);
      }
    };

    checkStore();
  }, [userId]);

  useEffect(() => {
    if (hasStore) router.replace("/loja");
  }, [hasStore, router]);

  if (loading) return <p className="text-center mt-10">Verificando loja...</p>;
  if (hasStore) return null;

  return <CadastrarLoja />;
};

export default ProtectedCreateStore;
