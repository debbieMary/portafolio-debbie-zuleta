import React from 'react'

export default function ProjectsSection({projects}) {
  return (
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

  )
}
