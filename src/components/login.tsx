import React from "react";


export default function Login() {
  return (
    <div className=' bg-[#EBEBEB] flex flex-col w-[60%] h-full '>
      <div className='flex flex-col items-center pt-[30px]'>
        <h1 className='bg-clip-text bg-gradient-to-r from-[#186BC4] to-[#6D44C5] text-transparent font-bold text-[40px] '>Cadastrar</h1>
      
      <form className='flex flex-col  w-[400px] '>
        
        <div className=''>
        <input type="email"
        id='email'
        placeholder ='Email' 
           className="bg-[#F9FAFB] border border-gray-300 rounded-lg px-2 py-2   mt-[15px] w-full"/>
           </div>

           <div>
            <input type="senha" 
            placeholder='senha'
            className='bg-[#F9FAFB] border border-gray-300 rounded-lg px-2   py-2 mt-[15px] mb-[15px] w-full'/>
           </div>
           
           <button 
           type='submit'
           className='cursor-pointer font-bold text-white bg-gradient-to-r from-[#186BC4] to-[#6D44C5] rounded-lg p-2 '>
            PROSSEGUIR
           </button>
         <div className="border border-gray-300 mt-[50px]"></div>
         </form>
     </div>
    </div>
  );
}