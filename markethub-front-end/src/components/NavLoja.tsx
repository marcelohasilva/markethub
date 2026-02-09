import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NAV_ITEMS = [
	 { label: "Home", to: "/." },
    { label: "Produtos", to: "" },
    { label: "Sobre", to: "" },
    { label: "Avaliações", to: "" },
    { label: "Contato", to: "" },
    { label: "Cadastrar Produto", to: "/cadastrarproduto" }
];

const NavLoja = () => {
	const [active, setActive] = useState("Produtos");
	const navigate = useNavigate();

	return (
		<div className="w-full flex justify-center mt-8 px-4">
			<nav className="w-full max-w-[920px] bg-gray-100 rounded-2xl shadow-sm">
				<ul className="flex flex-wrap items-center gap-6 px-9 py-3">
					{NAV_ITEMS.map((item) => (
						<li key={item.label}>
							<button
								type="button"
								onClick={() => {
									setActive(item.label);
									navigate(item.to);
								}}
								className={`text-sm md:text-base font-semibold transition ${
									active === item.label
										? "text-[#1A1C27]"
										: "text-gray-500 hover:text-[#1A1C27]"
								}`}
							>
								{item.label}
							</button>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default NavLoja;
