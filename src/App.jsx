import React from "react";
import NavBar from "./ui/NavBar";
import HeroSection from "./ui/HeroSection";
import LiveCodingSection from "./ui/LiveCodingSection";
import SkillsSection from "./ui/SkillsSection";
import ProjectsSection from "./ui/ProjectsSection";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import ContactSection from "./ui/ContactSection";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);


  return (
    <>

      <Header />
      {/* ==== NAVBAR RESPONSIVO ==== */}
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* ==== FONDO CON EFECTOS ==== */}
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 overflow-hidden relative">
        {/* Blobs animados */}
        <div className="fixed -top-20 -left-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob z-0"></div>
        <div className="fixed bottom-10 -right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-3000 z-0"></div>
        <div className="fixed top-1/2 left-1/4 w-56 h-56 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000 z-0"></div>

        {/* ==== HERO SECTION ==== */}
        <HeroSection />

        {/* ==== LIVE CODING SECTION ==== */}
        <LiveCodingSection/>

        {/* ==== SKILLS SECTION ==== */}

        <SkillsSection/>
        {/* ==== PROJECTS SECTION ==== */}
        <ProjectsSection/>
        {/* ==== CONTACT SECTION ==== */}

        <ContactSection />

        {/* ==== FOOTER ==== */}
        <Footer />
      </div>
    </>
  );
}




