import { NavLink } from "react-router-dom";

export default function NavMenu() {
  const links = [
    { label: "Home", to: "/" },
    { label: "Categorias", to: "/" },
    { label: "Novidades", to: "/" },
    { label: "Ofertas do Dia", to: "/" },
    { label: "Minha loja", to: "/cadastrarloja" },
  ];
  return (
    <nav className="w-full bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] text-white">
      <ul className="flex gap-14 py-3 px-[97px]">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                [
                  "cursor-pointer hover:opacity-80",
                  isActive ? "font-semibold underline underline-offset-4" : "",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
