"use client";
import { useRouter } from "next/navigation";

const ButoonCar = () => {
        const router = useRouter();

        return(
                 <button
                        onClick={() => router.push("/")}
                        className="w-[53%] ml-[95px] bottom-10 fixed bg-indigo-600 py-4 px-6 rounded-xl text-white font-semibold opacity-90 bg-gradient-to-r from-[#1A7FF0] to-[#8F5CFF]  hover:opacity-100 transition cursor-pointer"
                    >
                        Continuar Comprando
                    </button>
        )
}
export default ButoonCar;