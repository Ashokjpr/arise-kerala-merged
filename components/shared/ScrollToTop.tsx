'use client';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-15 right-6 z-50 rounded-full bg-green-600 p-3 text-white shadow-lg transition-all duration-300
        ${visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
        hover:bg-green-700`}
    >
      <Icon icon="mdi:arrow-up-bold" className="text-xl" />
    </button>
  );
}
