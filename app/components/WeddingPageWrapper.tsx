'use client';

import { Suspense } from 'react';
import { EntranceScreen } from './EntranceScreen';

function EntranceScreenFallback() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-neutral-300 dark:border-neutral-700 border-t-neutral-600 dark:border-t-neutral-400 rounded-full animate-spin mx-auto mb-4" />
      </div>
    </div>
  );
}

export function WeddingPageWrapper() {
  return (
    <Suspense fallback={<EntranceScreenFallback />}>
      <EntranceScreen />
    </Suspense>
  );
}
