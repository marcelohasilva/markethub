import LojaCard from "./LojaCard";
import type { StoreDisplay } from "./types";

type LojasGridProps = {
  loading: boolean;
  error: string | null;
  stores: StoreDisplay[];
  onViewStore: (id: string) => void;
};

const LojasGrid = ({ loading, error, stores, onViewStore }: LojasGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 pb-6 md:grid-cols-2 lg:grid-cols-3">
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
          <LojaCard key={store.id} store={store} onView={onViewStore} />
        ))
      )}
    </div>
  );
};

export default LojasGrid;
