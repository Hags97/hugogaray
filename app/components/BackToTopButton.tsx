"use client";

import { useState, useEffect } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-5 right-5
        w-10 h-10 rounded-full
         text-[#f5f5f5]
        flex items-center justify-center
        shadow-lg
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          hover:ring-2       `}
      aria-label="Volver arriba"
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  );
}

