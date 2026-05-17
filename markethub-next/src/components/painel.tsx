import {
  CubeIcon,
  ShoppingBagIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const highlights = [
  {
    title: "Ofertas exclusivas",
    description: "Aproveite descontos e promoções personalizadas para você.",
    Icon: ShoppingBagIcon,
  },
  {
    title: "Acompanhe seus pedidos",
    description: "Veja o status dos seus pedidos em tempo real.",
    Icon: CubeIcon,
  },
  {
    title: "Compra segura",
    description: "Seus dados protegidos com a mais alta segurança.",
    Icon: ShieldCheckIcon,
  },
];

export default function Painel() {
  return (
    <section className="relative hidden min-h-[680px] w-full flex-1 flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-10 text-white shadow-[0_35px_70px_-40px_rgba(37,99,235,0.9)] md:flex lg:w-1/2">
      <div className="pointer-events-none absolute -right-16 top-6 h-56 w-56 rounded-full border border-white/15 blur-[2px]" />
      <div className="pointer-events-none absolute -right-4 top-16 h-44 w-44 rounded-full border border-white/20 blur-[2px]" />
      <div className="pointer-events-none absolute right-6 top-6 h-24 w-24 rounded-full bg-white/10 blur-[4px]" />
      <div className="pointer-events-none absolute -left-20 bottom-6 h-56 w-56 rounded-full bg-white/10 blur-[4px]" />
      <div className="pointer-events-none absolute -left-6 bottom-24 h-24 w-24 rounded-full bg-white/10 blur-[4px]" />

      <div className="relative z-10">
        <h1 className="text-3xl font-semibold leading-snug">
          Bem-vindo à
          <span className="block text-5xl font-bold leading-tight">MarketHub!</span>
        </h1>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
          Crie sua conta para acessar as melhores ofertas, acompanhar pedidos e
          muito mais.
        </p>
      </div>

      <div className="relative z-10 mt-8 space-y-6">
        {highlights.map(({ title, description, Icon }) => (
          <div key={title} className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-base font-semibold">{title}</p>
              <p className="mt-1 text-sm text-white/70">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-10 rounded-2xl bg-white/10 px-6 py-5 text-sm text-white/90">
        <p className="text-lg font-semibold">“</p>
        <p className="mt-2 text-sm leading-relaxed">
          Uma experiência completa para você comprar com mais praticidade.
        </p>
      </div>
    </section>
  );
}

