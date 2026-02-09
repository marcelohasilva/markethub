import { FaHeart, FaRegHeart } from "react-icons/fa";
import DescribeProduct from "../components/DescribeProduct";
import HeaderMain from "../components/HeaderMain";
import InfoProduct from "../components/InfoProduct";
import ftProduto from '../assets/baixados.webp';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isFavorite, toggleFavorite } from "../Functions/Storage";
import type { FavoriteProduct } from "../Functions/Storage";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<FavoriteProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('http://localhost:8000/products');
        const data = await response.json();

        const list = Array.isArray(data) ? data : (data?.data ?? []);
        const selected = id ? list.find((item: any) => String(item.id) === String(id)) : list[0];

        if (!selected) {
          setError("Produto não encontrado");
          return;
        }

        const normalized: FavoriteProduct = {
          id: Number(selected.id),
          name: String(selected.name ?? ""),
          price: Number(selected.price ?? 0),
          image: ftProduto,
          description: String(selected.description ?? ""),
        };

        setProduct(normalized);
        setFavorite(isFavorite(normalized.id));
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError("Erro ao carregar o produto");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleToggleFavorite = () => {
    if (!product) return;
    const next = toggleFavorite(product);
    setFavorite(next);
  };

  if (loading) return <p className="text-center mt-20">Carregando produto...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
  if (!product) return null;

  return (
    <>
      <HeaderMain />

      <div className="mt-20">
        <div className="flex w-full">
          {/* Imagem do Produto */}
          <div className="flex items-center justify-center w-1/2 mt-14">
            <img
              className='sm:w-56 md:w-72 lg:w-96'
              src={product.image}
              alt={`Foto do produto ${product.name}`}
            />
          </div>

          {/* Info do Produto e Botão Favorite */}
          <div className="w-1/2">
            <div className="flex items-start justify-end mr-10">
              <button
                type="button"
                onClick={handleToggleFavorite}
                className="p-2 rounded-full hover:scale-110 transition"
                aria-label="Adicionar aos favoritos"
              >
                {favorite ? (
                  <FaHeart className="text-red-500 text-2xl" />
                ) : (
                  <FaRegHeart className="text-gray-400 text-2xl" />
                )}
              </button>
            </div>

            <InfoProduct/>
          </div>
        </div>

        {/* Descrição do Produto */}
        <DescribeProduct description={product.description || ""} />
      </div>
    </>
  );
};

export default Product;