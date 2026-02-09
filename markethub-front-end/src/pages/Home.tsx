import { useState, useEffect } from "react";
import CardProduto from "../components/CardProduto";
import HeaderMain from "../components/HeaderMain";

interface Product {
    id: number;
    name: string;
    price: number;
}
const Home = () => {
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
         <HeaderMain />
         <h1 className="text-[#282729]  mt-5 text-3xl ml-24 font-bold">
            Destaques
         </h1>
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

export default Home;