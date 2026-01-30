import Actions from "./Actions";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";

const HeaderMain = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div
        className="
          flex flex-col gap-4
          px-4
          md:px-8
          lg:px-[97px]
          py-4
        "
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <SearchBar />
          <Actions />
        </div>
      </div>

      <div className="hidden lg:block">
        <NavMenu />
      </div>
    </header>
  );
};

export default HeaderMain;
