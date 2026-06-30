import { Search } from "lucide-react";

type LojasFiltersProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  location: string;
  onLocationChange: (value: string) => void;
  officialOnly: boolean;
  onToggleOfficial: (value: boolean) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
};

const LojasFilters = ({
  searchTerm,
  onSearchChange,
  category,
  onCategoryChange,
  location,
  onLocationChange,
  officialOnly,
  onToggleOfficial,
  sortBy,
  onSortChange,
}: LojasFiltersProps) => {
  return (
    <div className="grid grid-cols-2 items-end gap-3 md:grid-cols-[260px_160px_160px_auto_1fr_160px] md:gap-5 lg:grid-cols-[360px_190px_190px_auto_1fr_170px] xl:grid-cols-[380px_200px_200px_auto_1fr_170px]">
      <div className="relative hidden h-[38px] items-center rounded-md border border-[#d9deea] bg-white px-4 shadow-[0_2px_8px_rgba(16,24,40,0.04)] md:flex">
        <input
          type="text"
          placeholder="Buscar lojas..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-transparent text-sm text-[#101828] outline-none placeholder:text-[#98a2b3]"
        />
        <button
          type="button"
          className="absolute right-0 top-1/2 flex h-9 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-r-lg bg-[#7c3aed] text-white"
          aria-label="Buscar"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>

      <label className="flex h-[66px] cursor-pointer flex-col justify-center gap-1 rounded-lg border border-[#d9deea] bg-white px-4 text-[13px] font-medium text-[#667085] shadow-[0_2px_8px_rgba(16,24,40,0.04)] md:h-auto md:rounded-none md:border-0 md:bg-transparent md:px-0 md:text-[9px] md:font-semibold md:text-[#98a2b3] md:shadow-none">
        Categoria
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="h-7 cursor-pointer appearance-none bg-transparent text-[18px] font-semibold text-[#101828] focus:outline-none md:h-[38px] md:appearance-auto md:rounded-md md:border md:border-[#d9deea] md:bg-white md:px-3 md:text-[12px] md:shadow-[0_2px_8px_rgba(16,24,40,0.04)]"
        >
          <option value="Todas">Todas</option>
          <option value="Eletronicos">Eletrônicos</option>
          <option value="Esportes">Esportes</option>
          <option value="Moda">Moda</option>
          <option value="Casa">Casa</option>
        </select>
      </label>

      <label className="flex h-[66px] cursor-pointer flex-col justify-center gap-1 rounded-lg border border-[#d9deea] bg-white px-4 text-[13px] font-medium text-[#667085] shadow-[0_2px_8px_rgba(16,24,40,0.04)] md:h-auto md:rounded-none md:border-0 md:bg-transparent md:px-0 md:text-[9px] md:font-semibold md:text-[#98a2b3] md:shadow-none">
        Localizacao
        <select
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          className="h-7 cursor-pointer appearance-none bg-transparent text-[18px] font-semibold text-[#101828] focus:outline-none md:h-[38px] md:appearance-auto md:rounded-md md:border md:border-[#d9deea] md:bg-white md:px-3 md:text-[12px] md:shadow-[0_2px_8px_rgba(16,24,40,0.04)]"
        >
          <option value="Todas">Todas</option>
          <option value="SP">Sao Paulo</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="MG">Minas Gerais</option>
          <option value="PR">Parana</option>
        </select>
      </label>

      <label className="flex h-[66px] cursor-pointer items-center justify-between gap-2 rounded-lg border border-[#d9deea] bg-white px-4 text-[17px] font-medium text-[#344054] shadow-[0_2px_8px_rgba(16,24,40,0.04)] md:h-[38px] md:justify-start md:rounded-none md:border-0 md:bg-transparent md:px-0 md:text-[11px] md:shadow-none">
        <span className="md:hidden">Oficiais</span>
        <span className="hidden md:inline">Lojas oficiais</span>
        <span className="relative inline-flex h-6 w-12 items-center">
          <input
            type="checkbox"
            checked={officialOnly}
            onChange={(e) => onToggleOfficial(e.target.checked)}
            className="peer sr-only"
          />
          <span className="h-6 w-12 rounded-full bg-[#d0d5dd] transition peer-checked:bg-[#7c3aed]" />
          <span className="absolute left-1 h-4 w-4 rounded-full bg-white shadow-sm transition peer-checked:translate-x-6" />
        </span>
      </label>
      <label className="flex h-[66px] cursor-pointer flex-col justify-center gap-1 rounded-lg border border-[#d9deea] bg-white px-4 text-[13px] font-medium text-[#667085] shadow-[0_2px_8px_rgba(16,24,40,0.04)] md:h-auto md:rounded-none md:border-0 md:bg-transparent md:px-0 md:shadow-none">
        <span className="md:hidden">Ordenar</span>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="h-7 cursor-pointer appearance-none bg-transparent text-[16px] font-semibold text-[#101828] focus:outline-none md:h-[38px] md:appearance-auto md:rounded-md md:border md:border-[#d9deea] md:bg-white md:px-3 md:text-[11px] md:text-[#344054] md:shadow-[0_2px_8px_rgba(16,24,40,0.04)]"
        >
          <option>Mais relevantes</option>
          <option>Maior rating</option>
          <option>Mais vendidas</option>
          <option>Mais recentes</option>
        </select>
      </label>
    </div>
  );
};

export default LojasFilters;
