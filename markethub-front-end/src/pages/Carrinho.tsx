import CardCarrinho from "../components/CardCarrinho";
import HeaderMain from "../components/HeaderMain";

const Carrinho = () => {
    return (
       <>
        <HeaderMain />
            <h1 className = 'font-bold text-[30px] mt-[45px] ml-[95px]'>
                Carrinho de Compras
            </h1>
            <CardCarrinho />
       </> 
       
    )
}
export default Carrinho;