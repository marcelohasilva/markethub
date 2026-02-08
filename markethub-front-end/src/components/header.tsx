import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 w-full h-16 md:h-20 bg-white flex items-center justify-start md:justify-start px-4 md:px-0 shadow-sm z-50">
      <img onClick={() => navigate("/")}
        className="h-40 md:h-37 w-auto object-contain cursor-pointer"
        src={logo}
        alt="Logo"
      />
    </header>
  );
}
