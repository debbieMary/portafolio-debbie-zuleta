import React from 'react'

export default function SkillsSection({skills}) {
  return (
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

  )
}
