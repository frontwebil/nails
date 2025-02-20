import React, { useState } from 'react';
import { Instagram, Facebook, Clock, MapPin, Phone, X, Star, Quote, Sparkles, Shield, Award, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitch } from '../components/LanguageSwitch';
import { sendBookingNotification } from "../../netlify/services/telegramService";
import { sendEmail } from "../../netlify/services/sendMail";

function HomePage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    category: '',
    comment: ''
  });

  console.log(bookingData)
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    { id: 'manikuere', name: t('category.manicure') },
    { id: 'acrylnaegel', name: t('category.nails') },
    { id: 'augenbrauen', name: t('category.brows') },
    { id: 'waxing', name: t('category.waxing') },
    { id: 'sugaring', name: t('category.sugaring') },
    { id: 'gesichtsbehandlungen', name: t('category.facial') },
    { id: 'wimpernverlaengerung', name: t('category.lashes') }
  ];

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

  const testimonials = [
    {
      name: "Olga Sch.",
      rating: 5,
      text: "Sehr professionell und freundlich. Ella ist eine echte Künstlerin, die ihre Arbeit mit Liebe macht. Ich bin sehr zufrieden mit dem Ergebnis und komme immer wieder gerne.",
      date: "vor 2 Monaten"
    },
    {
      name: "Natalia K.",
      rating: 5,
      text: "Super schöne Nägel! Ella ist sehr professionell und nimmt sich Zeit für jeden Kunden. Die Atmosphäre ist sehr angenehm. Ich bin sehr zufrieden und kann es nur weiterempfehlen!",
      date: "vor 1 Monat"
    },
    {
      name: "Marina B.",
      rating: 5,
      text: "Sehr saubere Arbeit, freundliche Atmosphäre und faire Preise. Ella ist eine echte Perfektionistin. Ich bin begeistert!",
      date: "vor 3 Monaten"
    }
  ];

  const instagramPosts = [
    {
      imageUrl: "./dist/nails/1.jpg",
      description: "Rote Maniküre – ein zeitloser Klassiker! ❤️✨",
      likes: 124,
      comments: 8
    },
    {
      imageUrl: "./dist/nails/2.jpg",
      description: "✨ Ellanails Studio – mehr als nur Maniküre! ✨",
      likes: 156,
      comments: 12
    },
    {
      imageUrl: "./dist/nails/3.jpg",
      description: "Baby Boomer Maniküre – Eleganz & Natürlichkeit für deine Nägel 💅✨",
      likes: 98,
      comments: 5
    }
  ];

  const timeSlots = [];
  for (let hour = 10; hour < 19; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, '0')}:00`);
    timeSlots.push(`${hour.toString().padStart(2, '0')}:30`);
  }
  timeSlots.push('19:00');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await sendEmail(bookingData); // Надсилаємо email, але не очікуємо відповіді
      const response = await sendBookingNotification(bookingData); // Надсилаємо телеграм-повідомлення

      if (response.ok) {
        setShowThankYou(true);
        setBookingData({
          name: "",
          phone: "",
          date: "",
          time: "",
          service: "manicure",
          comment: ''
        });
      } else {
        throw new Error(
          response.description || "Failed to send booking request"
        );
      }
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to submit booking"
      );
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="py-4 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-pink-600">Ellanails Studio</h1>
              <div className="flex items-center gap-4">
                <LanguageSwitch />
                <a href="https://www.instagram.com/ellanails_kosmetik_artist/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-pink-600 hover:text-pink-700">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/ellanails.beaty" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-pink-600 hover:text-pink-700">
                  <Facebook size={24} />
                </a>
                <a href="tel:+491520278889" 
                   className="text-pink-600 hover:text-pink-700">
                  <Phone size={24} />
                </a>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <nav className="py-4">
            <ul className="flex gap-8 justify-center">
              <li>
                <Link to="/preise" className="text-gray-700 hover:text-pink-600 font-medium">
                  {t('nav.prices')}
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="text-gray-700 hover:text-pink-600 font-medium">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <a href="#kontakt" className="text-gray-700 hover:text-pink-600 font-medium">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Image */}
        <div className="relative h-[500px] rounded-xl overflow-hidden mb-12">
          <img 
            src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
            alt="Nagelstudio Interieur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 to-transparent flex items-center">
            <div className="text-white p-8 max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">{t('hero.welcome')}</h2>
              <p className="text-xl mb-6">{t('hero.since')} 💖</p>
              <button
                onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 bg-white text-pink-600 px-6 py-2 rounded-md hover:bg-pink-50 transition-colors"
              >
                {t('hero.book')}
              </button>
            </div>
          </div>
        </div>

        {/* Instagram Feed Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">{t('instagram.recent')}</h2>
            <a 
              href="https://www.instagram.com/ellanails_kosmetik_artist/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-600 hover:text-pink-700"
            >
              <Instagram size={24} />
              <span className="font-medium">@ellanails_kosmetik_artist</span>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {instagramPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-square relative">
                  <img 
                    src={post.imageUrl} 
                    alt={post.description}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-800 mb-2">{post.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{post.likes} Likes</span>
                    <span>{post.comments} Kommentare</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a 
              href="https://www.instagram.com/ellanails_kosmetik_artist/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors"
            >
              {t('instagram.more')}
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{t('features.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>

        {/* Testimonials Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{t('testimonials.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 relative">
                <Quote className="absolute top-4 right-4 text-pink-200" size={24} />
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">{testimonial.text}</p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a 
              href="https://www.google.com/search?q=ellanails+studio+darmstadt&oq=ellanails+studio+darmstadt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
            >
              {t('testimonials.view')}
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Booking Form Section */}
        <div className="max-w-2xl mx-auto">
          <div id="booking-form" className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-pink-600 mb-6">{t('booking.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 text-red-700 rounded-md">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('booking.name')}</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t('booking.phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">{t('booking.category')}</label>
                <select
                  id="category"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  value={bookingData.category}
                  onChange={(e) => setBookingData({...bookingData, category: e.target.value})}
                >
                  <option value="">{t('booking.category.select')}</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">{t('booking.date')}</label>
                <input
                  type="date"
                  id="date"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">{t('booking.time')}</label>
                <select
                  id="time"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  value={bookingData.time}
                  onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                >
                  <option value="">{t('booking.time.select')}</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time} Uhr
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-sm text-gray-500">{t('booking.time.available')}</p>
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">{t('booking.comments')}</label>
                <textarea
                  id="comment"
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  value={bookingData.comment}
                  onChange={(e) => setBookingData({...bookingData, comment: e.target.value})}
                  placeholder={t('booking.comments.placeholder')}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('booking.submitting') : t('booking.submit')}
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-pink-600 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">{t('footer.contact')}</h4>
              <p>Elisabethenstraße 56</p>
              <p>Darmstadt, Hessen</p>
              <p className="mt-2">
                <a href="tel:+491520278889" className="hover:text-pink-200 transition-colors">
                  0152 027 88 889
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">{t('footer.hours')}</h4>
              <p>{t('footer.hours.text')}</p>
              <p>10:00 - 19:00 Uhr</p>
              <Link to="/admin" className="text-white hover:text-pink-200 text-sm mt-4 block">
                {t('footer.admin')}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
            <button 
              onClick={() => setShowThankYou(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">{t('thankyou.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('thankyou.message')}
              </p>
              <button
                onClick={() => setShowThankYou(false)}
                className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition-colors"
              >
                {t('thankyou.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;