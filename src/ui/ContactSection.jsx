import React from 'react'

export default function ContactSection() {
  return (
   <section id="contact" className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Lista para crear magia juntos?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Hablemos sobre cómo puedo ayudar a hacer realidad tus proyectos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:debbie.zuletam@gmail.com" 
                className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-full hover:bg-gray-100 hover:shadow-lg transition-all"
              >
                Enviar Email
              </a>
              <a 
                href="https://www.linkedin.com/in/debbie-zuleta-584810100/" 
                target="_blank"
                className="px-6 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 hover:shadow-lg transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
  )
}
