import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle, Calendar, Clock, Scissors } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function ThankYouPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const bookingData = location.state?.bookingData;

  useEffect(() => {
    if (!bookingData) {
      navigate('/');
    }
  }, [bookingData, navigate]);

  if (!bookingData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 md:p-12">
        <div className="text-center mb-8">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {t('success.title')}
          </h1>
          <p className="text-gray-600 text-lg">
            {t('success.message')}
          </p>
        </div>

        <div className="bg-pink-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {t('success.details')}
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <p className="font-medium text-gray-700">{t('success.date')}</p>
                <p className="text-gray-600">{bookingData.date}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <p className="font-medium text-gray-700">{t('success.time')}</p>
                <p className="text-gray-600">{bookingData.time} Uhr</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Scissors className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <p className="font-medium text-gray-700">{t('success.service')}</p>
                <p className="text-gray-600">{bookingData.serviceName}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <p className="text-gray-600">
            {t('success.confirmation')}
          </p>
          <div className="space-y-3">
            <button
              onClick={() => navigate('/')}
              className="block w-full bg-pink-600 text-white py-3 px-6 rounded-md hover:bg-pink-700 transition-colors"
            >
              {t('success.back')}
            </button>
            <a
              href="https://www.instagram.com/ellanails_kosmetik_artist/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-200 transition-colors"
            >
              {t('success.follow')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;