import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import logo from "../assets/logo.png";

export default function SearchBar() {
  const navigate = useNavigate();
  return (
   <div className="flex items-center ml-[37px] mt-[-30px] gap-[35px]">
    <div className="flex items-center">
      <img onClick={() => navigate("/")} className="h-auto md:h-37 w-auto" src={logo} alt="Logo" />
   </div>
   <div className="flex items-center w-[700px] ml-11">
    <input type="text" placeholder="pesquise" className="w-full h-11 px-4 rounded-l-xl border border-gray-300 focus:outline-none" />
    <button className="h-11 w-[100px] px-4 rounded-r-xl bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] text-white flex items-center justify-center cursor-pointer">
        <Search className="w-5 h-5"/>
    </button>
   </div>
   </div>
  );
}