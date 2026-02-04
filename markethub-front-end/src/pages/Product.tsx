import DescribeProduct from "../components/DescribeProduct";
import { FormCadLoja } from "../components/FormCadLoja";
import HeaderMain from "../components/HeaderMain";
import InfoProduct from "../components/InfoProduct";
import ftProduto from '../assets/baixados.webp';

const Product = () => {
    return(
        <>
        
         <HeaderMain />
         <div className='mt-20'>
        <div className='flex w-full  '>
            
            <div className="flex items-center justify-center w-1/2 mt-14">

                <img
                className= 'flex  sm:w-56 md:w-72 lg:w-96'
                src={ftProduto} 
                alt="foto do produto"></img>

            </div>

            <div className="w-1/2 ">
            <InfoProduct />
            </div>
                
        </div>

        <DescribeProduct />
       
        </div>
       
        </>
        
    )
}

export default Product;