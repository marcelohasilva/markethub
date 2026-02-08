import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import CadastrarLoja from "../pages/CadastrarLoja";

const ProtectedCreateStore = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = user?.id;

  const [loading, setLoading] = useState(true);
  const [hasStore, setHasStore] = useState(false);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      setHasStore(false);
      return;
    }

    const checkStore = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/stores/${userId}`
        );

        const result = await response.json();

        // ✅ data é ARRAY
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

  if (loading) {
    return <p className="text-center mt-10">Verificando loja...</p>;
  }

  // 🚀 Se já tem loja → redireciona
  if (hasStore) {
    return <Navigate to="/loja" replace />;
  }

  // ✅ Se não tem loja → pode cadastrar
  return <CadastrarLoja />;
};

export default ProtectedCreateStore;
