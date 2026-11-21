"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type StoresSelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  className?: string;
};

export default function StoresSelect({
  label,
  value,
  options,
  onChange,
  className = "",
}: StoresSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    }
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  return (
    <div ref={rootRef} className="relative min-w-0">
      <button
        type="button"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setIsOpen(false);
          if (event.key === "ArrowDown") setIsOpen(true);
        }}
        className={`flex w-full cursor-pointer items-center justify-between gap-2 text-left ${className}`}
      >
        <span className="truncate">{value}</span>
        <ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" />
      </button>
      {isOpen && (
        <div
          role="listbox"
          aria-label={label}
          className="absolute left-0 top-full z-50 mt-1 max-h-60 w-full min-w-max overflow-y-auto rounded-lg border border-gray-300 bg-white p-1 text-gray-900 shadow-xl dark:border-gray-700 dark:bg-[#111] dark:text-white"
        >
          {options.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              aria-selected={option === value}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`w-full cursor-pointer rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-[#1A5FB4] hover:text-white dark:hover:bg-[#1A5FB4] ${
                option === value ? "bg-violet-600 font-semibold text-white dark:bg-violet-700" : "bg-transparent"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
