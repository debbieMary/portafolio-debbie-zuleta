import React from 'react'

export default function Footer() {
  return (
     <footer className="py-10 bg-white/90 backdrop-blur-lg border-t border-gray-200 text-center">
          <p className="text-gray-600">
            Hecho con <span className="text-pink-500">♥</span>, React.js y Tailwind CSS
          </p>
          <p className="mt-2 text-sm text-gray-500">
            © {new Date().getFullYear()} Debbie Zuleta - Todos los derechos reservados
          </p>
        </footer>
  )
}
