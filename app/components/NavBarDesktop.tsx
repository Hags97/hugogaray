"use client";

import { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function NavBarDesktop() {
  const [selectedOption, setSelectedOption] = useState<string | null>("Inicio");
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const navOptions = ["Inicio", "About", "Proyectos", "Contacto"];

  return (
    <MaxWidthWrapper>
    <nav className="z-20 hidden sm:block absolute   text-[#F5F5F5] w-[50%] pt-6 ">
      
      <ul className="flex items-center justify-between">
        {navOptions.map((option) => (
          <li key={option} className="">
            <a href={`#${option}`} 
              onClick={() => setSelectedOption(option)} 
              onMouseEnter={() => setHoveredOption(option)}
              onMouseLeave = {() => setHoveredOption(null)}
              className={`relative py-2 transition-colors duration-200 px-4 hover:text-blue-300 ${
                selectedOption === option ? "text-[#64ffda]" : ""
              }`}
            >
              <span className={`absolute left-0 transform ${
                hoveredOption === option || selectedOption === option ? 'opacity-100 -translate-x-2 ' : 'opacity-0 translate-x-0'
              } transition-all duration-300 ease-in-out `}>
                {'{'}
              </span>
              {option}
              <span className={`absolute right-0 transform ${
                hoveredOption === option || selectedOption === option ? 'opacity-100 translate-x-2' : 'opacity-0 translate-x-0'
              } transition-all duration-300 ease-in-out`}>
                {'}'}
              </span>
            </a>
          </li>
        ))}
      </ul>

      
     
    </nav>
     </MaxWidthWrapper>
  );
}
