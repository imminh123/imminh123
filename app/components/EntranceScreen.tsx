'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getGuestName } from '../lib/guestList';

export function EntranceScreen() {
  const [guestName, setGuestName] = useState('Friend');
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Parse guest ID from URL hash (e.g., #g=5)
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const guestId = params.get('g');

    if (guestId) {
      const name = getGuestName(guestId);
      setGuestName(name);
      // Store in sessionStorage for the session
      sessionStorage.setItem('guestName', name);
      // Clear the hash from URL to hide it completely
      window.history.replaceState(null, '', window.location.pathname);
    } else {
      // Check if name was stored in sessionStorage from previous page load
      const storedName = sessionStorage.getItem('guestName');
      if (storedName) {
        setGuestName(storedName);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled) {
        setHasScrolled(true);
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  if (!isVisible && hasScrolled) {
    return null;
  }

  return (
    <>
      <style>{`
        @keyframes entrance-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes entrance-slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes entrance-bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes entrance-fade-out {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-30px);
          }
        }

        .entrance-screen {
          animation: entrance-fade-in 0.8s ease-out;
        }

        .entrance-screen.fading-out {
          animation: entrance-fade-out 0.6s ease-out forwards;
        }

        .entrance-text {
          animation: entrance-slide-up 1s ease-out 0.3s backwards;
        }

        .entrance-cta {
          animation: entrance-slide-up 1s ease-out 0.6s backwards;
        }

        .entrance-scroll-indicator {
          animation: entrance-bounce 2s ease-in-out 1.5s infinite;
        }
      `}</style>

      <div
        className={`entrance-screen fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-black ${
          !isVisible ? 'fading-out' : ''
        }`}
      >
        {/* Photo of you pointing */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 rounded-full overflow-hidden border-4 border-neutral-200 dark:border-neutral-800 shadow-2xl">
          <Image
            src="https://d12g7i3vymjmyt.cloudfront.net/images/pointing-photo.jpg"
            alt="Minh pointing at you"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Personalized greeting */}
        <div className="entrance-text text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
            Hey {guestName}!
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400">
            I&rsquo;ve got something special to share with you...
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="entrance-cta absolute bottom-12 flex flex-col items-center gap-3">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">
            Scroll Down
          </p>
          <div className="entrance-scroll-indicator">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-600 dark:text-neutral-400"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
