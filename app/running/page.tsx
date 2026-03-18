'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import ImageList from '../components/ImageList';

type Run = {
  id: string;
  title: string;
  distance: string;
  date: string;
  avatar: string;
  location: string;
  video: string;
  description: string;
  images: { url: string; alt: string }[];
};

const runningData: Run[] = [
  {
    id: '1',
    title: 'Helsinki Marathon',
    distance: '21km',
    date: 'October 15, 2024',
    location: 'Helsinki, Finland',
    description:
      'My first half marathon in the beautiful sunny Helsinki. I made a promise to myself 2 months prior to this race. After so long of not running, I can barely run a 5km without stopping. I stuck to my training plan made by Gemini AI 🤣. After all, I made it (pace 6:11, not so bad for a first HM).',
    avatar: "https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/IMG_5026.JPG",
    video: "https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/Helsinki Marathon.mp4",
    images: [
      {
        url: 'https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/IMG_4835.jpg',
        alt: 'Starting line at Helsinki Marathon',
      }
    ],
  },
  {
    id: '5',
    title: 'Tallinn 10K',
    distance: '10km',
    date: '2025',
    location: 'Tallinn, Estonia',
    description: 'THIS WAS SO MUCH FUN! We took a ferry from Helsinki to Tallin (Estonia) just to run this 10K. It was a blast, we spent a night in the lovely old town of Tallin, explore the city, bought a bunch of alcohol and come back to Helsinki the next day.',
    avatar: 'https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/tallin_ava.jpeg',
    video: 'https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/tallin_2.mp4',
    images: [
      { url: 'https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/tallin_1.jpeg', alt: 'Tallinn 10K' },
    ],
  },
  {
    id: '6',
    title: 'Tet Run Half Marathon',
    distance: '21km',
    date: '2026',
    location: 'Vietnam',
    description: 'My first half marathon in Vietnam. The pace was tragic since I took a 6 months break from running. I gain tons of weight coming back to Vietnam, barely can run 5km without stopping, and I think I this is what caused my knee injury. Bummer!',
    avatar: 'https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/tet_26_ava.jpeg',
    video: '',
    images: [
      { url: 'https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/tet_26.jpeg', alt: 'Tet Run Half Marathon 2026' },
    ],
  },
  {
    id: '4',
    title: 'Espoo 10K - 25',
    distance: '10km',
    date: '2025',
    location: 'Espoo, Finland',
    description: 'My 3th time running the Espoo Ranta Marathon, and my 2nd time running the 10K. You can see some familiar faces. Also, I did breake my PR for 10K in sub 60 mins!!!. Not sure I can keep the streak in 2026.',
    avatar: 'https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/espoo_25_ava.JPG',
    video: '',
    images: [
      { url: 'https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/espoo_25.JPG', alt: 'Espoo 10K 2025' },
      { url: 'https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/espoo_25_2.JPG', alt: 'Espoo 10K 2025' },
      { url: 'https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/espoo_25_3.JPG', alt: 'Espoo 10K 2025' },
      { url: 'https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/espoo_25_4.JPG', alt: 'Espoo 10K 2025' },
    ],
  },
  {
    id: '3',
    title: 'Espoo 10K - 24',
    distance: '10km',
    date: '2024',
    location: 'Espoo, Finland',
    description: 'My 2nd time running the Espoo Ranta Marathon, and my 1st time running the 10K. It was a challenging race, but it started the journey of running for me.',
    avatar: 'https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/espoo_24.jpeg',
    video: '',
    images: [
      { url: 'https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/espoo_24_2.jpeg', alt: 'Espoo 10K 2024' },
    ],
  },
  {
    id: '2',
    title: 'Espoo 5K - 23',
    distance: '5km',
    date: '2023',
    location: 'Espoo, Finland',
    description: '1st running event ever. My GF was there to cheer me up. Aloka was with me from this day. Fun day!',
    avatar: 'https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/espo_23.jpeg',
    video: '',
    images: [
      { url: 'https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/espoo_23.jpeg', alt: 'Espoo 5K 2023' },
      { url: 'https://d1xyk52624qxh5.cloudfront.net/Run/Helsinki Marathon (21KM)/espoo_23_2.jpeg', alt: 'Espoo 5K 2023' },
    ],
  },
];

export default function RunningPage() {
  const [selectedRun, setSelectedRun] = useState<Run>(runningData[0]);

  return (
    <div className="max-w-full">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        running diaries
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Sidebar - Run List */}
        <div className="lg:col-span-1">
          <div className="space-y-2">
            {runningData.map((run) => (
              <button
                key={run.id}
                onClick={() => setSelectedRun(run)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  selectedRun.id === run.id
                    ? 'bg-neutral-50 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600'
                    : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                }`}
              >
                <h3 className="font-medium text-sm mb-1">{run.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                  {run.distance}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-2">
          <div className="prose-neutral dark:prose-invert max-w-none">
            <div className="flex gap-4 mb-6 items-center">
              <div className="flex-1">
                <span className="font-medium text-xl mb-2 tracking-tighter">
                  {selectedRun.title}
                </span>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm my-1">
                  {selectedRun.location} • {selectedRun.date}
                </p>
              </div>
               {selectedRun.avatar && (
                <div className="relative w-36 h-36 flex-shrink-0">
                  <Image
                    src={selectedRun.avatar}
                    alt='Run Highlight'
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              )}
            </div>
            <p className="mb-6 text-neutral-700 dark:text-neutral-300">
              {selectedRun.description}
            </p>

              {selectedRun.video && (
                <div className="mb-6">
                  <video
                    controls
                    className="w-full rounded-lg"
                    preload="metadata"
                  >
                    <source src={selectedRun.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            {selectedRun.images.length > 0 && (
              <div className="mb-6">
                <ImageList images={selectedRun.images} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
