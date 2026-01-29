export default function NavMenu() {
    const links = ["Home", "Categorias", "Novidades", "Ofertas do Dia", "Minha loja"];
  return (
    <nav className="w-full bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] text-white mt-[-30px] box-shadow-md border-t border-white-200 inset-shadow-sm inset-shadow-white-500">
        <ul className="flex justify-left ml-[95px] gap-[54px] py-3">
            {links.map((link) => (
                <li key={link} className="cursor-pointer hover:opacity-80 transition-opacity duration-300">
                    {link}
                </li>
            ))}
        </ul>
    </nav>
  );
}