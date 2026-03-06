'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isCongressMenuOpen, setIsCongressMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white relative">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-blue-300">
            AMQ
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-300">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/socios" className="hover:text-blue-300">
                Socios
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="hover:text-blue-300">
                Acerca de nosotros
              </Link>
            </li>
            {/*<li>
              <Link href="/eventos" className="hover:text-blue-300">
                Eventos
              </Link>
            </li>*/}
            <li className="relative">
              <button
                onMouseEnter={() => setIsCongressMenuOpen(true)}
                onMouseLeave={() => setIsCongressMenuOpen(false)}
                className="hover:text-blue-300 flex items-center"
              >
                Congreso 2026
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isCongressMenuOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50"
                  onMouseEnter={() => setIsCongressMenuOpen(true)}
                  onMouseLeave={() => setIsCongressMenuOpen(false)}
                >
                  <div className="py-1">
                    <Link href="/congreso" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Información General
                    </Link>
                    <Link href="/congreso/inscribete" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Inscríbete
                    </Link>
                    <Link href="/congreso/programa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Programa
                    </Link>
                    <Link href="/congreso/convocatoria" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                      Convocatoria
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link href="/contacto" className="hover:text-blue-300">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
