"use client";
import { FormCadLoja } from "../components/loja/FormCadLoja";
import HeaderMain from "../components/shared/HeaderMain";
import TextdoCadLoja from "../components/loja/textdoCadLoja";


const CadastrarLoja = () => {
    return(
      <>
      <div className= ''>
        <HeaderMain />
        <TextdoCadLoja />

          <div className="flex ">
            <FormCadLoja />
           <img src="/assets/art.png" alt="Imagem de cadastro de loja" className="mx-auto w-155 h-auto" />
          </div>
            
 
             </div>
    </>
    )
}
export default CadastrarLoja;
