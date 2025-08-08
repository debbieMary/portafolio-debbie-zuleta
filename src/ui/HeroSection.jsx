import React from 'react'
import debbiePhoto from '../images/DebbieProfesionalCroped.jpeg'; // Adjust the path as necessary
export default function HeroSection() {
  return (
   
  <section className="relative z-10 pt-32 pb-24 px-6 text-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 animate-gradient-shift"></div>
      </div>

      {/* Profile photo with glowing effect */}
      <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 mb-12 group">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-xl animate-pulse-slow opacity-70 group-hover:opacity-90 transition-all duration-300"></div>
        <img 
          src={debbiePhoto} // Replace with your photo path
          alt="Debbie Zuleta"
          className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white shadow-2xl transform group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Name with animated gradient */}
      <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient">
        Debbie Zuleta
      </h1>

      {/* Tagline with floating animation */}
      <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-full py-3 px-8 inline-block border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        Mobile & FrontEnd Dev ✨ 13+ years creating apps with passion
      </p>

       </section>        
  )
}
