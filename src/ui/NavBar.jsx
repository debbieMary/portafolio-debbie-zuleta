import React from 'react'

export default function NavBar({ isOpen, setIsOpen }) {
  return (
     <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-purple-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                ✨ Debbie
              </span>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#" className="text-purple-900 hover:text-pink-600 px-3 py-2 font-medium transition-all hover:scale-105">
                  Inicio
                </a>
                <a href="#skills" className="text-purple-900 hover:text-pink-600 px-3 py-2 font-medium transition-all hover:scale-105">
                  Skills
                </a>
                <a href="#projects" className="text-purple-900 hover:text-pink-600 px-3 py-2 font-medium transition-all hover:scale-105">
                  Proyectos
                </a>
                <a href="#contact" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-pink-300 transition-all hover:scale-105">
                  Contacto
                </a>
              </div>
            </div>

            {/* Botón móvil */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-purple-700 hover:text-pink-600 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-base font-medium text-purple-900 hover:text-pink-600">
                Inicio
              </a>
              <a href="#skills" className="block px-3 py-2 text-base font-medium text-purple-900 hover:text-pink-600">
                Skills
              </a>
              <a href="#projects" className="block px-3 py-2 text-base font-medium text-purple-900 hover:text-pink-600">
                Proyectos
              </a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-center mx-2">
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>
  )
}
