"use client";
import HeaderA from "../components/HeaderA";
import { useRouter } from "next/navigation";

import ProdutoForm from "../components/produtoform";

const CadastroProduto = () => {
        const router = useRouter();
    return (
        <>
        <HeaderA />
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-xl mx-auto">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="mt-3 inline-flex items-center justify-center rounded-full border border-[#8F5CFF] px-4 py-1.5 text-sm font-semibold text-[#1A1C27] bg-white/70 hover:bg-white transition"
                        >
                            Voltar
                        </button>
                    </div>
                </div>
                <ProdutoForm/> 
       </>
    )
}
export default CadastroProduto;
