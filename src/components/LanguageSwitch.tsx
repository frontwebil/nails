import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
      className="text-pink-600 hover:text-pink-700 font-medium"
    >
      {language === 'de' ? 'EN' : 'DE'}
    </button>
  );
}