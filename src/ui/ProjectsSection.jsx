import { useTranslation } from 'react-i18next';

export default function ProjectsSection() {
  const { t } = useTranslation();
  const projects = t("projects", { returnObjects: true });

  return (
    <section id="projects" className="py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
          {t("portfolio_title")}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${project.gradient} p-0.5 sm:p-1 rounded-2xl md:rounded-3xl hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <div className="bg-white rounded-xl md:rounded-2xl p-6 sm:p-8 h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{project.description}</p>
                <p className="text-sm sm:text-base text-blue-600 mb-3 sm:mb-4 truncate">
                  <a href={project.src} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {project.src.replace(/(^\w+:|^)\/\//, '')} {/* Remove http:// */}
                  </a>
                </p>
                {project.testData && (
                  <p className="text-sm sm:text-base text-purple-600 mb-3 sm:mb-4">{project.testData}</p>
                )}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
                    >
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