"use client";

import { useEffect, useMemo, useState } from "react";

const SLIDE_INTERVAL_MS = 4500;

const HomeCarousel = () => {
  const slides = useMemo(
    () => [
      {
        id: 1,
        title: "BLACK\nFRIDAY",
        subtitle: "LIMITED OFFER",
        cta: "SHOP NOW",
        image: "/assets/art.png",
        bgFrom: "#8F5CFF",
        bgTo: "#1A7FF0",
      },
      {
        id: 2,
        title: "OFERTAS\nDA SEMANA",
        subtitle: "ATE 50% OFF",
        cta: "VER OFERTAS",
        image: "/assets/image.png",
        bgFrom: "#7A4CFF",
        bgTo: "#2A7CF0",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [slides.length]);

  const goTo = (index: number) => {
    setActiveIndex(index % slides.length);
  };

  const prev = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const activeSlide = slides[activeIndex];

  return (
    <section className="w-full mt-6">
      <div
        className="relative w-full rounded-2xl shadow-md overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, ${activeSlide.bgFrom}, ${activeSlide.bgTo})`,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 px-8 py-10 lg:px-14 lg:py-14">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight whitespace-pre-line">
              {activeSlide.title}
            </h2>
            <p className="mt-3 text-lg md:text-xl tracking-wide text-white/90">
              {activeSlide.subtitle}
            </p>
            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase text-[#6F5AF5] shadow-sm hover:opacity-90"
            >
              {activeSlide.cta}
            </button>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={activeSlide.image}
              alt="Banner"
              className="h-[220px] w-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Slide anterior"
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/30"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Proximo slide"
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/30"
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Ir para o slide ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === activeIndex
                ? "bg-[#6F5AF5]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeCarousel;
