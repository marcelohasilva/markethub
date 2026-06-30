import { Award, Flame, Store, Sparkles, Timer } from "lucide-react";

type LojasTabsProps = {
  activeTab: string;
  onChange: (tab: string) => void;
};

const TABS = [
  { label: "Todas as lojas", icon: Store },
  { label: "Mais vendidas", icon: Flame },
  { label: "Melhores avaliadas", icon: Award },
  { label: "Em destaque", icon: Sparkles },
  { label: "Novas lojas", icon: Timer },
];

const LojasTabs = ({ activeTab, onChange }: LojasTabsProps) => {
  return (
    <div className="w-full rounded-3xl border border-[#e4e7ec] bg-white px-4 py-2 shadow-[0_2px_12px_rgba(16,24,40,0.06)]">
      <div className="grid grid-cols-5 overflow-x-auto">
        {TABS.map(({ label, icon: Icon }) => {
          const isActive = activeTab === label;
          return (
            <button
              key={label}
              type="button"
              onClick={() => onChange(label)}
              className={`flex h-[86px] min-w-[132px] cursor-pointer flex-col items-center justify-center gap-2 border-b-[3px] border-r border-[#eef0f6] px-3 text-center text-[13px] font-semibold transition last:border-r-0 md:h-[76px] md:min-w-0 md:flex-row md:gap-3 md:px-4 md:text-[15px] ${
                isActive
                  ? "border-b-[#7c3aed] bg-[#f4ebff] text-[#7c3aed] shadow-[0_2px_12px_rgba(124,58,237,0.1)] md:rounded-none md:bg-transparent md:shadow-none"
                  : "border-b-transparent text-[#667085] hover:bg-[#f2f4f7]"
              }`}
            >
              <span className={isActive ? "rounded-md bg-[#f1e9ff] p-2 md:bg-transparent md:p-0" : ""}>
                <Icon className={`h-7 w-7 md:h-5 md:w-5 ${isActive ? "text-[#6d28ff]" : "text-[#667085]"}`} />
              </span>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LojasTabs;
