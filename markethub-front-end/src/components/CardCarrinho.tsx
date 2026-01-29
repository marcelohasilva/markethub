import ftProduto from '../assets/baixados.webp';

const CardCarrinho = () => {
    return (
       <>
        <div className= 'flex ml-[95px] h-full'>
            
            <div className="flex gap-6 w-full h-[200px] bg-white mt-[30px] shadow-lg rounded-[1rem] border border-gray-100 p-10">
             
                <img className= 'h-30' src={ftProduto} alt="foto do produto"></img>
            
              <div>
                <h2 className= 'font-medium text-[20px]'>
                    Sapato da Nike Airforce XYZ 
                </h2>
                <h2 className= 'font-semibold text-[25px]'>
                  
                </h2>
              </div>
                
              <div className="ml-auto">
                 <h2 className= 'font-semibold text-[25px] ml-auto'>
                    R$ 50,00 
                </h2>
                  <div className= 'mt-10 bg-red-600 text-center text-white rounded-sm py-1 font-medium cursor-pointer hover:bg-red-700 shadow-xl'>
                    Remover
                  </div>
                
                </div>  
                
             
            </div>
      
        </div>
       </>
      
    )
}
export default CardCarrinho;