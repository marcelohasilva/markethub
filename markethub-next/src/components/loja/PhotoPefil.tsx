import { useEffect, useState } from "react";
import { fetchCurrentStore } from "@/lib/stores";

type PhotoPerfilProps = {
    storeName?: string;
};

const PhotoPerfil = ({ storeName }: PhotoPerfilProps) => {
    const [name, setName] = useState<string>("");
    const [describe, setDescribe] = useState<string>("");

    useEffect(() => {
        if (storeName) {
            setName(storeName);
            setDescribe("");
            return;
        }

        const token = localStorage.getItem("api_token");
        if (!token) {
            return;
        }

        fetchCurrentStore(token)
            .then((store) => {
                setName(store.name ?? "");
                setDescribe(store.description ?? "");
            })
            .catch(() => {
                setName("");
                setDescribe("");
            });
    }, [storeName]);

    return (
        <div className="relative z-10 flex flex-col items-center text-center text-white">
            <div className="relative">
                <img
                    className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg md:h-28 md:w-28"
                    src="/assets/baixados.webp"
                    alt="Foto da loja"
                />
                <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-400" />
            </div>

            <h1 className="mt-4 text-2xl font-semibold md:text-3xl">
                {name}
            </h1>
            <p className="mt-1 text-sm text-white/90 md:text-base">
                {describe}
            </p>
        </div>
    );
};

export default PhotoPerfil;
