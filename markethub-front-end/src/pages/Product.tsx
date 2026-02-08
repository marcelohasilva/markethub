import { FaHeart, FaRegHeart } from "react-icons/fa";
import DescribeProduct from "../components/DescribeProduct";
import HeaderMain from "../components/HeaderMain";
import InfoProduct from "../components/InfoProduct";
import ftProduto from "../assets/baixados.webp";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isFavorite, toggleFavorite } from "../Functions/Storage";
import type { FavoriteProduct } from "../Functions/Storage";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<FavoriteProduct | null>(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:8000/products/${id}`)
      .then(res => res.json())
      .then(data => {
        if (!data?.data) return;

        const normalized: FavoriteProduct = {
          id: Number(data.data.id),
          name: String(data.data.name),
          price: Number(data.data.price),
          image: ftProduto,
        };

        setProduct(normalized);
        setFavorite(isFavorite(normalized.id));
      })
      .catch(err => console.error("Erro ao buscar produto:", err));
  }, [id]);

  const handleToggleFavorite = () => {
    if (!product) return;
    setFavorite(toggleFavorite(product));
  };

  if (!product) {
    return <p className="text-center mt-20">Carregando produto...</p>;
  }

  return (
    <>
      <HeaderMain />

      <div className="mt-20">
        <div className="flex w-full">
          <div className="flex items-center justify-center w-1/2 mt-14">
            <img
              className="sm:w-56 md:w-72 lg:w-96"
              src={product.image}
              alt="foto do produto"
            />
          </div>

          <div className="w-1/2">
            <div className="flex items-start justify-end mr-10">
              <button
                type="button"
                onClick={handleToggleFavorite}
                className="p-2 rounded-full hover:scale-110 transition"
              >
                {favorite ? (
                  <FaHeart className="text-red-500 text-2xl" />
                ) : (
                  <FaRegHeart className="text-gray-400 text-2xl" />
                )}
              </button>
            </div>

            <InfoProduct product={product} />
          </div>
        </div>

        <DescribeProduct />
      </div>
    </>
  );
};

export default Product;
