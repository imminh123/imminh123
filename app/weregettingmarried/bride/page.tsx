import Image from 'next/image';
import { fetchWeddingImages } from '../../lib/fetchImages';
import { PersonalizedGreeting } from '../../components/PersonalizedGreeting';
import { WebviewCheckModal } from '../webviewCheckModal';
import type { Metadata } from 'next';
import '../wedding.css';

const rotations = ['-3deg', '2deg', '-1.5deg', '3deg', '-2deg', '1.5deg'];

export function generateMetadata(): Metadata {
  const title = "We're Getting Married — Minh & Hue";
  const description =
    'A little surprise for you. Save the date: March 6, 2026.';
  const ogImage = 'https://d12g7i3vymjmyt.cloudfront.net/others/thumbnail.jpg';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://d12g7i3vymjmyt.cloudfront.net/others/thumbnail.jpg',
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function WereGettingMarried() {
  const [weddingImages, travelImages] = await Promise.all([
    fetchWeddingImages(),
    fetchWeddingImages('travel'),
  ]);

  return (
    <section className="wedding-page -mx-2 md:mx-0">
      <WebviewCheckModal />

      {/* Background Video */}
      <video className="hero-video-bg" autoPlay loop muted playsInline>
        <source
          src="https://d12g7i3vymjmyt.cloudfront.net/videos/copy_DC7AD864-2836-4B22-A484-AB0AE34346CE.MOV"
          type="video/mp4"
        />
      </video>

      {/* Hero Section */}
      <div
        className="wedding-fade-up text-center pt-8 pb-12 relative"
        style={{ animationDelay: '0.1s' }}
      >
        {/* Decorative top flourish */}
        <div
          className="wedding-breathe text-neutral-300 dark:text-neutral-700 text-2xl tracking-[0.5em] mb-8"
          style={{ fontVariantLigatures: 'common-ligatures' }}
        >
          ~ ~ ~
        </div>

        <PersonalizedGreeting />

        {/* <p
            className="wedding-fade-up text-xs uppercase tracking-[0.4em] text-neutral-400 dark:text-neutral-500 mb-6"
            style={{ animationDelay: '0.3s', fontFamily: 'var(--font-geist-sans), sans-serif' }}
          >
            Something beautiful is coming
          </p> */}

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
          <div className="wedding-line h-px w-24 bg-neutral-300 dark:bg-neutral-700" />
        </div>

        <div
          className="wedding-fade-up text-sm text-neutral-500 dark:text-neutral-400 max-w-xs mx-auto leading-relaxed space-y-4 text-left"
          style={{
            animationDelay: '0.8s',
            fontFamily: 'var(--font-geist-sans), sans-serif',
          }}
        >
          <p>
            Hei, I just wanna say thank you for being part of my beautiful
            journey. Having you with us on this special day is truly the
            greatest gift we could ask for.
          </p>
          <p>
            We know that to be here meant long flights, packed suitcases, and
            time taken away from your own lives, and that makes your presence
            even more meaningful to us.
          </p>
          <p>
            From the bottom of my heart, I hope you are happy, and that you have
            found love or that love finds you, again and again.
          </p>
          <p className="mt-6 text-right italic">Minh & Hue</p>
        </div>

        {/* Save the Date */}
        <div className="mt-12">
          <p
            className="text-sm uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-4"
            style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
          >
            Save the Date
          </p>
          <p className="text-2xl md:text-3xl font-semibold mb-2">
            Sunday, March 8, 2026
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            11:00 AM
          </p>
        </div>
      </div>

      {/* Photo Collage */}
      <div className="py-8">
        <p
          className="wedding-fade-up text-center text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-8"
          style={{
            animationDelay: '1s',
            fontFamily: 'var(--font-geist-sans), sans-serif',
          }}
        >
          Before Minh Loses His Freedom
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 px-2 mb-12">
          {weddingImages.map((imageUrl, i) => (
            <div
              key={imageUrl}
              className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-900"
              style={{
                rotate: rotations[i % rotations.length],
              }}
            >
              <Image
                src={imageUrl}
                alt={`Wedding memory ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Wedding Images Gallery */}
        {/* {weddingImages.length > 0 && (
            <>
              <p
                className="wedding-fade-up text-center text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-8 mt-16"
                style={{ animationDelay: '1.3s', fontFamily: 'var(--font-geist-sans), sans-serif' }}
              >
                Our Journey Together
              </p>
              <MasonryGallery images={weddingImages} />
            </>
          )} */}
      </div>

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

        <div className="max-w-2xl mx-auto px-4">
          {/* Venue */}
          <div className="mb-8">
            <p
              className="text-sm uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-4"
              style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
            >
              Venue
            </p>
            <p className="text-xl md:text-2xl font-semibold mb-3">
              Tung Duong Palace
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
              37 Quang Trung, Dong Tam,
              <br />
              Yen Bai, Vietnam
            </p>

            {/* Map Link */}
            <a
              href="https://maps.app.goo.gl/Wo6VQTbPPfWvLChH9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-[0.2em] text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 rounded-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300"
              style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              View on Map
            </a>
          </div>
        </div>

        {/* Travel Photos */}
        {travelImages.length > 0 && (
          <div className="py-8">
            <p
              className="text-center text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-8"
              style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
            >
              Our Adventures Together
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 px-2">
              {travelImages.map((imageUrl, i) => (
                <div
                  key={imageUrl}
                  className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-900"
                  style={{
                    rotate: rotations[i % rotations.length],
                  }}
                >
                  <Image
                    src={imageUrl}
                    alt={`Travel memory ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-500" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Decorative bottom flourish */}
        <div
          className="wedding-breathe text-neutral-300 dark:text-neutral-700 text-2xl tracking-[0.5em] mt-12"
          style={{ animationDelay: '2s' }}
        >
          ~ ~ ~
        </div>
      </div>
    </section>
  );
}
