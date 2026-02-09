import { useEffect, useState } from 'react';
import ftProduto from '../assets/baixados.webp';

const PhotoPerfil = () => {
     const [name , setName] = useState<string>('')
     const [describe , setDescribe] = useState<string>('')


    useEffect(() => {
        fetch('http://localhost:8000/stores')
        .then(response => response.json())
        .then(data => {
            if (data && data.data && data.data.length > 0) {
                    const store = data.data[0]; // pega a primeira loja
                    setName(store.name);
                    setDescribe(store.description || '');
                }
            });
        }, [])

    


    return (
        <>
         <img className= ' h-35 rounded-full mx-auto -mt-15 relative shadow-xl' 
           src={ftProduto} 
           alt="foto do produto"></img>
           
        <div className='text-center'>
            <h1 className=' font-bold text-4xl mt-2'>
                {name}
            </h1>
            <p className='text-gray-600 text-2xl mt-2'>
                {describe}
            </p>
        </div>
          
        </>          
    )       
};

export default PhotoPerfil;
