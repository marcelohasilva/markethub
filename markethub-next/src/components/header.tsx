"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 w-full h-16 md:h-20 bg-white flex items-center justify-start md:justify-start px-4 md:px-0 shadow-sm z-50">
      <img onClick={() => router.push("/")}
        className="h-40 md:h-15 pl-5 w-auto object-contain cursor-pointer"
        src="/assets/logo.png"
        alt="Logo"
      />
    </header>
  );
}
