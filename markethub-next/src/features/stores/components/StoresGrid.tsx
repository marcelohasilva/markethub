import StoreCard from "./StoreCard";
import type { StoreDisplay } from "../types/store-display";

type StoresGridProps = {
  loading: boolean;
  error: string | null;
  stores: StoreDisplay[];
  onViewStore: (id: string) => void;
};

const StoresGrid = ({ loading, error, stores, onViewStore }: StoresGridProps) => {
  return (
    <div className="mt-5 grid grid-cols-1 gap-3 pb-6 md:mt-8 md:grid-cols-3 md:gap-5">
      {loading ? (
        <div className="col-span-3 text-center py-12">
          <p className="text-gray-500">Carregando lojas...</p>
        </div>
      ) : error ? (
        <div className="col-span-3 text-center py-12">
          <p className="text-red-500">{error}</p>
        </div>
      ) : stores.length === 0 ? (
        <div className="col-span-3 text-center py-12">
          <p className="text-gray-500">Nenhuma loja encontrada</p>
        </div>
      ) : (
        stores.map((store) => (
          <StoreCard key={store.id} store={store} onView={onViewStore} />
        ))
      )}
    </div>
  );
};

export default StoresGrid;
