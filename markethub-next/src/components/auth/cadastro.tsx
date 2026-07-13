"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  CubeIcon,
  EyeIcon,
  EyeSlashIcon,
  EnvelopeIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000";
const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;

const benefits = [
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

export default function Cadastro() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const [formError, setFormError] = useState("");

  const passwordRules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const clearFieldError = (field: "email" | "password" | "confirmPassword" | "name") => {
    setFieldErrors((prev) => (prev[field] ? { ...prev, [field]: "" } : prev));
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    clearFieldError("email");
    if (formError) setFormError("");
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    clearFieldError("password");
    if (formError) setFormError("");
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    clearFieldError("confirmPassword");
    if (formError) setFormError("");
  };

  const handleNameChange = (value: string) => {
    setName(value);
    clearFieldError("name");
    if (formError) setFormError("");
  };

  const validate = () => {
    const nextErrors = { email: "", password: "", confirmPassword: "", name: "" };

    if (!email) {
      nextErrors.email = "Informe o e-mail";
    } else if (!emailRegex.test(email)) {
      nextErrors.email = "E-mail inválido";
    }

    if (!name) {
      nextErrors.name = "Informe o nome";
    }

    if (!password) {
      nextErrors.password = "Informe a senha";
    } else if (password.length < 8) {
      nextErrors.password = "A senha deve ter pelo menos 8 dígitos";
    } else if (!/[A-Z]/.test(password)) {
      nextErrors.password = "A senha deve conter pelo menos uma letra maiúscula";
    } else if (!/[a-z]/.test(password)) {
      nextErrors.password = "A senha deve conter pelo menos uma letra minúscula";
    } else if (!/[0-9]/.test(password)) {
      nextErrors.password = "A senha deve conter pelo menos um número";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      nextErrors.password = "A senha deve conter pelo menos um caractere especial";
    }

    if (!confirmPassword) {
      nextErrors.confirmPassword = "Confirme a senha";
    } else if (confirmPassword !== password) {
      nextErrors.confirmPassword = "As senhas não coincidem";
    }

    return nextErrors;
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const nextErrors = validate();
    if (Object.values(nextErrors).some((error) => error !== "")) {
      setFieldErrors(nextErrors);
      return;
    }

    try {
      const resposta = await fetch(`${API_BASE_URL}/v1/auth/singup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password.trim(),
          name: name.trim(),
          role: "CLIENT",
        }),
      });

      let data = null;
      try {
        data = await resposta.json();
      } catch {
        data = null;
      }

      if (!resposta.ok) {
        const msg = data?.message || data?.error || `Erro HTTP ${resposta.status}`;
        setFormError(msg);
        return;
      }

      if (data?.token) {
        localStorage.setItem("api_token", data.token);
      }

      setFieldErrors({ email: "", password: "", confirmPassword: "", name: "" });
      setFormError("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setName("");

      router.push("/");
    } catch {
      setFormError("Erro ao conectar ao servidor");
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-82px)] w-full flex-col bg-gradient-to-br from-[#842BFF] via-[#373DE8] to-[#077BF1] md:min-h-[calc(100vh-80px)] md:flex-row md:bg-[#F7F8FC] md:bg-none lg:min-h-[calc(100vh-88px)]">
      <section className="relative min-h-[360px] w-full overflow-hidden bg-gradient-to-br from-[#842BFF] via-[#373DE8] to-[#077BF1] px-6 pt-[62px] text-center text-white md:min-h-[calc(100vh-80px)] md:w-[45.7%] md:px-[50px] md:pt-[200px] md:text-left lg:min-h-[calc(100vh-88px)] lg:w-[43.8%] lg:px-[89px] lg:py-[154px]">
        <div className="pointer-events-none absolute -left-[112px] top-[58px] h-[255px] w-[255px] rounded-full bg-white/10 blur-[1px]" />
        <div className="pointer-events-none absolute -right-[93px] bottom-[332px] h-[134px] w-[134px] rounded-full bg-white/10 blur-[1px]" />
        <div className="pointer-events-none absolute -right-[58px] top-[-10px] h-[318px] w-[318px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-[47px] top-[2px] h-[294px] w-[294px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-[35px] top-[15px] h-[270px] w-[270px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -left-[66px] bottom-[-50px] h-[300px] w-[300px] rounded-full opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:13px_13px]" />

        <div className="relative z-10">
          <h1 className="text-[35px] font-bold leading-[1.2] tracking-normal text-white drop-shadow-sm md:text-[44px] xl:text-[44px]">
            Bem-vindo à
            <span className="block text-[35px] leading-[1.2] md:text-[44px] md:leading-[1.2]">
              Market<span className="text-[#39B7FF]">Hub!</span>
            </span>
          </h1>
          <p className="mx-auto mt-[20px] max-w-[330px] text-[18px] font-normal leading-[1.45] text-white/90 md:mx-0 md:max-w-[430px] md:text-[19px] md:leading-[1.55]">
            Crie sua conta para acessar as melhores ofertas, acompanhar pedidos e
            muito mais.
          </p>
        </div>

        <div className="relative z-10 mt-[38px] hidden grid-cols-3 gap-[12px] md:flex md:flex-col md:gap-[31px]">
          {benefits.map(({ title, description, Icon }) => (
            <div key={title} className="flex flex-col items-center gap-[13px] md:flex-row md:gap-[27px]">
              <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-white/18 md:h-[79px] md:w-[79px]">
                <Icon className="h-[26px] w-[26px] stroke-[1.8] text-white md:h-[34px] md:w-[34px]" />
              </div>
              <div className="pt-[2px] md:pt-[2px]">
                <p className="text-[13px] font-bold leading-[1.25] text-white md:text-[17px] md:leading-[1.35]">
                  {title}
                </p>
                <p className="mt-[7px] max-w-[98px] text-[12px] font-normal leading-[1.45] text-white/90 md:mt-[4px] md:max-w-[295px] md:text-[15px] md:leading-[1.48]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-[43px] hidden max-w-[436px] items-center gap-[22px] rounded-[12px] bg-white/14 px-[29px] py-[27px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm md:flex">
          <span className="text-[52px] font-bold leading-none text-white/75">“</span>
          <p className="text-[17px] font-normal leading-[1.45] text-white/95">
            “Uma experiência completa para você comprar com mais praticidade.”
          </p>
        </div>
      </section>

      <section className="flex w-full items-center justify-center px-3 pb-4 pt-0 md:min-h-[calc(100vh-80px)] md:w-[54.3%] md:items-start md:justify-start md:px-[18px] md:py-0 lg:min-h-[calc(100vh-88px)] lg:w-[56.2%] lg:items-center lg:justify-center lg:px-12 lg:py-9">
        <div className="w-full max-w-[600px] rounded-[20px] bg-white px-[30px] pb-[46px] pt-[31px] shadow-[0_24px_70px_rgba(15,23,42,0.10)] sm:px-[50px] sm:py-[37px] md:min-h-[896px] md:max-w-[362px] md:px-[28px] md:pb-[44px] md:pt-[48px] lg:min-h-0 lg:max-w-[600px] lg:px-[50px] lg:py-[37px]">
          <div className="mx-auto flex h-[67px] w-[67px] items-center justify-center rounded-full bg-gradient-to-br from-[#087BFF] via-[#6540F4] to-[#8B2CFF] text-white shadow-[0_9px_22px_rgba(95,65,242,0.35)]">
            <UserPlusIcon className="h-[34px] w-[34px] stroke-[1.8]" />
          </div>

          <h1 className="mt-[17px] text-center text-[35px] font-bold leading-tight text-[#111827]">
            Criar conta
          </h1>
          <p className="mt-[11px] text-center text-[16px] font-normal text-[#64748B]">
            Preencha os campos abaixo para criar sua conta
          </p>

          <form onSubmit={handleSubmit} className="mt-[29px] flex flex-col gap-[18px]">
            <div>
              <label htmlFor="name" className="text-[13px] font-bold leading-none text-[#2F3747]">
                Nome completo
              </label>
              <div className="relative mt-[9px]">
                <UserIcon className="absolute left-[18px] top-1/2 h-[22px] w-[22px] -translate-y-1/2 stroke-[1.8] text-[#8B98B0]" />
                <input
                  type="text"
                  id="name"
                  placeholder="Digite seu nome completo"
                  value={name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="h-[53px] w-full rounded-[8px] border border-[#D7DEEA] bg-[#FBFCFE] pl-[54px] pr-4 text-[15px] font-normal text-[#111827] outline-none transition placeholder:text-[#8B98B0] focus:border-[#6D3FF2] focus:ring-2 focus:ring-[#6D3FF2]/15"
                  autoComplete="name"
                />
              </div>
              {fieldErrors.name ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="text-[13px] font-bold leading-none text-[#2F3747]">
                E-mail
              </label>
              <div className="relative mt-[9px]">
                <EnvelopeIcon className="absolute left-[18px] top-1/2 h-[22px] w-[22px] -translate-y-1/2 stroke-[1.8] text-[#8B98B0]" />
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  className="h-[53px] w-full rounded-[8px] border border-[#D7DEEA] bg-[#FBFCFE] pl-[54px] pr-4 text-[15px] font-normal text-[#111827] outline-none transition placeholder:text-[#8B98B0] focus:border-[#6D3FF2] focus:ring-2 focus:ring-[#6D3FF2]/15"
                  autoComplete="email"
                />
              </div>
              {fieldErrors.email ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="password" className="text-[13px] font-bold leading-none text-[#2F3747]">
                Senha
              </label>
              <div className="relative mt-[9px]">
                <LockClosedIcon className="absolute left-[18px] top-1/2 h-[22px] w-[22px] -translate-y-1/2 stroke-[1.8] text-[#8B98B0]" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Crie uma senha"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  className="h-[53px] w-full rounded-[8px] border border-[#D7DEEA] bg-[#FBFCFE] pl-[54px] pr-[52px] text-[15px] font-normal text-[#111827] outline-none transition placeholder:text-[#8B98B0] focus:border-[#6D3FF2] focus:ring-2 focus:ring-[#6D3FF2]/15"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-[16px] top-1/2 -translate-y-1/2 cursor-pointer text-[#8B98B0] transition hover:text-[#2563EB]"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-[22px] w-[22px]" />
                  ) : (
                    <EyeIcon className="h-[22px] w-[22px]" />
                  )}
                </button>
              </div>
              <div className="mt-3 space-y-1 text-xs">
                <p className={passwordRules.length ? "text-[#16A34A]" : "text-[#6B7280]"}>
                  <span className="mr-2" aria-hidden="true">
                    {passwordRules.length ? "✔" : "○"}
                  </span>
                  Pelo menos 8 caracteres
                </p>
                <p className={passwordRules.uppercase ? "text-[#16A34A]" : "text-[#6B7280]"}>
                  <span className="mr-2" aria-hidden="true">
                    {passwordRules.uppercase ? "✔" : "○"}
                  </span>
                  Pelo menos uma letra maiúscula
                </p>
                <p className={passwordRules.lowercase ? "text-[#16A34A]" : "text-[#6B7280]"}>
                  <span className="mr-2" aria-hidden="true">
                    {passwordRules.lowercase ? "✔" : "○"}
                  </span>
                  Pelo menos uma letra minúscula
                </p>
                <p className={passwordRules.number ? "text-[#16A34A]" : "text-[#6B7280]"}>
                  <span className="mr-2" aria-hidden="true">
                    {passwordRules.number ? "✔" : "○"}
                  </span>
                  Pelo menos um número
                </p>
                <p className={passwordRules.special ? "text-[#16A34A]" : "text-[#6B7280]"}>
                  <span className="mr-2" aria-hidden="true">
                    {passwordRules.special ? "✔" : "○"}
                  </span>
                  Pelo menos um caractere especial (!@#$%^&*(),.?&quot;:{'{}'}|&lt;&gt;)
                </p>
              </div>
              {fieldErrors.password ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.password}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="confirm-password" className="text-[13px] font-bold leading-none text-[#2F3747]">
                Confirmar senha
              </label>
              <div className="relative mt-[9px]">
                <LockClosedIcon className="absolute left-[18px] top-1/2 h-[22px] w-[22px] -translate-y-1/2 stroke-[1.8] text-[#8B98B0]" />
                <input
                  type={showConfirm ? "text" : "password"}
                  id="confirm-password"
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                  className="h-[53px] w-full rounded-[8px] border border-[#D7DEEA] bg-[#FBFCFE] pl-[54px] pr-[52px] text-[15px] font-normal text-[#111827] outline-none transition placeholder:text-[#8B98B0] focus:border-[#6D3FF2] focus:ring-2 focus:ring-[#6D3FF2]/15"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((prev) => !prev)}
                  className="absolute right-[16px] top-1/2 -translate-y-1/2 cursor-pointer text-[#8B98B0] transition hover:text-[#2563EB]"
                  aria-label={showConfirm ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showConfirm ? (
                    <EyeSlashIcon className="h-[22px] w-[22px]" />
                  ) : (
                    <EyeIcon className="h-[22px] w-[22px]" />
                  )}
                </button>
              </div>
              {fieldErrors.confirmPassword ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.confirmPassword}</p>
              ) : null}
            </div>

            <button
              type="submit"
              className="mt-[5px] h-[57px] w-full cursor-pointer rounded-[8px] bg-gradient-to-r from-[#8B2CFF] to-[#087BFF] text-[16px] font-bold text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)] transition hover:brightness-105"
            >
              Criar conta
            </button>

            {formError ? (
              <p className="text-center text-sm text-red-600">{formError}</p>
            ) : null}
          </form>

          <div className="my-[30px] flex items-center gap-[16px] text-[12px] font-semibold text-[#A1ADC0]">
            <span className="h-px flex-1 bg-[#DCE2EC]" />
            ou cadastre-se com
            <span className="h-px flex-1 bg-[#DCE2EC]" />
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-[17px]">
            <button
              type="button"
              className="flex h-[54px] cursor-pointer items-center justify-center gap-2 rounded-[8px] border border-[#D7DEEA] bg-white text-[13px] font-semibold text-[#273244] transition hover:bg-[#F8FAFC] sm:gap-[10px] sm:text-[15px]"
            >
              <svg className="h-[22px] w-[22px]" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.22l6.85-6.85C35.88 2.12 30.32 0 24 0 14.62 0 6.57 5.38 2.56 13.22l7.98 6.2C12.73 12.22 17.94 9.5 24 9.5z" />
                <path fill="#34A853" d="M46.1 24.55c0-1.63-.15-3.2-.42-4.73H24v8.96h12.44c-.54 2.9-2.16 5.36-4.59 7.02l7.05 5.47C42.88 37.28 46.1 31.42 46.1 24.55z" />
                <path fill="#FBBC05" d="M10.54 28.37a14.5 14.5 0 0 1-.76-4.37c0-1.52.27-2.99.76-4.37l-7.98-6.2A23.92 23.92 0 0 0 0 24c0 3.88.93 7.55 2.56 10.82l7.98-6.45z" />
                <path fill="#4285F4" d="M24 48c6.32 0 11.65-2.08 15.53-5.63l-7.05-5.47c-1.95 1.32-4.45 2.1-8.48 2.1-6.06 0-11.27-3.86-13.46-9.13l-7.98 6.45C6.57 42.62 14.62 48 24 48z" />
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex h-[54px] cursor-pointer items-center justify-center gap-2 rounded-[8px] border border-[#D7DEEA] bg-white text-[13px] font-semibold text-[#273244] transition hover:bg-[#F8FAFC] sm:gap-[10px] sm:text-[15px]"
            >
              <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#1877F2"
                  d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.5h3.05V9.43c0-3.02 1.8-4.7 4.56-4.7 1.32 0 2.7.24 2.7.24v2.98h-1.52c-1.5 0-1.96.94-1.96 1.9v2.3h3.33l-.53 3.5h-2.8V24C19.61 23.1 24 18.1 24 12.07z"
                />
              </svg>
              Facebook
            </button>
            <button
              type="button"
              className="flex h-[54px] cursor-pointer items-center justify-center gap-2 rounded-[8px] border border-[#D7DEEA] bg-white text-[13px] font-semibold text-[#273244] transition hover:bg-[#F8FAFC] sm:gap-[10px] sm:text-[15px]"
            >
              <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#111827"
                  d="M16.7 0c-.7.05-1.52.45-2.08 1.1-.5.6-.93 1.47-.8 2.35 0 .05.04.1.12.1.72.03 1.52-.42 2.06-1.07.52-.62.9-1.5.8-2.38 0-.06-.05-.1-.1-.1zM20.5 18.1c-.45 1.07-.67 1.55-1.25 2.5-.8 1.25-1.93 2.82-3.34 2.83-1.25.02-1.57-.8-3.26-.8-1.7 0-2.07.78-3.3.82-1.38.04-2.45-1.4-3.25-2.65-2.24-3.5-2.47-7.6-1.1-9.7.98-1.55 2.55-2.46 4.02-2.46 1.5 0 2.45.83 3.7.83 1.22 0 1.96-.84 3.68-.84 1.3 0 2.68.72 3.66 1.96-3.22 1.77-2.7 6.5.44 7.5z"
                />
              </svg>
              Apple
            </button>
          </div>

          <p className="mt-[31px] text-center text-[14px] leading-[1.7] text-[#7B879B]">
            Ao criar sua conta, você concorda com nossos
            <button
              type="button"
              className="mx-1 cursor-pointer font-bold text-[#7C2DFF] hover:underline"
            >
              Termos de Uso
            </button>
            e
            <button
              type="button"
              className="mx-1 cursor-pointer font-bold text-[#7C2DFF] hover:underline"
            >
              Política de Privacidade
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}
