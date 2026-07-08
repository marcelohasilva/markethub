"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiBox, FiInfo, FiStar, FiPhone, FiPlusSquare } from "react-icons/fi";

interface NavLojaProps {
    canManageStore: boolean;
}

const NAV_ITEMS = [
	{ label: "Produtos", to: "/loja", icon: FiBox },
	{ label: "Sobre", to: "/loja", icon: FiInfo },
	{ label: "Avaliações", to: "/loja", icon: FiStar },
	{ label: "Contato", to: "/loja", icon: FiPhone },
	{ label: "Cadastrar Produto", mobileLabel: "Cadastrar", to: "/cadastrarproduto", icon: FiPlusSquare }
];

const NavLoja = ({ canManageStore }: NavLojaProps) => {
	const [active, setActive] = useState("Produtos");
	const router = useRouter();

	return (
		<div className="w-full flex justify-center -mt-6 px-4">
			<nav className="w-full z-1 max-w-[920px] rounded-2xl bg-white shadow-md md:h-auto">
				<ul className="flex h-16 flex-nowrap items-center gap-2 overflow-x-auto px-3 py-2 md:h-auto md:gap-4 md:px-6 md:py-3 lg:gap-6">
					{NAV_ITEMS.map((item) => {
						const Icon = item.icon;
						const isActive = active === item.label;
						const isAction = item.label === "Cadastrar Produto";
						return (
							<li key={item.label}>
								<button
									type="button"
									onClick={() => {
										setActive(item.label);
										if (item.to) router.push(item.to);
									}}
									className={`flex h-12 cursor-pointer flex-col items-center gap-1 whitespace-nowrap rounded-xl px-2 py-1 text-[11px] font-semibold leading-tight transition md:h-auto md:min-w-0 md:flex-row md:gap-2 md:px-3 md:py-2 md:text-sm ${
										isAction
											? "bg-[#F3F4F6] text-[#1A1C27]"
											: isActive
											? "text-[#6B3DF2]"
											: "text-gray-500 hover:text-[#1A1C27]"
									}`}
								>
									{Icon ? <Icon className="h-4 w-4 md:hidden" /> : null}
									{Icon ? <Icon className="hidden h-4 w-4 md:block" /> : null}
									<span className="md:hidden">{item.mobileLabel ?? item.label}</span>
									<span className="hidden md:inline">{item.label}</span>
								</button>
								
							</li>
						);
					})}
				</ul>
				
			</nav>
		</div>
	);
};

export default NavLoja;
