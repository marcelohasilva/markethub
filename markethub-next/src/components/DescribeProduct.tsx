interface DescribeProductProps {
  description: string;
}

const DescribeProduct = ({ description }: DescribeProductProps) => {
  return (
    <div className="flex flex-col ml-24 font-bold gap-4">
      <h1 className="text-[#282729] mt-5 text-3xl">
        Detalhes do Produto
      </h1>

      <p className="text-[#4E4E50]">
        {description}
      </p>
    </div>
  );
};

export default DescribeProduct;