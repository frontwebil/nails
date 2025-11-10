import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import PriceListPage from './pages/PriceListPage';
import AboutPage from './pages/AboutPage';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/preise" element={<PriceListPage />} />
      <Route path="/ueber-uns" element={<AboutPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;