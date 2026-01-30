import { useState, type FormEvent } from "react"

export const FormCadLoja = () => {
    const [nameStore, setNameStore] = useState<string>("")
    const [describeStore, setDescribeStore] = useState<string>("")

    async function handleCreateStore(e: FormEvent) {
        e.preventDefault();

        if (!nameStore) {
            alert("O nome da loja é obrigatório.");
            return;
        }

        try {
            const payload = {
                name: nameStore.trim(),
                description: describeStore.trim(),
            };

            const response = await fetch('http://localhost:8000/stores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Erro ao criar loja");
            }

            alert("Loja criada com sucesso!");
            setNameStore("");
            setDescribeStore("");

        } catch (error: any) {
            console.error("Erro na requisição:", error);
            alert(error.message);
        }
    }

    return (
        <div className="w-full max-w-[480px] bg-white ml-[95px] mt-[30px] shadow-xl shadow-gray-200/50 rounded-[2rem] border border-gray-100 p-10">
            <h2 className='font-bold'>
                Crie sua loja gratuitamente
            </h2>
            <form onSubmit={handleCreateStore} className='space-y-6 mt-6'>
                <div className="flex items-stretch border border-gray-200 rounded-xl overflow-hidden group focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-50 transition-all">
                    <div className="flex items-center justify-center w-16 bg-white border-r border-gray-100">
                        <svg className="w-6 h-6 text-indigo-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {/* Ajustado camelCase abaixo */}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Nome da Loja" 
                        value={nameStore}
                        onChange={(e) => setNameStore(e.target.value)}
                        className="flex-1 p-4 outline-none text-gray-700 placeholder-gray-400" 
                    />
                </div>

                <div className="flex items-stretch border border-gray-200 rounded-xl overflow-hidden group focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-50 transition-all">
                    <div className="flex items-center justify-center w-16 bg-white border-r border-gray-100">
                        <svg className="w-6 h-6 text-indigo-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {/* Ajustado camelCase abaixo */}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Descrição da Loja"
                        value={describeStore}
                        onChange={(e) => setDescribeStore(e.target.value)}
                        className="flex-1 p-4 outline-none text-gray-700 placeholder-gray-400" 
                    />
                </div>

                <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-sm text-gray-600">
                        Eu concordo com os <span className="text-indigo-600 font-medium group-hover:underline">termos de uso</span>
                    </span>
                </label>

                <button type="submit" className="w-full cursor-pointer bg-indigo-600 py-4 px-6 rounded-xl text-white font-semibold bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] shadow-xl shadow-blue-200 hover:opacity-90 mt-4">
                    Criar Minha Loja
                </button>

                <div className='border-t border-gray-200 text-center pt-4'>
                    <p className='text-sm text-gray-500'>
                        Já tem uma loja? <a href="#" className="cursor-pointer text-indigo-700 font-bold hover:underline">Entrar</a>
                    </p>
                </div>
            </form>
        </div>
    )
}