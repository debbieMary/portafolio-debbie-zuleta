
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
     <footer className="py-10 bg-white/90 backdrop-blur-lg border-t border-gray-200 text-center">
          <p className="text-gray-600">
            {t("crafted_with")} <span className="text-pink-500">♥</span>,{t("technologies")}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            © {new Date().getFullYear()} Debbie Zuleta - {t("all_rights_reserved")}
          </p>
        </footer>
  )
}
