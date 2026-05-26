"use client";
import { useEffect, useRef, useState } from "react";
import {
  FiBell,
  FiBox,
  FiChevronDown,
  FiCreditCard,
  FiHeart,
  FiLogOut,
  FiMapPin,
  FiSettings,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import { useRouter } from "next/navigation";

interface ActionsProps {
  variant?: "full" | "compact";
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000";

type HeaderUser = {
  id?: string;
  name?: string;
  email?: string;
};

function decodeTokenUserId(token: string) {
  try {
    const payload = token.split(".")[1];

    if (!payload) {
      return null;
    }

    const base64Payload = payload.replace(/-/g, "+").replace(/_/g, "/");
    const normalizedPayload = base64Payload.padEnd(base64Payload.length + ((4 - (base64Payload.length % 4)) % 4), "=");
    const decodedPayload = JSON.parse(window.atob(normalizedPayload));
    return typeof decodedPayload?.sub === "string" ? decodedPayload.sub : null;
  } catch {
    return null;
  }
}

function getInitials(user: HeaderUser | null) {
  const label = user?.name || user?.email || "Usuario";
  const parts = label.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) {
    return "U";
  }

  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function Actions({ variant = "full" }: ActionsProps) {
  const router = useRouter();
  const cartCount = 3;
  const notificationCount = 2;
  const isCompact = variant === "compact";
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<HeaderUser | null>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadUser() {
      const token = localStorage.getItem("api_token");

      if (!token) {
        setIsLoggedIn(false);
        setUser(null);
        return;
      }

      setIsLoggedIn(true);

      const userId = decodeTokenUserId(token);

      if (!userId) {
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/v1/users/${userId}`);

        if (!response.ok) {
          return;
        }

        const data = await response.json();

        if (isMounted) {
          setUser({
            id: data?.id,
            name: data?.name,
            email: data?.email,
          });
        }
      } catch {
        if (isMounted) {
          setUser(null);
        }
      }
    }

    loadUser();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleLogout() {
    localStorage.removeItem("api_token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    setIsUserMenuOpen(false);
    router.push("/login");
  }

  const menuItems = [
    { label: "Meu perfil", href: "/users", icon: FiUser },
    { label: "Meus pedidos", href: "/pedidos", icon: FiBox },
    { label: "Enderecos", href: "/clientes", icon: FiMapPin },
    { label: "Formas de pagamento", href: "/financeiro", icon: FiCreditCard },
    { label: "Configuracoes", href: "/configuracoes", icon: FiSettings },
  ];
  const displayName = user?.name || user?.email || "Minha conta";

  return (
    <div className="flex items-center justify-between gap-4 md:gap-6 lg:justify-end flex-nowrap">
      <button
        onClick={() => router.push("/favoritos")}
        className="flex items-center gap-2 text-gray-700 font-semibold transition hover:text-gray-900 cursor-pointer"
      >
        <FiHeart className="h-5 w-5 cursor-pointer" />
        <span className={isCompact ? "hidden" : "hidden md:inline cursor-pointer"}>Favoritos</span>
      </button>

      <button
        onClick={() => router.push("/carrinho")}
        className="flex items-center gap-2 text-gray-700 font-semibold transition hover:text-gray-900 cursor-pointer"
      >
        <span className="relative">
          <FiShoppingCart className="h-5 w-5 cursor-pointer" />
          <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#6B3DF2] text-[10px] font-semibold text-white">
            {cartCount}
          </span>
        </span>
        <span className={isCompact ? "hidden" : "hidden md:inline cursor-pointer"}>Carrinho</span>
      </button>

      {isLoggedIn ? (
        <>
          <button
            onClick={() => router.push("/notificacoes")}
            className="relative flex items-center gap-2 text-gray-700 font-semibold transition hover:text-gray-900 cursor-pointer"
          >
            <span className="relative">
              <FiBell className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#6B3DF2] text-[10px] font-semibold text-white">
                {notificationCount}
              </span>
            </span>
            <span className={isCompact ? "hidden" : "hidden lg:inline"}>Notificacoes</span>
          </button>

          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setIsUserMenuOpen((open) => !open)}
              className="flex cursor-pointer items-center gap-2 text-gray-800 transition hover:text-gray-950"
              aria-expanded={isUserMenuOpen}
              aria-haspopup="menu"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#8F5CFF] to-[#1A7FF0] text-xs font-bold text-white shadow-sm">
                {getInitials(user)}
              </span>
              {!isCompact ? (
                <>
                  <span className="hidden max-w-[150px] truncate text-sm font-bold lg:inline">
                    {displayName}
                  </span>
                  <FiChevronDown className="hidden h-4 w-4 lg:block" />
                </>
              ) : null}
            </button>

            {isUserMenuOpen ? (
              <div
                className="absolute right-0 top-12 z-50 w-56 rounded-lg border border-gray-100 bg-white py-2 shadow-[0_18px_45px_rgba(15,23,42,0.16)]"
                role="menu"
              >
                {menuItems.map(({ label, href, icon: Icon }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      router.push(href);
                    }}
                    className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                    role="menuitem"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                ))}

                <div className="my-2 h-px bg-gray-100" />

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left text-sm font-bold text-red-600 transition hover:bg-red-50"
                  role="menuitem"
                >
                  <FiLogOut className="h-4 w-4" />
                  Sair
                </button>
              </div>
            ) : null}
          </div>
        </>
      ) : !isCompact ? (
        <button
          onClick={() => router.push("/login")}
          className="hidden items-center gap-2 text-gray-700 font-bold cursor-pointer transition hover:text-gray-900 lg:flex"
        >
          <FiUser className="h-5 w-5" />
          Entrar
        </button>
      ) : null}

      {!isLoggedIn && !isCompact && (
        <button
          onClick={() => router.push("/cadastro")}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#8F5CFF] to-[#1A7FF0] text-white font-bold cursor-pointer transition hover:opacity-90 hover:shadow-md"
        >
          Cadastrar
        </button>
      )}
    </div>
  );
}
