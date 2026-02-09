'use client';

import { useEffect, useState } from 'react';

function getAppName(ua: string) {
  if (/Zalo/i.test(ua)) return 'Zalo';
  if (/FBAN|FBAV/i.test(ua)) return 'Facebook';
  if (/Instagram/i.test(ua)) return 'Instagram';
  if (/Line\//i.test(ua)) return 'LINE';
  if (/MicroMessenger/i.test(ua)) return 'WeChat';
  return null;
}

function getInstructions(app: string | null) {
  switch (app) {
    case 'Zalo':
      return 'Nhấn vào menu ⋯ ở góc phải bên trên và chọn "Mở bằng Safari"';
    default:
      return 'Nhấn vào menu ⋯ và chọn "Mở trong Safari" hoặc "Mở trong trình duyệt"\nTap the ⋯ menu and select "Open in Safari" or "Open in browser"';
  }
}

export function WebviewCheckModal() {
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);
  const [appName, setAppName] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || '';
    const inApp = /Zalo|FBAN|FBAV|Instagram|Line|MicroMessenger|Snapchat|Twitter|LinkedInApp/i.test(ua);
    setIsInAppBrowser(inApp);
    if (inApp) setAppName(getAppName(ua));
  }, []);

  if (!isInAppBrowser) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="mx-4 max-w-sm rounded-lg bg-white p-6 text-center shadow-xl dark:bg-neutral-900">
        <p className="mb-1 text-base font-medium text-neutral-800 dark:text-neutral-200">
          Để có trải nghiệm tốt nhất, vui lòng mở trang này trong Safari / For the best experience, please open this page in Safari 
        </p>
        <hr className='my-2' />
        {/* <button
          onClick={copyLink}
          className="mb-4 w-full rounded-md bg-neutral-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-neutral-300"
        >
          {copied ? 'Đã sao chép!' : 'Sao chép liên kết / Copy Link'}
        </button> */}
        <p className="whitespace-pre-line text-xs leading-relaxed text-neutral-500 dark:text-neutral-400 text-left">
          {getInstructions(appName)}
        </p>
      </div>
    </div>
  );
}
