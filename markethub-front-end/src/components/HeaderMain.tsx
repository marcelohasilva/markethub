import Actions from "./Actions";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
 const HeaderMain = () => {
    return(

  <header className="w-full bg-white shadow-md inset-shadow-sm fill-white drop-shadow-xl">
          <div className="flex items-center justify-between px-10 bg-white inset-shadow-sm">
            <SearchBar />
            <Actions />
          </div>
          <NavMenu />
        </header>
    )

}
      export default HeaderMain;