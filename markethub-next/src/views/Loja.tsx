"use client";

import { useEffect, useState } from "react";
import HeaderMain from "../components/shared/HeaderMain";
import NavLoja from "../components/loja/NavLoja";
import PhotoPerfil from "../components/loja/PhotoPefil";
import CardProduto, {
    type Product,
} from "../components/home/CardProduto";
import {
    ApiRequestError,
    CREATE_STORE_ROUTE,
    API_BASE_URL,
    fetchCurrentStore,
    StoreProfile,
} from "@/lib/stores";
import { useRouter } from "next/navigation";

type LojaProps = {
    storeData?: StoreProfile | null;
};

const Loja = ({ storeData }: LojaProps) => {
    const router = useRouter();

    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const isPublicStore = Boolean(storeData);

    useEffect(() => {
        let isMounted = true;

        async function loadProducts() {
            const token = localStorage.getItem("api_token");

            if (!storeData && !token) {
                router.replace("/login");
                return;
            }

            try {
                const currentStore =
                    storeData ?? await fetchCurrentStore(token as string);

                const storeProducts =
                    currentStore.products?.map((product: any) => ({
                        id: product.id,
                        name: product.name,
                        price: Number(product.price),
                        description: product.description ?? undefined,
                        productUrl: product.productUrl,
                        images: product.images,
                    })) ?? [];

                const hasImages = storeProducts.some(
                    (product) => product.images && product.images.length > 0
                );

                if (storeProducts.length > 0 && hasImages) {
                    if (isMounted) {
                        setProducts(storeProducts);
                    }
                    return;
                }

                const productHeaders: HeadersInit = token
                    ? { Authorization: `Bearer ${token}` }
                    : {};

                const response = await fetch(`${API_BASE_URL}/v1/products`, {
                    cache: "no-store",
                    headers: productHeaders,
                });

                const data = await response.json();

                console.log("DADOS CHEGANDO NO FRONTEND:", data);

                const list = Array.isArray(data)
                    ? data
                    : (data?.data ?? []);

                const filtered = list.filter(
                    (product: {
                        storeId?: string;
                        StoreId?: string;
                        store_id?: string;
                        userId?: string;
                        UserId?: string;
                        user_id?: string;
                    }) => {
                        const productStoreId =
                            product.storeId ??
                            product.StoreId ??
                            product.store_id;

                        const productUserId =
                            product.userId ??
                            product.UserId ??
                            product.user_id;

                        return (
                            String(productStoreId ?? "") ===
                                String(currentStore.id) ||
                            (currentStore.userId
                                ? String(productUserId ?? "") ===
                                  String(currentStore.userId)
                                : false)
                        );
                    }
                );

                if (isMounted) {
                    setProducts(
                        filtered.map((product: any) => ({
                            id: product.id,
                            name: product.name,
                            price: Number(product.price),
                            description: product.description ?? undefined,
                            productUrl: product.productUrl,
                            images: product.images,
                        }))
                    );
                }
            } catch (error) {
                if (
                    error instanceof ApiRequestError &&
                    error.status === 404
                ) {
                    router.replace(CREATE_STORE_ROUTE);
                    return;
                }

                if (
                    error instanceof ApiRequestError &&
                    error.status === 401
                ) {
                    localStorage.removeItem("api_token");
                    router.replace("/login");
                    return;
                }

                console.error("Erro ao buscar dados:", error);
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        loadProducts();

        return () => {
            isMounted = false;
        };
    }, [router, storeData]);

    return (
        <div className="min-h-screen bg-[#F3F4F6]">
            <HeaderMain />

            <section className="w-full px-4 pt-6 md:px-6 lg:px-[97px]">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#6B3CF1] to-[#1A7FF0] px-6 py-10 md:px-10">

                    <div className="pointer-events-none absolute left-6 top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                    <div className="pointer-events-none absolute right-10 top-6 h-48 w-48 rounded-full border border-white/15" />

                    <div className="pointer-events-none absolute right-16 top-12 h-28 w-28 rounded-full border border-white/20" />

                    <PhotoPerfil storeName={storeData?.name} />
                </div>

                <NavLoja canManageStore={!isPublicStore} />
            </section>


            <section className="w-full px-4 pb-16 pt-8 md:px-6 lg:px-[97px]">

                <div className="flex flex-wrap items-center justify-between gap-4">

                    <h2 className="text-lg font-semibold text-[#1A1C27]">
                        Todos os produtos
                    </h2>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Ordenar por:</span>

                        <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                            <option>Mais populares</option>
                            <option>Menor preco</option>
                            <option>Maior preco</option>
                        </select>
                    </div>

                </div>


                {isLoading ? (

                    <p className="mt-6 text-sm text-gray-500">
                        Carregando produtos da sua loja...
                    </p>

                ) : products.length === 0 ? (

                    <p className="mt-6 text-sm text-gray-500">
                        Nenhum produto cadastrado nessa loja.
                    </p>

                ) : (

                    <div className="mt-6 grid grid-cols-2 gap-4 pb-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

                         {products.map(product => (
                                                    <CardProduto 
                            key={product.id}
                            product={product}
                        />
                    ))}                                          

                    </div>

                )}

            </section>
        </div>
    );
};

export default Loja;