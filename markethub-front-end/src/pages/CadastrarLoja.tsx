import { FormCadLoja } from "../components/FormCadLoja";
import HeaderMain from "../components/HeaderMain";
import TextdoCadLoja from "../components/textdoCadLoja";

const CadastrarLoja = () => {
    return(
      <>
      <div className= 'bg-[#EBEBEB]'>
        <HeaderMain />
        <TextdoCadLoja />
             <FormCadLoja />

             </div>
    </>
    )
}
export default CadastrarLoja;