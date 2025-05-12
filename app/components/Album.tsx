'use client';

import { useState } from 'react';
import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Dialog,
  DialogPanel,
} from '@headlessui/react';
import Image from 'next/image';

type Props = {
  images: string[];
  onImageClick?: (url: string) => void;
};

function isVideo(url: string) {
  return /\.(webm|ogg|mp4)$/i.test(url);
}

export function ZaraGrid({ images, onImageClick }: Props) {
  const coverImage = images[0];
  const childImages = images.slice(1);
  return (
    <div className="">
      <Image
        src={coverImage}
        alt={"cover-photo"}
        width={1200}
        height={300}
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105 w-full h-80 mb-4"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {childImages.map((url, i) => (
          <div
            key={i}
            className="relative aspect-[2/3] overflow-hidden group cursor-pointer"
            onClick={() => onImageClick?.(url)}
          >
            {isVideo(url) ? (
              <video
                src={url}
                className="w-full h-full object-cover group-hover:scale-105"
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <Image
                src={url}
                alt={`photo-${i}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// AlbumGallery component: tabs + grid + fullscreen viewer
export default function AlbumGallery({
  albums,
}: {
  albums: Record<string, string[]>;
}) {
  const albumNames = Object.keys(albums);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      {/* Album Tabs: horizontal-scroll on mobile, static on desktop */}
      <TabGroup>
        <TabList className="flex space-x-3 overflow-x-auto md:overflow-x-visible md:justify-start">
          {albumNames.map((name) => (
            <Tab
              key={name}
              className={({ selected }) =>
                classNames(
                  'text-sm md:text-base px-3 py-2 whitespace-nowrap capitalize outline-none focus:ring-0 focus:outline-none',
                  selected ? 'text-white' : 'text-gray-400 hover:text-white'
                )
              }
            >
              {name}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {albumNames.map((name) => (
            <TabPanel key={name} className="mt-4">
              <ZaraGrid
                images={albums[name]}
                onImageClick={(url) => setSelectedImage(url)}
              />
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>

      {/* Fullscreen Image Viewer */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-80"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel
            className="relative w-full max-w-4xl h-[90vh]"
            transition
            // onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl z-10"
            >
              ×
            </button>
            {selectedImage &&
              (isVideo(selectedImage) ? (
                <video
                  controls
                  preload="auto"
                  className="w-full h-auto rounded-xl"
                  poster="/placeholder.jpg" // Optional
                >
                  <source src={selectedImage} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={selectedImage}
                  alt={`fullscreen-photo`}
                  fill
                  className="object-contain"
                />
              ))}
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}

// Utility for conditional class names
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
