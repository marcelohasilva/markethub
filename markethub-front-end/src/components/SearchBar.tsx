import { Search } from "lucide-react";
import logo from "../assets/logo.png";

export default function SearchBar() {
  return (
   <div className="flex items-center gap-6 ml-40 mt-[-33px]">
    <div className="flex items-center gap-2">
      <img className="h-40 md:h-37 w-auto" src={logo} alt="Logo" />
   </div>
   <div className="flex items-center w-[650px] ml-11">
    <input type="text" placeholder="pesquise" className="w-full h-11 px-4 rounded-l-xl border border-gray-300 focus:outline-none" />
    <button className="h-11 w-[100px] px-4 rounded-r-xl bg-gradient-to-r from-[#186BC4] to-[#6D44C5] text-white flex items-center justify-center">
        <Search className="w-5 h-5"/>
    </button>
   </div>
   </div>
  );
}