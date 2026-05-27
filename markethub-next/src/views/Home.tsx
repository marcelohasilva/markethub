"use client";
import { useState, useEffect } from "react";
import CardProduto from "../components/home/CardProduto";
import HeaderMain from "../components/shared/HeaderMain";
import HomeCarousel from "../components/home/HomeCarousel";
import HomeMarketplaces from "../components/home/HomeMarketplaces";
import HomeCategories from "../components/home/HomeCategories";
import HomeFooter from "../components/home/HomeFooter";

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
                const filtered = list.filter((item: Product) => {
                    const name = String(item?.name ?? "").toLowerCase();
                    return name && !name.includes("adicionar produto");
                });
                setProducts(filtered);
            })
            .catch(err => console.error("Erro ao buscar dados:", err));
        }, []);
    return(
        <>
                 <HeaderMain />
                 <div className="min-h-screen">
                        <div className="w-full px-4 md:px-8 lg:px-[97px]">
                            <HomeCarousel />
                            <div className="mt-8 flex items-center justify-between">
                                <h1 className="text-[#282729] text-xl md:text-3xl font-bold">
                                    Destaques
                                </h1>
                                <button
                                    type="button"
                                    className="text-sm font-semibold text-[#6B3DF2] hover:opacity-80"
                                >
                                    Ver todos
                                </button>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-4 pb-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
