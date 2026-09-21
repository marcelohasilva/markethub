type StoresHeaderProps = {
  title: string;
  subtitle: string;
};

const StoresHeader = ({ title, subtitle }: StoresHeaderProps) => {
  return (
    <section className="relative w-full overflow-hidden pt-1 md:pt-2">
      <div className="flex min-h-[126px] flex-row items-center justify-between gap-3 md:min-h-[120px] md:items-start">
        <div className="max-w-[56%] md:max-w-none">
          <h1 className="text-[30px] font-bold leading-tight text-[#171b2a] md:text-[38px]">
            {title}
          </h1>
          <p className="mt-2 text-[17px] leading-snug text-[#667085] md:mt-3 md:text-[16px]">
            {subtitle}
          </p>
      </div>
      </div>
    </section>
  );
};

export default StoresHeader;
