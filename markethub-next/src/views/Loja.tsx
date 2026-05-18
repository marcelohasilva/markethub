"use client";
import { useEffect, useState } from "react";
import HeaderMain from "../components/HeaderMain";
import NavLoja from "../components/NavLoja";
import PhotoPerfil from "../components/PhotoPefil";
import CardProdutoLoja, { type StoreProduct } from "../components/CardProdutoLoja";

const Loja = () => {

    const [products, setProducts] = useState<StoreProduct[]>([])
    
         useEffect(() => {
             fetch("/api/products", { cache: "no-store" })
                     .then(response => response.json()) 
                    .then(data => {
                        const list = Array.isArray(data) ? data : (data?.data ?? []);
                        setProducts(list);
                     })
                    .catch(err => console.error("Erro ao buscar dados:", err)); 
            }, []);

            
    return(
        <div className="min-h-screen bg-[#F3F4F6]">
            <HeaderMain />

            <section className="w-full px-4 pt-6 md:px-6 lg:px-[97px]">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#6B3CF1] to-[#1A7FF0] px-6 py-10 md:px-10">
                    <div className="pointer-events-none absolute left-6 top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                    <div className="pointer-events-none absolute right-10 top-6 h-48 w-48 rounded-full border border-white/15" />
                    <div className="pointer-events-none absolute right-16 top-12 h-28 w-28 rounded-full border border-white/20" />
                    <PhotoPerfil />
                </div>

                <NavLoja />
            </section>

            <section className="w-full px-4 pb-16 pt-8 md:px-6 lg:px-[97px]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <h2 className="text-lg font-semibold text-[#1A1C27]">Todos os produtos</h2>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Ordenar por:</span>
                        <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                            <option>Mais populares</option>
                            <option>Menor preco</option>
                            <option>Maior preco</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                    {products.map((product, index) => (
                        <CardProdutoLoja
                            key={product.id}
                            product={product}
                            isFeatured={index === 0}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}
export default Loja;
