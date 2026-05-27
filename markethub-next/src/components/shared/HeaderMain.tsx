"use client";
import { useState } from "react";
import Actions from "./Actions";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";

const HeaderMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div
        className="
          flex flex-col gap-4
          px-4
          md:px-6
          lg:px-[97px]
          py-4
        "
      >
        <div className="hidden md:flex md:flex-row md:items-center md:justify-between">
          <SearchBar onMenuClick={() => setIsMenuOpen((open) => !open)} />
          <Actions />
        </div>

        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <SearchBar variant="brand" onMenuClick={() => setIsMenuOpen((open) => !open)} />
            <Actions variant="compact" />
          </div>
          <div className="mt-3">
            <SearchBar variant="input" />
          </div>
        </div>
      </div>

      <div className="block">
        <div className={isMenuOpen ? "block" : "hidden lg:block"}>
          <NavMenu onNavigate={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
