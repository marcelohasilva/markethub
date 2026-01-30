import CardProduto from "../components/CardProduto";
import HeaderMain from "../components/HeaderMain";

const Home = () => {
    return(
        <>
         <HeaderMain />
         <h1 className="text-[#282729]  mt-5 text-3xl ml-24 font-bold">
            Destaques
         </h1>
        <CardProduto />
        </>
       
    )
}

export default Home;