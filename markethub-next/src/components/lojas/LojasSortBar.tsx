type LojasSortBarProps = {
  sortBy: string;
  onSortChange: (value: string) => void;
};

const LojasSortBar = ({ sortBy, onSortChange }: LojasSortBarProps) => {
  return (
    <div className="mb-10 flex items-center justify-end gap-3">
      <span className="text-sm font-semibold text-[#667085]">Ordenar por</span>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="h-[58px] w-[220px] rounded-2xl border border-[#e4e7ec] bg-white px-4 text-sm font-semibold text-[#101828] shadow-sm focus:outline-none"
      >
        <option>Mais relevantes</option>
        <option>Maior rating</option>
        <option>Mais vendidas</option>
        <option>Mais recentes</option>
      </select>
    </div>
  );
};

export default LojasSortBar;
