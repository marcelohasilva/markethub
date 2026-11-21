
interface CartSummaryProps {
  total: number;
}

const CartSummary = ({ total }: CartSummaryProps) => {
  return (
    <div className="ml-[80px] mt-[30px]">
      <div className="bg-white w-[400px] ml-[20px] shadow-xl rounded-[1rem] border border-gray-100 p-10">
        <h2 className="font-bold">Resumo</h2>

        <div className="w-full border-t border-gray-200 pt-4 mt-[25px]" />

        <div className="flex">
          <p className="mt-[15px] text-[#6F7482]">Subtotal</p>
          <p className="mt-[15px] ml-auto font-bold">
            R$ {total.toFixed(2)}
          </p>
        </div>

        <div className="flex">
          <p className="mt-[15px] text-[#6F7482]">Entrega</p>
          <p className="mt-[15px] ml-auto font-bold">Grátis</p>
        </div>

        <div className="w-full border-t border-gray-200 pt-4 mt-[25px]" />

        <div className="flex">
          <h2 className="font-bold">Total</h2>
          <p className="ml-auto font-bold">
            R$ {total.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
