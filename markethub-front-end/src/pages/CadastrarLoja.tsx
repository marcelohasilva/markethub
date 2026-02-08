import { FormCadLoja } from "../components/FormCadLoja";
import HeaderMain from "../components/HeaderMain";
import TextdoCadLoja from "../components/textdoCadLoja";
import Arte from '../assets/art.png';


const CadastrarLoja = () => {
    return(
      <>
      <div className= 'bg-[#EBEBEB]'>
        <HeaderMain />
        <TextdoCadLoja />

          <div className="flex ">
            <FormCadLoja />
           <img src={Arte} alt="Imagem de cadastro de loja" className="mx-auto w-155 h-auto" />
          </div>
            

             </div>
    </>
    )
}
export default CadastrarLoja;