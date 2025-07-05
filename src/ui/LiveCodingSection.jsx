import React from 'react'

export default function LiveCodingSection({codeLines}) {
  return (
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
  )
}
