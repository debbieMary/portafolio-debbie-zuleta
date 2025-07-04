import React from 'react';

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  // ==== DATOS ====
  const skills = [
    { name: 'Android (Java/Kotlin)', icon: '🤖', color: 'bg-emerald-100 text-emerald-800', years: '13 años' },
    { name: 'Flutter/Dart', icon: '🦋', color: 'bg-blue-100 text-blue-800', years: '2 años' },
    { name: 'React/Next.js', icon: '⚛️', color: 'bg-indigo-100 text-indigo-800', years: '1 año' },
    { name: 'Node.js', icon: '🚀', color: 'bg-green-100 text-green-800', years: '2 años' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'bg-pink-100 text-pink-800', years: '1 año' },
    { name: 'Firebase', icon: '🔥', color: 'bg-orange-100 text-orange-800', years: '5 años' },
    { name: 'Testing', icon: '🧪', color: 'bg-amber-100 text-amber-800', years: '7 años' },
    { name: 'AI Tools', icon: '🧠', color: 'bg-purple-100 text-purple-800', years: '2 años' }
  ];

  const codeLines = [
    { text: "const debbieSkills = {", indent: 0, color: "text-purple-400" },
    { text: "languages: ['Java', 'Kotlin', 'JavaScript', 'Dart'],", indent: 2, color: "text-blue-400" },
    { text: "frameworks: ['Android', 'Flutter', 'React', 'Next.js'],", indent: 2, color: "text-pink-400" },
    { text: "backend: ['Node.js', 'Express', 'Firebase'],", indent: 2, color: "text-green-400" },
    { text: "style: 'DOPAMINA EXTREME'", indent: 2, color: "text-yellow-400" },
    { text: "};", indent: 0, color: "text-purple-400" },
    { text: "// ¡Haz magia conmigo! ✨", indent: 0, color: "text-gray-400" },
  ];

  const projects = [
    {
      title: "ERP Hospitalario CIOC",
      description: "Sistema de gestión hospitalaria con React y Bootstrap.",
      tags: ["React", "Node.js", "Bootstrap"],
      gradient: "bg-gradient-to-br from-pink-500 to-purple-600"
    },
    {
      title: "Apps para Concesionarias",
      description: "Landing pages y apps móviles para dealerships de autos.",
      tags: ["Ionic", "JavaScript", "QA"],
      gradient: "bg-gradient-to-br from-amber-400 to-orange-500"
    }
  ];

  return (
    <>
      <header>
        <title>✨ Debbie Zuleta | Dev DOPAMINA</title>
      </header>

      {/* ==== NAVBAR RESPONSIVO ==== */}
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

      {/* ==== FONDO CON EFECTOS ==== */}
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 overflow-hidden relative">
        
        {/* Blobs animados */}
        <div className="fixed -top-20 -left-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob z-0"></div>
        <div className="fixed bottom-10 -right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-3000 z-0"></div>
        <div className="fixed top-1/2 left-1/4 w-56 h-56 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000 z-0"></div>

        {/* ==== HERO SECTION ==== */}
        <section className="relative z-10 pt-48 pb-24 px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-pulse">
            Debbie Zuleta
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-full py-3 px-8 inline-block border-2 border-white shadow-lg">
            Mobile & FrontEnd Dev ✨ 13+ años creando apps con pasión
          </p>
        </section>

        {/* ==== LIVE CODING SECTION ==== */}
        <section className="py-20 bg-black/90 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Live Coding
            </h2>
            
            <div className="mx-auto max-w-3xl bg-gray-900 rounded-xl p-1 shadow-2xl border-4 border-purple-500/50">
              <div className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-900 to-pink-800 rounded-t-lg">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <div className="ml-4 text-sm text-white/80">debbie_skills.js</div>
              </div>
              
              <div className="p-6 font-mono text-lg overflow-hidden">
                {codeLines.map((line, index) => (
                  <div 
                    key={index} 
                    className={`${line.color} mb-2 transition-all duration-500 hover:scale-105 hover:pl-2`}
                    style={{ marginLeft: `${line.indent * 1}rem` }}
                  >
                    <span className="opacity-70">{">"}</span> {line.text}
                  </div>
                ))}
              </div>

              <div className="flex items-center px-6 pb-4">
                <span className="text-green-400 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==== SKILLS SECTION ==== */}
        <section id="skills" className="relative z-10 py-20 bg-white/80 backdrop-blur-lg border-y border-gray-200">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Mis Superpoderes
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl ${skill.color} border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-2 text-center`}
                >
                  <div className="text-5xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className="mt-2 text-sm font-medium">{skill.years}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==== PROJECTS SECTION ==== */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Proyectos ÉPICOS
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`${project.gradient} p-1 rounded-3xl hover:rotate-1 transition-all duration-300 shadow-xl`}
                >
                  <div className="bg-white rounded-2xl p-8 h-full">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==== CONTACT SECTION ==== */}
        <section id="contact" className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Lista para crear magia juntas?</h2>
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

        {/* ==== FOOTER ==== */}
        <footer className="py-10 bg-white/90 backdrop-blur-lg border-t border-gray-200 text-center">
          <p className="text-gray-600">
            Hecho con <span className="text-pink-500">♥</span>, Next.js y Tailwind CSS
          </p>
          <p className="mt-2 text-sm text-gray-500">
            © {new Date().getFullYear()} Debbie Zuleta - Todos los derechos reservados
          </p>
        </footer>
      </div>
    </>
  );
}