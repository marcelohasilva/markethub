const InfoProduct = () => {
    return(
        <>
           <div className="flex flex-col font-bold text-[#282729] text-center mt-20 text-3xl gap-2 border">
            <div className= ''
            >SAPATOS NIKE
            </div>
            <div className= ''
            >CONFORTAVEL
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
            >R$ 250,00
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