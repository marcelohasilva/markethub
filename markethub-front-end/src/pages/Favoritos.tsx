import HeaderMain from "../components/HeaderMain";

export default function Favoritos() {
  return (
    <>
        <HeaderMain />
        <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left ml-6 sm:ml-12 lg:ml-24 mt-12 sm:mt-16 ml-[95px] mt-[98px]">Meus Favoritos</h1>
        </div>
        <div className="flex justify-center mt-4">
            <div className="h-px w-full max-w-[calc(100%-190px)] ml-[95px] mr-[95px] bg-gray-300"/>
        </div>
    </>
  );
}