import { useEffect, useState } from "react";
import HeaderB from "../components/HeaderB";
import NavLoja from "../components/NavLoja";
import PhotoPerfil from "../components/PhotoPefil";
import type { Product } from "../components/CardProduto";
import CardProduto from "../components/CardProduto";

const Loja = () => {

      const[products, setProducts] = useState<Product[]>([])
    
         useEffect(() => {
             fetch('http://localhost:8000/products')
                     .then(response => response.json()) 
                    .then(data => {
                        const list = Array.isArray(data) ? data : (data?.data ?? []);
                        setProducts(list);
                     })
                    .catch(err => console.error("Erro ao buscar dados:", err)); 
            }, []);

            
    return(
        <>
        <HeaderB />
        <PhotoPerfil /> 
        <NavLoja />
         <div className='flex flex-wrap gap-4 mt-6 mb-10 ml-24'>
                    {products.map(product => (
                        <CardProduto 
                        key={product.id}
                        product={product}
                        />
                    ))}
                </div>
        </>
    )
}
export default Loja;