import { FaHeart, FaTrash, FaStar, FaRegStar } from "react-icons/fa";
import img from "../assets/image.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CardProduto() {
    const [nameProduto, setNameProduto] = useState<string>('')
    const [priceProduct, setPriceProduct] = useState<number>(0)
    
    const navigate = useNavigate()

    useEffect(() => {
            fetch('http://localhost:8000/products')
                .then(response => response.json())
                .then(data => {
                    if (data && data.data && data.data.length > 0) {
                        const product = data.data[0]; // pega o primeiro produto
                        setNameProduto(product.name);
                        setPriceProduct(product.price);
                    }
                });
    }, []);

  return (
    <div 
    onClick={() =>navigate('/produto')}
     
    >
        <div className="w-[220px] bg-white rounded-2xl shadow-lg p-3 ml-[95px] mt-[25px]">
      <div className="relative bg-[#E0E0E0] rounded-xl h-[180px] flex items-center justify-center">
        <img src={img} 
       
       onClick={()=> navigate('/produto')}
        alt="Produto"
         className="h-[140px] object-contain hover:scale-150 transition"/>

        <div className="absolute top-3 right-3 flex flex-col gap-3">
          </div>
      </div>

      <h3 className="text-sm font-medium text-[#1A1C27] mt-3">
        {nameProduto}
      </h3>

      <div className="flex gap-1 text-indigo-500 my-1">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </div>

      <p className="text-sm font-bold text-[#1A1C27]">
       {priceProduct} no Pix
      </p>
      <p className="text-xs text-gray-600">
        ou 2x de R$ 20,00
      </p>

    </div>
    </div>
    
    
  );
}
