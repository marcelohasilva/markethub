import ButoonCar from "../components/butoonCAr";
import CardCarrinho from "../components/CardCarrinho";
import CarTotPrice from "../components/CarTotPrice";
import HeaderMain from "../components/HeaderMain";

const Carrinho = () => {
    return (
       <>
        <HeaderMain />
            <h1 className = 'font-bold text-[30px] mt-[45px] ml-[95px]'>
                Carrinho de Compras
            </h1>


        <div className='flex items-start'>
        
    <div className='flex flex-col w-[60%]'>
        <CardCarrinho />
            <CardCarrinho />
            
            
            
            </div>
      
        <div className=' sticky top-10'>
            <CarTotPrice />
        </div>
          
        </div>
        <ButoonCar />
      
        
        
       </> 
       
    )
}
export default Carrinho;