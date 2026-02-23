'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = {
  '/': {
    name: 'home',
  },
  '/moments': {
    name: 'moments',
  },
  '/work': {
    name: 'work',
  },
  '/blog': {
    name: 'thought',
  },
  '/running': {
    name: 'running',
  },
  '/weregettingmarried': {
    name: "we're getting married",
  },
};

const hiddenOnRoutes = ['/weregettingmarried', '/weregettingmarried/bride'];

export function Navbar() {
  const pathname = usePathname();

  if (hiddenOnRoutes.includes(pathname)) {
    return null;
  }

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20 ">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
