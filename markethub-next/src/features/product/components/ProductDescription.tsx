import {
  FaVolumeUp,
  FaBluetooth,
  FaBatteryFull,
  FaMicrophone,
} from "react-icons/fa";

interface DescribeProductProps {
  description: string;
}

const DescribeProduct = ({ description }: DescribeProductProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[#282729] text-2xl font-bold">
        Detalhes do Produto
      </h2>

      <p className="text-[#4E4E50] text-sm leading-relaxed">
        {description}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow transition hover:-translate-y-1 hover:shadow-lg">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3EEFF] text-[#6B3DF2]">
            <FaVolumeUp />
          </span>
          <div>
            <p className="text-sm font-semibold text-[#1D1B21]">Conforto Superior</p>
            <p className="text-xs text-gray-500">
              Design ergonomico para uso o dia todo
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow transition hover:-translate-y-1 hover:shadow-lg">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3EEFF] text-[#6B3DF2]">
            <FaBluetooth />
          </span>
          <div>
            <p className="text-sm font-semibold text-[#1D1B21]">Bluetooth 5.3</p>
            <p className="text-xs text-gray-500">
              Conexao estavel e de alta performance
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow transition hover:-translate-y-1 hover:shadow-lg">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3EEFF] text-[#6B3DF2]">
            <FaBatteryFull />
          </span>
          <div>
            <p className="text-sm font-semibold text-[#1D1B21]">Bateria de longa duracao</p>
            <p className="text-xs text-gray-500">
              Ate 20 horas de musica sem parar
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow transition hover:-translate-y-1 hover:shadow-lg">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3EEFF] text-[#6B3DF2]">
            <FaMicrophone />
          </span>
          <div>
            <p className="text-sm font-semibold text-[#1D1B21]">Microfone integrado</p>
            <p className="text-xs text-gray-500">
              Chamadas nitidas com reducao de ruidos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescribeProduct;