import { Award, Flame, Heart, MapPin, Store } from "lucide-react";
import type { StoreDisplay } from "./types";

type LojaCardProps = {
  store: StoreDisplay;
  onView: (id: string) => void;
};

const getBadgeColor = (badge?: StoreDisplay["badge"]) => {
  switch (badge) {
    case "MAIS VENDIDA":
      return "bg-[#6B3DF2]";
    case "MELHOR AVALIADA":
      return "bg-[#F59E0B]";
    case "EM DESTAQUE":
      return "bg-[#22C55E]";
    case "NOVA LOJA":
      return "bg-[#2563EB]";
    default:
      return "";
  }
};

const LojaCard = ({ store, onView }: LojaCardProps) => {
  const ratingLabel = store.rating ? store.rating.toFixed(1) : "0.0";
  const reviewLabel = store.reviews?.toLocaleString() ?? "0";
  const isImageLogo = store.logo.startsWith("/") || store.logo.startsWith("http");

  return (
    <div className="overflow-hidden rounded-[28px] border border-[#eaecf0] bg-white shadow-[0_2px_12px_rgba(16,24,40,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(16,24,40,0.16)]">
      <div className="relative h-[150px] bg-gray-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${store.coverImage || "/assets/baixados.webp"})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {store.badge && (
          <span
            className={`absolute left-4 top-4 rounded-xl px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white ${getBadgeColor(
              store.badge
            )}`}
          >
            {store.badge}
          </span>
        )}

        <button
          type="button"
          className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-[#98a2b3] shadow-sm"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>

      <div className="relative px-6 pb-7 pt-12">
        <div className="absolute left-6 -top-7 z-20 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-[5px] border-white bg-[#101828] text-base font-bold uppercase text-white shadow-[0_12px_28px_rgba(16,24,40,0.24)]">
          {isImageLogo ? (
            <img src={store.logo} alt={store.name} className="h-full w-full object-cover" />
          ) : (
            store.logo
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-[20px] font-bold tracking-[-1px] text-[#101828] md:text-[22px] lg:text-[24px]">
                {store.name}
              </h3>
              {store.verified ? <Award className="h-5 w-5 text-[#7c3aed]" /> : null}
            </div>
            <p className="text-sm text-[#667085]">
              {store.category || store.description || "Sem descricao"}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 text-sm text-[#667085]">
          <span className="text-[#f59e0b]">★</span>
          <span className="font-semibold text-[#101828]">{ratingLabel}</span>
          <span>({reviewLabel} avaliacoes)</span>
        </div>

        {store.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {store.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#f2f4f7] px-3 py-1.5 text-[11px] font-semibold text-[#344054]"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[#f2f4f7] pt-4 text-sm text-[#667085]">
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2">
              <Store className="h-4 w-4" />
              +{store.products} produtos
            </span>
            <span className="flex items-center gap-2">
              <Flame className="h-4 w-4" />
              +{store.sales} vendidos
            </span>
            {store.location ? (
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {store.location}, {store.state}
              </span>
            ) : null}
          </div>
          <button
            type="button"
            onClick={() => onView(store.id)}
            className="h-[42px] cursor-pointer rounded-xl border border-violet-500 px-5 text-sm font-bold text-violet-600 transition-all hover:bg-violet-600 hover:text-white"
          >
            Ver loja
          </button>
        </div>
      </div>
    </div>
  );
};

export default LojaCard;
