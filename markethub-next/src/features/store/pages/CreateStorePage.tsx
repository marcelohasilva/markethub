"use client";
import HeaderMain from "@/components/layout/HeaderMain";
import { CreateStoreForm } from "../components/CreateStoreForm";
import CreateStoreIntro from "../components/CreateStoreIntro";


const CreateStorePage = () => {
    return(
      <>
      <div className= ''>
        <HeaderMain />
        <CreateStoreIntro />

          <div className="flex ">
            <CreateStoreForm />
           <img src="/assets/art.png" alt="Imagem de cadastro de loja" className="mx-auto w-155 h-auto" />
          </div>
            
 
             </div>
    </>
    )
}
export default CreateStorePage;
