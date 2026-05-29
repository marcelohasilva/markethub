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
}: LojasFiltersProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2.2fr_1fr_1fr_0.7fr]">
      <div className="relative flex h-[58px] items-center rounded-2xl border border-[#e4e7ec] bg-white px-4 shadow-[0_2px_10px_rgba(16,24,40,0.06)]">
        <input
          type="text"
          placeholder="Buscar lojas..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-transparent text-sm text-[#101828] outline-none placeholder:text-[#98a2b3]"
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl bg-[#7c3aed] text-white"
          aria-label="Buscar"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>

      <label className="flex cursor-pointer flex-col gap-2 text-[13px] font-semibold text-[#98a2b3]">
        Categoria
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="h-[58px] cursor-pointer rounded-2xl border border-[#e4e7ec] bg-white px-4 text-sm font-semibold text-[#101828] shadow-[0_2px_10px_rgba(16,24,40,0.06)] focus:outline-none"
        >
          <option value="Todas">Todas</option>
          <option value="Eletronicos">Eletrônicos</option>
          <option value="Esportes">Esportes</option>
          <option value="Moda">Moda</option>
          <option value="Casa">Casa</option>
        </select>
      </label>

      <label className="flex cursor-pointer flex-col gap-2 text-[13px] font-semibold text-[#98a2b3]">
        Localizacao
        <select
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          className="h-[58px] cursor-pointer rounded-2xl border border-[#e4e7ec] bg-white px-4 text-sm font-semibold text-[#101828] shadow-[0_2px_10px_rgba(16,24,40,0.06)] focus:outline-none"
        >
          <option value="Todas">Todas</option>
          <option value="SP">Sao Paulo</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="MG">Minas Gerais</option>
          <option value="PR">Parana</option>
        </select>
      </label>

      <label className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-[#e4e7ec] bg-white px-5 py-3 text-sm font-semibold text-[#344054] shadow-[0_2px_10px_rgba(16,24,40,0.06)]">
        Lojas oficiais
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
    </div>
  );
};

export default LojasFilters;
