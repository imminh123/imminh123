'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const photos = [
  { src: '/images/home/filming.jpg', alt: 'Together', rotate: '-3deg', delay: 0.3 },
  { src: '/images/home/kth.jpg', alt: 'Adventures', rotate: '2deg', delay: 0.5 },
  { src: '/images/home/summit.jpg', alt: 'Moments', rotate: '-1.5deg', delay: 0.7 },
  { src: '/images/home/meetups.jpg', alt: 'Memories', rotate: '3deg', delay: 0.9 },
  { src: '/images/home/ship.jpg', alt: 'Journey', rotate: '-2deg', delay: 1.1 },
  { src: '/images/home/startup.jpg', alt: 'Us', rotate: '1.5deg', delay: 1.3 },
];

export default function WereGettingMarried() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        @keyframes wedding-fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wedding-breathe {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes wedding-line-grow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes wedding-photo-reveal {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0px);
          }
        }

        @keyframes wedding-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes wedding-dot-pulse {
          0%, 80%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          40% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .wedding-page {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
        }

        .wedding-fade-up {
          animation: wedding-fade-up 1s ease-out forwards;
          opacity: 0;
        }

        .wedding-breathe {
          animation: wedding-breathe 4s ease-in-out infinite;
        }

        .wedding-line {
          animation: wedding-line-grow 1.2s ease-out forwards;
          animation-delay: 0.6s;
          transform: scaleX(0);
        }

        .wedding-photo {
          animation: wedding-photo-reveal 0.8s ease-out forwards;
          opacity: 0;
        }

        .wedding-float {
          animation: wedding-float 5s ease-in-out infinite;
        }

        .wedding-dot {
          animation: wedding-dot-pulse 1.8s ease-in-out infinite;
        }
      `}</style>

      <section className="wedding-page -mx-2 md:mx-0">
        {/* Hero Section */}
        <div
          className="wedding-fade-up text-center pt-8 pb-12"
          style={{ animationDelay: '0.1s' }}
        >
          {/* Decorative top flourish */}
          <div
            className="wedding-breathe text-neutral-300 dark:text-neutral-700 text-2xl tracking-[0.5em] mb-8"
            style={{ fontVariantLigatures: 'common-ligatures' }}
          >
            ~ ~ ~
          </div>

          <p
            className="wedding-fade-up text-xs uppercase tracking-[0.4em] text-neutral-400 dark:text-neutral-500 mb-6"
            style={{ animationDelay: '0.3s', fontFamily: 'var(--font-geist-sans), sans-serif' }}
          >
            Something beautiful is coming
          </p>

          <h1
            className="wedding-fade-up text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4"
            style={{ animationDelay: '0.5s' }}
          >
            We&rsquo;re Getting
            <br />
            <em className="font-normal">Married</em>
          </h1>

          {/* Decorative line */}
          <div className="flex justify-center my-8">
            <div
              className="wedding-line h-px w-24 bg-neutral-300 dark:bg-neutral-700"
            />
          </div>

          <p
            className="wedding-fade-up text-sm text-neutral-500 dark:text-neutral-400 max-w-xs mx-auto leading-relaxed"
            style={{ animationDelay: '0.8s', fontFamily: 'var(--font-geist-sans), sans-serif' }}
          >
            We can&rsquo;t wait to share this chapter with you.
            <br />
            Details are on their way.
          </p>
        </div>

        {/* Photo Collage */}
        {!mounted && (
          <div className="py-8">
            <p
              className="wedding-fade-up text-center text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-8"
              style={{ animationDelay: '1s', fontFamily: 'var(--font-geist-sans), sans-serif' }}
            >
              Our Story So Far
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 px-2">
              {photos.map((photo, i) => (
                <div
                  key={photo.src}
                  className="wedding-photo wedding-float relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-900"
                  style={{
                    animationDelay: `${photo.delay}s`,
                    animationFillMode: 'forwards',
                    // Float at different speeds for organic feel
                    animationDuration: `${4.5 + i * 0.7}s`,
                    rotate: photo.rotate,
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-500" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom section */}
        <div
          className="wedding-fade-up text-center py-16"
          style={{ animationDelay: '1.6s' }}
        >
          {/* <div className="flex justify-center items-center gap-3 mb-8">
            <span className="wedding-dot inline-block w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500" style={{ animationDelay: '0s' }} />
            <span className="wedding-dot inline-block w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500" style={{ animationDelay: '0.3s' }} />
            <span className="wedding-dot inline-block w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500" style={{ animationDelay: '0.6s' }} />
          </div> */}

          <p
            className="text-lg italic text-neutral-600 dark:text-neutral-300 mb-2"
          >
            Stay tuned
          </p>
          <p
            className="text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600"
            style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
          >
            More details coming soon
          </p>

          {/* Decorative bottom flourish */}
          <div
            className="wedding-breathe text-neutral-300 dark:text-neutral-700 text-2xl tracking-[0.5em] mt-12"
            style={{ animationDelay: '2s' }}
          >
            ~ ~ ~
          </div>
        </div>
      </section>
    </>
  );
}
