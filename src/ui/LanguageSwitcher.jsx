// src/components/LanguageSwitcher.jsx
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="fixed lg:left-150 xl:left-150 2xl:left-227 top-3 left-30 md:top-3 md:left-70 sm:top-3 sm:left-50  z-[100] flex gap-1 bg-white/80 backdrop-blur-sm p-1 rounded-full shadow-md">
     
     
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
          i18n.language === 'en' ? 'bg-purple-400 text-white' : 'hover:bg-gray-100'
        }`}
        aria-label="English"
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('es')}
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
          i18n.language === 'es' ? 'bg-purple-500 text-white' : 'hover:bg-gray-100'
        }`}
        aria-label="Español"
      >
        ES
      </button>
    </div>
  );
}