import {
  FiBox,
  FiDollarSign,
  FiHelpCircle,
  FiLock,
  FiMail,
  FiPhone,
  FiPlusSquare,
  FiShield,
  FiShoppingBag,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const benefitCards = [
  {
    icon: FiDollarSign,
    title: "Ganhe comissões",
    description: "Publique produtos e ganhe até 90% de comissão.",
  },
  {
    icon: FiShoppingBag,
    title: "Integração com grandes marketplaces",
    description: "Shopee, Amazon, Mercado Livre e muito mais.",
  },
  {
    icon: FiShield,
    title: "Plataforma segura",
    description: "Seus dados e ganhos protegidos com segurança.",
  },
  {
    icon: FiTrendingUp,
    title: "Acompanhe seus ganhos",
    description: "Relatórios completos e saques facilitados.",
  },
];

const affiliateLinks = [
  { label: "Cadastrar Produto", icon: FiPlusSquare },
  { label: "Meus Produtos", icon: FiBox },
  { label: "Minhas Comissões", icon: FiDollarSign },
  { label: "Relatórios", icon: FiTrendingUp },
  { label: "Saques", icon: FiDollarSign },
  { label: "Programa de Afiliados", icon: FiStar },
];

const exploreLinks = [
  { label: "Categorias", icon: FiBox },
  { label: "Lojas Parceiras", icon: FiShoppingBag },
  { label: "Mais Vendidos", icon: FiStar },
  { label: "Ofertas do Dia", icon: FiShoppingBag },
  { label: "Novidades", icon: FiStar },
];

const supportLinks = [
  { label: "Central de Ajuda", icon: FiHelpCircle },
  { label: "Contato", icon: FiMail },
  { label: "FAQ", icon: FiPhone },
  { label: "Política de Privacidade", icon: FiShield },
  { label: "Termos de Uso", icon: FiLock },
];

const marketplaceLogos = [
  { name: "Shopee", src: "/assets/shopee.png", className: "h-9 w-auto" },
  { name: "Amazon", src: "/assets/amazon.png", className: "h-8 w-auto" },
  { name: "Mercado Livre", src: "/assets/mercado_livre.png", className: "h-8 w-auto" },
  { name: "AliExpress", src: "/assets/aliexpress.png", className: "h-8 w-auto" },
  { name: "Netshoes", src: "/assets/netshoes.png", className: "h-8 w-auto" },
  { name: "Magalu", src: "/assets/logo.png", className: "h-8 w-auto" },
];

const HomeFooter = () => {
  return (
    <footer className="mt-12 bg-[#F8F9FC] pb-8">
      <div className="w-full px-4 md:px-8 lg:px-[97px]">
        <section className="grid gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] md:grid-cols-2 xl:grid-cols-4 md:p-6">
          {benefitCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl px-2 py-2"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F4F0FF] text-[#6B3DF2] ring-1 ring-[#E7E0FF]">
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-[15px] font-semibold text-[#1E2340]">
                    {item.title}
                  </h3>
                  <p className="mt-1 max-w-[240px] text-sm leading-6 text-[#667085]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        <section className="mt-10 grid gap-6 rounded-2xl bg-transparent lg:grid-cols-[1.05fr_1fr_1fr_1fr_1.15fr] lg:gap-8">
          <div className="rounded-2xl border-r border-gray-200 bg-transparent pr-0 lg:pr-8">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt="MarketHub"
                className="h-12 w-auto"
              />
            </div>

            <p className="mt-5 max-w-[260px] text-[15px] leading-7 text-[#667085]">
              O MarketHub transforma links em oportunidades.
              <br />
              Publique produtos, gere seu link de afiliado automaticamente e
              ganhe dinheiro a cada venda.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[FaInstagram, FaFacebookF, FaYoutube, FaTiktok].map((Icon, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label="Rede social"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1E2340] shadow-sm transition hover:-translate-y-0.5 hover:text-[#6B3DF2]"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#1E2340]">Afiliados</h3>
            <div className="mt-3 h-0.5 w-8 rounded-full bg-[#6B3DF2]" />
            <ul className="mt-5 space-y-4 text-[13px] text-[#475467]">
              {affiliateLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      className="flex items-center gap-3 transition hover:text-[#6B3DF2]"
                    >
                      <Icon className="h-4 w-4 text-[#6B3DF2]" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#1E2340]">Explorar</h3>
            <div className="mt-3 h-0.5 w-8 rounded-full bg-[#6B3DF2]" />
            <ul className="mt-5 space-y-4 text-[13px] text-[#475467]">
              {exploreLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      className="flex items-center gap-3 transition hover:text-[#6B3DF2]"
                    >
                      <Icon className="h-4 w-4 text-[#6B3DF2]" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#1E2340]">Suporte</h3>
            <div className="mt-3 h-0.5 w-8 rounded-full bg-[#6B3DF2]" />
            <ul className="mt-5 space-y-4 text-[13px] text-[#475467]">
              {supportLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      className="flex items-center gap-3 transition hover:text-[#6B3DF2]"
                    >
                      <Icon className="h-4 w-4 text-[#6B3DF2]" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#E6E8EF] bg-white p-5 shadow-sm">
            <h3 className="text-[18px] font-semibold text-[#6B3DF2]">
              Programa de Afiliados
            </h3>
            <p className="mt-4 max-w-[230px] text-[15px] leading-7 text-[#667085]">
              Ganhe até 90% da comissão em vendas realizadas pelos seus
              produtos publicados.
            </p>

            <div className="mt-5 flex justify-center">
              <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5F0FF] to-[#EEF4FF]">
                <div className="absolute right-8 top-10 h-20 w-20 rounded-full bg-[#8F5CFF]/15 blur-2xl" />
                <div className="absolute left-8 bottom-8 h-20 w-20 rounded-full bg-[#6B3DF2]/15 blur-2xl" />

                <div className="relative flex items-end gap-2">
                  <div className="rounded-2xl bg-[#6B3DF2] px-4 py-4 shadow-lg shadow-[#6B3DF2]/20">
                    <div className="flex items-center gap-1 text-white/95">
                      <FiDollarSign className="h-4 w-4" />
                      <FiDollarSign className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="h-16 w-16 rounded-2xl bg-[#8F5CFF] shadow-lg shadow-[#8F5CFF]/20" />
                </div>

                <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-[#6B3DF2] px-2 py-1 text-[10px] font-semibold text-white shadow-md">
                  <FiTrendingUp className="h-3 w-3" />
                  Lucros
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mt-5 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#6B3DF2] to-[#8F5CFF] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6B3DF2]/20 transition hover:translate-y-[-1px] hover:shadow-xl"
            >
              Começar Agora
              <FaArrowRightLong className="h-4 w-4" />
            </button>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
            <div className="min-w-[180px]">
              <h3 className="text-[18px] font-semibold text-[#6B3DF2]">
                Lojas Parceiras
              </h3>
              <p className="mt-2 max-w-[170px] text-sm leading-6 text-[#667085]">
                Trabalhamos com as maiores lojas para você ganhar mais.
              </p>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {marketplaceLogos.map((marketplace) => (
                <div
                  key={marketplace.name}
                  className="flex h-16 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 shadow-sm"
                >
                  <img
                    src={marketplace.src}
                    alt={marketplace.name}
                    className={marketplace.className}
                  />
                </div>
              ))}

              <div className="flex h-16 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 text-sm font-medium text-[#667085] shadow-sm">
                e muitas outras...
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4 border-t border-gray-200 py-5 text-sm text-[#667085] lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 MarketHub. Todos os direitos reservados.</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FiLock className="h-4 w-4 text-[#6B3DF2]" />
              <span>Site protegido com SSL 256 bits</span>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <span>Formas de Pagamento (saques)</span>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-[#1E2340]">VISA</span>
                <span className="font-semibold text-[#F54A29]">MC</span>
                <span className="font-semibold text-[#0DB4B9]">PIX</span>
                <span className="rounded-sm border border-[#1E2340] px-1.5 py-0.5 text-[10px] font-semibold text-[#1E2340]">
                  Boleto
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default HomeFooter;
