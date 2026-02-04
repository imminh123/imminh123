'use client';

import { useEffect, useState } from 'react';
import { getGuest, type Guest } from '../lib/guestList';

export function PersonalizedGreeting() {
  const [guest, setGuest] = useState<Guest | null>(null);

  useEffect(() => {
    // Parse guest ID from URL hash (e.g., #g=x7k2)
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const guestId = params.get('g');

    if (guestId) {
      const guestData = getGuest(guestId);
      if (guestData) {
        setGuest(guestData);
        // Store in sessionStorage for the session
        sessionStorage.setItem('guestData', JSON.stringify(guestData));
      }
      // Clear the hash from URL to hide it completely
      window.history.replaceState(null, '', window.location.pathname);
    } else {
      // Check if guest data was stored in sessionStorage from previous page load
      const storedData = sessionStorage.getItem('guestData');
      if (storedData) {
        try {
          setGuest(JSON.parse(storedData));
        } catch (e) {
          // Invalid stored data, ignore
        }
      }
    }
  }, []);

  if (!guest) {
    return null;
  }

  return (
    <div className="mb-6">
      <p
        className="wedding-fade-up text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-serif italic"
        style={{ animationDelay: '0.2s' }}
      >
        Dear {guest.name},
      </p>
      {guest.greeting && (
        <p
          className="wedding-fade-up text-sm md:text-base text-neutral-500 dark:text-neutral-400 mt-3 max-w-md mx-auto"
          style={{ animationDelay: '0.3s', fontFamily: 'var(--font-geist-sans), sans-serif' }}
        >
          {guest.greeting}
        </p>
      )}
    </div>
  );
}
