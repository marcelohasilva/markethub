"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="w-full bg-white">
      <div className="flex h-[82px] items-center justify-center px-4 md:h-20 md:justify-start md:px-6 lg:px-[97px]">
        <img
          onClick={() => router.push("/")}
          className="h-9 w-auto cursor-pointer object-contain md:h-10"
          src="/assets/logo.png"
          alt="Logo"
        />
      </div>
    </header>
  );
}
