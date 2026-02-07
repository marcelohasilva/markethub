import { FaHeart, FaRegHeart } from "react-icons/fa";
import DescribeProduct from "../components/DescribeProduct";
import { FormCadLoja } from "../components/FormCadLoja";
import HeaderMain from "../components/HeaderMain";
import InfoProduct from "../components/InfoProduct";
import ftProduto from '../assets/baixados.webp';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isFavorite, toggleFavorite } from "../Functions/Storage";
import type { FavoriteProduct } from "../Functions/Storage";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<FavoriteProduct | null>(null);
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(response => response.json())
            .then(data => {
                const list = Array.isArray(data) ? data : (data?.data ?? []);
                const selected = id ? list.find((item: any) => String(item.id) === String(id)) : list[0];
                if (!selected) return;
                const normalized: FavoriteProduct = {
                    id: Number(selected.id),
                    name: String(selected.name ?? ""),
                    price: Number(selected.price ?? 0),
                    image: ftProduto,
                };
                setProduct(normalized);
                setFavorite(isFavorite(normalized.id));
            })
            .catch(err => console.error("Erro ao buscar dados:", err));
    }, [id]);

    const handleToggleFavorite = () => {
        if (!product) return;
        const next = toggleFavorite(product);
        setFavorite(next);
    };

    return(
        <>
        
         <HeaderMain />
         <div className='mt-20'>
        <div className='flex w-full  '>
            
            <div className="flex items-center justify-center w-1/2 mt-14">

                <img
                className= 'flex  sm:w-56 md:w-72 lg:w-96'
                src={ftProduto} 
                alt="foto do produto"></img>

            </div>
            <div className="w-1/2 ">
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
            <InfoProduct name={product?.name} price={product?.price} />
            </div>
                
        </div>

        <DescribeProduct />
       
        </div>
       
        </>
        
    )
}

export default Product;