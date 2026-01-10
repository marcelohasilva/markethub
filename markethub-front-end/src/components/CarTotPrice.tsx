const CarTotPrice = () => {
    return(
       <>
        <div className='ml-[80px] mt-[30px] '>
            <div className="bg-white w-[400px] ml-[20px] shadow-xl shadow-lg rounded-[1rem] border border-gray-100 p-10 ">
                        <h2 className= 'font-bold'>
                            Resumo
                            </h2>
                           <div className =''>
                             <div className= 'w-full border-t border-gray-200 text-center pt-4 mt-[25px]'></div>
                                
                               <div className ='flex'>
                                 <p className='mt-[15px] text-[#6F7482]'>
                                    Subtotal
                                </p>
                                <p className='mt-[15px] ml-auto font-bold'>
                                    R$100,00
                                </p>
                                </div> 
                               
                               <div className ='flex'>
                                 <p className='mt-[15px] text-[#6F7482]'>
                                    Entrega
                                </p>
                                <p className='mt-[15px] ml-auto font-bold'>
                                    Grátis
                                </p>
                                </div>
                            <div className= 'w-full border-t border-gray-200 text-center pt-4 mt-[25px]'></div>
                        
                        <div className ='flex'>
                            <h2 className= 'font-bold'>
                                Total
                                    </h2>
                            
                             <p className=' ml-auto font-bold'>
                                    R$100,00
                                </p>
                        </div>
                            <button className="w-full bg-indigo-600 py-4 px-6 rounded-xl text-white font-semibold bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] shadow-xl shadow-blue-200 hover:opacity-90 mt-[25px]">
                                Criar Minha Loja
                                    </button>   

                            </div> 
                           
                    </div>  

        </div>
       </>
      
       
    )
}
export default CarTotPrice;