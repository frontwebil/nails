import React, { createContext, useContext, useState } from 'react';

type Language = 'de' | 'en';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  de: {
    // Navigation
    'nav.prices': 'Preisliste',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.welcome': 'Willkommen bei Ellanails Studio',
    'hero.since': 'Seit 2020 im Herzen von Darmstadt',
    'hero.book': 'Jetzt Termin buchen',

    // Instagram Section
    'instagram.recent': 'Aktuelle Arbeiten',
    'instagram.more': 'Mehr auf Instagram',

    // Features Section
    'features.title': 'Warum Ellanails Studio?',
    'features.master': 'Erfahrene Meister',
    'features.master.desc': 'Hochqualifizierte Experten sorgen für perfektes Design und präzise Arbeit',
    'features.services': 'Breite Dienstleistungspalette',
    'features.services.desc': 'Von Nageldesign bis Wimpernverlängerung - alles für Ihre Schönheit',
    'features.quality': 'Qualität und Hygiene',
    'features.quality.desc': 'Hochwertige Produkte und höchste Hygienestandards',
    'features.location': 'Zentrale Lage',
    'features.location.desc': 'Perfekt erreichbar in der Elisabethenstraße 56, Darmstadt',
    'features.hours': 'Flexible Öffnungszeiten',
    'features.hours.desc': 'Montag bis Samstag von 10:00 bis 19:00 Uhr',
    'features.care': 'Persönliche Betreuung',
    'features.care.desc': 'Individuelle Beratung und maßgeschneiderte Behandlungen',

    // Testimonials
    'testimonials.title': 'Was unsere Kunden sagen',
    'testimonials.view': 'Alle Google Bewertungen ansehen',

    // Booking Form
    'booking.title': 'Termin buchen',
    'booking.name': 'Name',
    'booking.phone': 'Telefonnummer',
    'booking.category': 'Kategorie',
    'booking.category.select': 'Kategorie auswählen',
    'booking.date': 'Datum',
    'booking.time': 'Uhrzeit',
    'booking.time.select': 'Uhrzeit auswählen',
    'booking.time.available': 'Verfügbare Zeiten: 10:00 - 19:00 Uhr',
    'booking.comments': 'Anmerkungen',
    'booking.comments.placeholder': 'Optional: Zusätzliche Informationen oder Wünsche',
    'booking.submit': 'Termin buchen',
    'booking.submitting': 'Wird gesendet...',

    // Thank You Modal
    'thankyou.title': 'Vielen Dank!',
    'thankyou.message': 'Wir haben Ihre Terminanfrage erhalten. Wir werden uns in Kürze bei Ihnen melden, um Ihren Termin zu bestätigen.',
    'thankyou.close': 'Schließen',

    // Footer
    'footer.contact': 'Kontakt',
    'footer.hours': 'Öffnungszeiten',
    'footer.hours.text': 'Montag - Samstag',
    'footer.admin': 'Admin-Zugang',

    // Categories
    'category.manicure': 'Maniküre & Pediküre',
    'category.nails': 'Acrylnägel / Gel & Pulver Gel',
    'category.brows': 'Augenbrauen & Wimpern',
    'category.waxing': 'Waxing',
    'category.sugaring': 'Sugaring',
    'category.facial': 'Gesichtsbehandlungen',
    'category.lashes': 'Wimpernverlängerung',
  },
  en: {
    // Navigation
    'nav.prices': 'Price List',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',

    // Hero
    'hero.welcome': 'Welcome to Ellanails Studio',
    'hero.since': 'Since 2020 in the heart of Darmstadt',
    'hero.book': 'Book Appointment',

    // Instagram Section
    'instagram.recent': 'Recent Work',
    'instagram.more': 'More on Instagram',

    // Features Section
    'features.title': 'Why Choose Ellanails Studio?',
    'features.master': 'Experienced Masters',
    'features.master.desc': 'Highly qualified experts ensure perfect design and precise work',
    'features.services': 'Wide Range of Services',
    'features.services.desc': 'From nail design to eyelash extensions - everything for your beauty',
    'features.quality': 'Quality and Hygiene',
    'features.quality.desc': 'High-quality products and highest hygiene standards',
    'features.location': 'Central Location',
    'features.location.desc': 'Easily accessible at Elisabethenstraße 56, Darmstadt',
    'features.hours': 'Flexible Hours',
    'features.hours.desc': 'Monday to Saturday from 10:00 AM to 7:00 PM',
    'features.care': 'Personal Care',
    'features.care.desc': 'Individual consultation and tailored treatments',

    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.view': 'View All Google Reviews',

    // Booking Form
    'booking.title': 'Book Appointment',
    'booking.name': 'Name',
    'booking.phone': 'Phone Number',
    'booking.category': 'Category',
    'booking.category.select': 'Select Category',
    'booking.date': 'Date',
    'booking.time': 'Time',
    'booking.time.select': 'Select Time',
    'booking.time.available': 'Available times: 10:00 AM - 7:00 PM',
    'booking.comments': 'Comments',
    'booking.comments.placeholder': 'Optional: Additional information or requests',
    'booking.submit': 'Book Appointment',
    'booking.submitting': 'Submitting...',

    // Thank You Modal
    'thankyou.title': 'Thank You!',
    'thankyou.message': 'We have received your booking request. We will contact you shortly to confirm your appointment.',
    'thankyou.close': 'Close',

    // Footer
    'footer.contact': 'Contact',
    'footer.hours': 'Opening Hours',
    'footer.hours.text': 'Monday - Saturday',
    'footer.admin': 'Admin Access',

    // Categories
    'category.manicure': 'Manicure & Pedicure',
    'category.nails': 'Acrylic Nails / Gel & Powder Gel',
    'category.brows': 'Eyebrows & Lashes',
    'category.waxing': 'Waxing',
    'category.sugaring': 'Sugaring',
    'category.facial': 'Facial Treatments',
    'category.lashes': 'Eyelash Extensions',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}