"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';


const navItems = [
  { name: 'Inicio', href: '#Inicio' },
  { name: 'Proyectos', href: '#Proyectos' },
  { name: 'Sobre mí', href: '#About' },
  { name: 'Contacto', href: '#Contacto' },
];

export default function MobileNavBar ()
{
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>("Inicio");

  const handleLinkClick = (name: string) => {
    setSelectedOption(name); // Actualiza la opción seleccionada
    setTimeout(() => setIsOpen(false), 1000); // Cierra el menú después de 300ms

  }


  return (
    <nav className="fixed sm:hidden top-0 left-0 right-0 z-50 bg-[#222A36] text-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-merriweather">
            HG
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-white transition-all duration-300 ease-out ${isOpen ? 'rotate-45  translate-y-2.5' : ''}`} />
              <span className={`block h-0.5 w-full bg-white transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-white transition-all duration-300 ease-out ${isOpen ? '-rotate-45 mb-[2px] -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={`#${item.name}`}
                  href={item.href}
                  className={`block py-2 text-lg hover:text-gray-300 transition-colors ${selectedOption === item.name ? 'text-[#64ffda]' : ''}`}
                  onClick={() => handleLinkClick(item.name)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}