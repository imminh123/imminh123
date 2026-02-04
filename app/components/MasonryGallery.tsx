'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface MasonryGalleryProps {
  images: string[];
}

export function MasonryGallery({ images }: MasonryGalleryProps) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setLoadedImages((prev) => new Set(prev).add(index));
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    imageRefs.current.forEach((ref) => {
      if (ref && observerRef.current) {
        observerRef.current.observe(ref);
      }
    });
  }, [images]);

  return (
    <div className="columns-2 gap-3 md:gap-4 px-2">
      {images.map((url, index) => (
        <div
          key={url}
          ref={(el) => {
            imageRefs.current[index] = el;
          }}
          data-index={index}
          className="wedding-photo mb-3 md:mb-4 break-inside-avoid relative overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-900"
          style={{
            animationDelay: `${0.3 + index * 0.1}s`,
          }}
        >
          {loadedImages.has(index) ? (
            <div className="relative w-full">
              <Image
                src={url}
                alt={`Wedding memory ${index + 1}`}
                width={800}
                height={1200}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-500" />
            </div>
          ) : (
            <div className="w-full aspect-[3/4] bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
}
