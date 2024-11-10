'use client';

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const localConsent = localStorage.getItem('cookieConsent');
    const cookieConsent = Cookies.get('cookieConsent');
    if (!localConsent && !cookieConsent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    Cookies.set('cookieConsent', 'true', { expires: 365 }); // Cookie expires in 1 year
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    Cookies.set('cookieConsent', 'false', { expires: 365 }); // Cookie expires in 1 year
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <h2 className="text-lg font-bold mb-2">Do you want to accept FreeFriday.Games Cookies?</h2>
      <p className="mb-4 text-sm">We use cookies to enhance your browsing experience and analyze our traffic. Your consent will be stored for 1 year.</p>
      <div className="flex justify-between">
        <button
          onClick={handleAccept}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded text-end"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;