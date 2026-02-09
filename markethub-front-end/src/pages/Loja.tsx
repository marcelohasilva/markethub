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
         <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap gap-6 mt-6 pb-10">
                {products.map(product => (
                    <CardProduto 
                    key={product.id}
                    product={product}
                    />
                ))}
                </div>
            </div>
            </div>
        </>
    )
}
export default Loja;