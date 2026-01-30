import { FormCadLoja } from "../components/FormCadLoja";
import HeaderMain from "../components/HeaderMain";
import InfoProduct from "../components/InfoProduct";

const Product = () => {
    return(
        <>
        <HeaderMain />
        <div className='flex w-full border '>
            
            <div className="w-1/2 border">
            <FormCadLoja />
            </div>

            <div className="w-1/2 border">
            <InfoProduct />
            </div>
                
        </div>
       
        </>
        
    )
}

export default Product;