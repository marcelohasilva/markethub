"use client";
import { useState, useEffect } from "react";
import CardProduto from "../components/CardProduto";
import HeaderMain from "../components/HeaderMain";
import HomeCarousel from "../components/HomeCarousel";
import HomeMarketplaces from "../components/HomeMarketplaces";
import HomeCategories from "../components/HomeCategories";
import HomeFooter from "../components/HomeFooter";

interface Product {
    id: number;
    name: string;
    price: number;
}
const Home = () => {
    const[products, setProducts] = useState<Product[]>([])

     useEffect(() => {
         fetch("/api/products", { cache: "no-store" })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const list = Array.isArray(data) ? data : (data?.data ?? []);
                setProducts(list);
            })
            .catch(err => console.error("Erro ao buscar dados:", err));
        }, []);
    return(
        <>
                 <HeaderMain />
                 <div className="min-h-screen">
                        <div className="w-full px-4 md:px-8 lg:px-[97px]">
                            <HomeCarousel />
                            <h1 className="text-[#282729] mt-8 text-3xl font-bold">
                                Destaques
                            </h1>
                            <div className="flex flex-wrap gap-6 mt-6 pb-10">
                                {products.map(product => (
                                    <CardProduto 
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </div>
                            <HomeMarketplaces />
                            <HomeCategories />
                        </div>
                    </div>
                    <HomeFooter />
        </>
       
    )
}

export default Home;
