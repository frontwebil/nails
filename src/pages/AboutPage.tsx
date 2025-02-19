import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Sparkles, Shield, MapPin, Award, Clock, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitch } from '../components/LanguageSwitch';

function AboutPage() {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Award className="text-pink-600" size={24} />,
      title: {
        de: "Erfahrene Meister",
        en: "Experienced Masters"
      },
      description: {
        de: "Hochqualifizierte Experten sorgen für perfektes Design und präzise Arbeit",
        en: "Highly qualified experts ensure perfect design and precise work"
      }
    },
    {
      icon: <Sparkles className="text-pink-600" size={24} />,
      title: {
        de: "Breite Dienstleistungspalette",
        en: "Wide Range of Services"
      },
      description: {
        de: "Von Nageldesign bis Wimpernverlängerung - alles für Ihre Schönheit",
        en: "From nail design to eyelash extensions - everything for your beauty"
      }
    },
    {
      icon: <Shield className="text-pink-600" size={24} />,
      title: {
        de: "Qualität und Hygiene",
        en: "Quality and Hygiene"
      },
      description: {
        de: "Hochwertige Produkte und höchste Hygienestandards",
        en: "High-quality products and highest hygiene standards"
      }
    },
    {
      icon: <MapPin className="text-pink-600" size={24} />,
      title: {
        de: "Zentrale Lage",
        en: "Central Location"
      },
      description: {
        de: "Perfekt erreichbar in der Elisabethenstraße 56, Darmstadt",
        en: "Easily accessible at Elisabethenstraße 56, Darmstadt"
      }
    },
    {
      icon: <Clock className="text-pink-600" size={24} />,
      title: {
        de: "Flexible Öffnungszeiten",
        en: "Flexible Hours"
      },
      description: {
        de: "Montag bis Samstag von 10:00 bis 19:00 Uhr",
        en: "Monday to Saturday from 10:00 AM to 7:00 PM"
      }
    },
    {
      icon: <Heart className="text-pink-600" size={24} />,
      title: {
        de: "Persönliche Betreuung",
        en: "Personal Care"
      },
      description: {
        de: "Individuelle Beratung und maßgeschneiderte Behandlungen",
        en: "Individual consultation and tailored treatments"
      }
    }
  ];

  const texts = {
    backToHome: {
      de: "Zurück zur Startseite",
      en: "Back to Home"
    },
    aboutTitle: {
      de: "Über Ellanails Studio",
      en: "About Ellanails Studio"
    },
    sinceText: {
      de: "Ihr Schönheitsstudio in Darmstadt seit 2020 💖",
      en: "Your Beauty Studio in Darmstadt since 2020 💖"
    },
    welcomeText: {
      de: "Willkommen bei Ellanails Studio, Ihrem professionellen Nagelstudio im Herzen von Darmstadt! Seit 2020 bieten wir Ihnen höchste Qualität und exzellenten Service in einem modernen und entspannten Ambiente.",
      en: "Welcome to Ellanails Studio, your professional nail studio in the heart of Darmstadt! Since 2020, we have been offering you the highest quality and excellent service in a modern and relaxed atmosphere."
    },
    servicesTitle: {
      de: "Unsere Leistungen",
      en: "Our Services"
    },
    servicesText: {
      de: "Neben professionellen Nagelservices bieten wir Ihnen eine breite Palette an Schönheitsbehandlungen, die für Ihre ganzheitliche Schönheit sorgen. Zu unseren Spezialitäten gehören:",
      en: "In addition to professional nail services, we offer you a wide range of beauty treatments that ensure your holistic beauty. Our specialties include:"
    },
    servicesList: {
      de: [
        "Wimpernverlängerung (1:1, Volumentechnik und viele weitere Techniken)",
        "Augenbrauen & Wimpern färben und zupfen",
        "Waxing für Damen und Herren (inklusive Intim-, Bein- und Gesichtsbehandlungen)",
        "Sugaring für eine sanfte Haarentfernung",
        "Maniküre & Pediküre (inklusive Gellack, Shellac und klassische Varianten)",
        "Nagelmodellagen mit Gel, Acryl und Pulvergel"
      ],
      en: [
        "Eyelash extensions (1:1, volume technique and many other techniques)",
        "Eyebrow & eyelash tinting and plucking",
        "Waxing for ladies and gentlemen (including intimate, leg and facial treatments)",
        "Sugaring for gentle hair removal",
        "Manicure & pedicure (including gel polish, shellac and classic variants)",
        "Nail modeling with gel, acrylic and powder gel"
      ]
    },
    experienceText: {
      de: "Unsere erfahrenen Meister kümmern sich nicht nur um Ihre Nägel, sondern auch um Ihr Wohlbefinden mit Behandlungen, die Sie rundum entspannen und verschönern.",
      en: "Our experienced masters not only take care of your nails but also your well-being with treatments that relax and beautify you all around."
    },
    whyChooseUs: {
      de: "Warum Ellanails Studio?",
      en: "Why Choose Ellanails Studio?"
    },
    visitUs: {
      de: "Besuchen Sie uns!",
      en: "Visit Us!"
    },
    bookNow: {
      de: "Jetzt Termin sichern und Schönheit genießen.",
      en: "Book now and enjoy beauty."
    },
    bookAppointment: {
      de: "Termin buchen",
      en: "Book Appointment"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="inline-flex items-center text-pink-600 hover:text-pink-700">
            <ChevronLeft size={20} />
            <span>{texts.backToHome[language]}</span>
          </Link>
          <LanguageSwitch />
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-12 h-[300px]">
          <img 
            src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
            alt={texts.aboutTitle[language]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-transparent flex items-center">
            <div className="text-white p-8">
              <h1 className="text-4xl font-bold mb-4">{texts.aboutTitle[language]}</h1>
              <p className="text-xl">{texts.sinceText[language]}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              {texts.welcomeText[language]}
            </p>

            <h2 className="text-2xl font-bold text-pink-600 mb-4">{texts.servicesTitle[language]}</h2>
            <p className="text-gray-700 mb-6">
              {texts.servicesText[language]}
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              {texts.servicesList[language].map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>

            <p className="text-gray-700 mb-8">
              {texts.experienceText[language]}
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {texts.whyChooseUs[language]}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-800">{feature.title[language]}</h3>
              </div>
              <p className="text-gray-600">{feature.description[language]}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-pink-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{texts.visitUs[language]}</h2>
          <p className="mb-6">
            {texts.bookNow[language]}
          </p>
          <Link 
            to="/"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-md hover:bg-pink-50 transition-colors"
          >
            {texts.bookAppointment[language]}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;