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
      <div className="flex gap-3 overflow-x-auto">
        {TABS.map(({ label, icon: Icon }) => {
          const isActive = activeTab === label;
          return (
            <button
              key={label}
              type="button"
              onClick={() => onChange(label)}
              className={`flex h-[74px] min-w-[180px] cursor-pointer items-center justify-center gap-2 rounded-2xl border-b-[3px] px-4 text-sm font-semibold transition ${
                isActive
                  ? "border-b-[#7c3aed] bg-[#f4ebff] text-[#7c3aed]"
                  : "border-b-transparent text-[#667085] hover:bg-[#f2f4f7]"
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? "text-[#7c3aed]" : "text-[#98a2b3]"}`} />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LojasTabs;
