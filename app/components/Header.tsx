'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isCongressMenuOpen, setIsCongressMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left: AMQ logos */}
          <div className="flex items-center py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-amq-square.jpeg"
              alt="AMQ Logo"
              width={110}
              height={70}
              className="object-contain"
            />
          </Link>
          <Link href="/" className="flex flex-col items-center text-center">
            <Image
              src="/logo-amq.png"
              alt="Asociación Mexicana de Quemaduras, A.C."
              width={110}
              height={70}
              className="object-contain"
            />
          </Link>
          </div>

          {/* Right: navigation */}
          <ul className="flex items-center space-x-6 text-sm font-medium text-gray-700">
            <li>
              <Link href="/" className="hover:text-orange-600 transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/socios" className="hover:text-orange-600 transition-colors">
                Socios
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="hover:text-orange-600 transition-colors">
                Acerca de nosotros
              </Link>
            </li>
            <li>
              <Link href="/eventos" className="hover:text-orange-600 transition-colors">
                Eventos
              </Link>
            </li>
            <li className="relative">
              <div
                onMouseEnter={() => setIsCongressMenuOpen(true)}
                onMouseLeave={() => setIsCongressMenuOpen(false)}
              >
                <Link
                  href="/congreso"
                  className="hover:text-orange-600 transition-colors flex items-center"
                >
                  Congreso 2026
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                {isCongressMenuOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-100">
                    <div className="py-1">
                      <Link href="/congreso" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                        Información General
                      </Link>
                      <Link href="/congreso/inscribete" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                        Inscríbete
                      </Link>
                      <Link href="/congreso/programa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                        Programa
                      </Link>
                      <Link href="/congreso/convocatoria" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                        Convocatoria
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-orange-600 transition-colors">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
