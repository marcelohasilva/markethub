import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import logo from "../assets/logo.png";

export default function SearchBar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 w-full lg:flex-row lg:items-center lg:gap-8 lg:w-auto">
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="Logo"
        className="h-10 w-fit cursor-pointer"
      />

      <div className="flex w-full lg:w-[520px]">
        <input
          type="text"
          placeholder="Pesquise"
          className="w-full h-11 px-4 rounded-l-xl border border-gray-300 focus:outline-none"
        />
        <button className="h-11 w-14 rounded-r-xl bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] text-white flex items-center justify-center">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
