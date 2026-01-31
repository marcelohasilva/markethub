import { useEffect, useState } from "react";

const InfoProduct = () => {
    const [nameProduto, setNameProduto] = useState<string>('')
    const [priceProduct, setPriceProduct] = useState<number>(0)
    
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
    return(
        <>
           <div className="flex flex-col font-bold text-[#282729] text-center mt-20 text-3xl gap-2 ">
            <div className= ''
            >{nameProduto}
            </div>
            <div className= ''
            >
            </div>
            
        </ div>

        <div className="flex gap-1 text-center justify-center mr-4">
            <span className="bg-gradient-to-r from-[#8F5CFF] to-[#1782ED] bg-clip-text text-transparent text-2xl">★★★</span>
            <span className="text-gray-300 text-2xl ">★★</span>
            <p className="text-gray-500 text-xs mt-2">
                (120 avaliações)
            </p>
        </div>

        <div className= 'text-3xl font-bold text-[#282729] text-center mr-16 mt-10'
            >{priceProduct}
            </div>
            <div className="flex flex-col items-center">
               <button type="submit" className=" cursor-pointer bg-indigo-600 py-4 px-12 rounded-[6px] text-white font-semibold bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] shadow-xl shadow-blue-200 hover:opacity-90 mt-4">
                    Comprar Agora
                </button>

                 <button type="submit" className=" cursor-pointer bg-indigo-600 py-4 px-6 rounded-[6px] text-white font-semibold bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] shadow-xl shadow-blue-200 hover:opacity-90 mt-4">
                    Adicionar ao Carrinho
                </button>
            </div>
        </>
     
        
    )
}
export default InfoProduct;