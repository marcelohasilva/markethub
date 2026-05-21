import { useEffect, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000";

const PhotoPerfil = () => {
    const [name, setName] = useState<string>("");
    const [describe, setDescribe] = useState<string>("");

    useEffect(() => {
        const token = localStorage.getItem("api_token");

        fetch(`${API_BASE_URL}/v1/stores/me`, {
            headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        })
            .then((response) => response.json())
            .then((data) => {
            if (data && (data.name || data.id)) {
            setName(data.name ?? "");
            setDescribe(data.description ?? "");
        } else {
                setName("");
                setDescribe("");
        }
            })
            .catch(() => {
                setName("");
                setDescribe("");
            });
    }, []);

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
