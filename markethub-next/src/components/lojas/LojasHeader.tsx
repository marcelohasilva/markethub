type LojasHeaderProps = {
  title: string;
  subtitle: string;
};

const LojasHeader = ({ title, subtitle }: LojasHeaderProps) => {
  return (
    <section className="mb-8 w-full overflow-hidden rounded-3xl border border-[#e4e7ec] bg-white shadow-[0_2px_12px_rgba(16,24,40,0.06)]">
      <div className="flex flex-col gap-6 px-8 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#101828] md:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-[#667085] md:text-base">{subtitle}</p>
        </div>
        <div
          className="hidden h-24 w-44 bg-[url('/assets/art.png')] bg-contain bg-no-repeat md:block"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default LojasHeader;
