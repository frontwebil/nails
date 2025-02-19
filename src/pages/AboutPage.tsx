import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Sparkles, Shield, MapPin, Award, Clock, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function AboutPage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Award className="text-pink-600" size={24} />,
      title: t('features.master'),
      description: t('features.master.desc')
    },
    {
      icon: <Sparkles className="text-pink-600" size={24} />,
      title: t('features.services'),
      description: t('features.services.desc')
    },
    {
      icon: <Shield className="text-pink-600" size={24} />,
      title: t('features.quality'),
      description: t('features.quality.desc')
    },
    {
      icon: <MapPin className="text-pink-600" size={24} />,
      title: t('features.location'),
      description: t('features.location.desc')
    },
    {
      icon: <Clock className="text-pink-600" size={24} />,
      title: t('features.hours'),
      description: t('features.hours.desc')
    },
    {
      icon: <Heart className="text-pink-600" size={24} />,
      title: t('features.care'),
      description: t('features.care.desc')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-pink-600 hover:text-pink-700">
            <ChevronLeft size={20} />
            <span>{t('about.back')}</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-12 h-[300px]">
          <img 
            src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
            alt={t('about.hero.alt')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-transparent flex items-center">
            <div className="text-white p-8">
              <h1 className="text-4xl font-bold mb-4">{t('about.hero.title')}</h1>
              <p className="text-xl">{t('about.hero.subtitle')} 💖</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              {t('about.welcome')}
            </p>

            <h2 className="text-2xl font-bold text-pink-600 mb-4">{t('about.services.title')}</h2>
            <p className="text-gray-700 mb-6">
              {t('about.services.description')}
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>{t('about.services.list.1')}</li>
              <li>{t('about.services.list.2')}</li>
              <li>{t('about.services.list.3')}</li>
              <li>{t('about.services.list.4')}</li>
              <li>{t('about.services.list.5')}</li>
              <li>{t('about.services.list.6')}</li>
            </ul>

            <p className="text-gray-700 mb-8">
              {t('about.expertise')}
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{t('about.why.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-pink-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('about.cta.title')}</h2>
          <p className="mb-6">
            {t('about.cta.subtitle')}
          </p>
          <Link 
            to="/"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-md hover:bg-pink-50 transition-colors"
          >
            {t('about.cta.button')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;