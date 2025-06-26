'use client';

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/app/contexts/theme-context';
import clsx from 'clsx';

export default function SideNav() {
  const { theme } = useTheme();

  const containerClasses = clsx(
    'flex h-full flex-col px-3 py-4 md:px-2',
    {
      'bg-ctp-mantle': theme === 'catppuccin',
      'bg-gray-50': theme === 'original',
    }
  );

  const logoLinkClasses = clsx(
    'mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40',
    {
      'bg-ctp-mauve': theme === 'catppuccin',
      'bg-blue-600': theme === 'original',
    }
  );

  const logoTextClasses = clsx(
    'w-32 md:w-40',
    {
      'text-ctp-base': theme === 'catppuccin',
      'text-white': theme === 'original',
    }
  );

  const spacerClasses = clsx(
    'hidden h-auto w-full grow rounded-md md:block',
    {
      'bg-ctp-surface0': theme === 'catppuccin',
      'bg-gray-50': theme === 'original',
    }
  );

  const signOutButtonClasses = clsx(
    'flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 transition-colors duration-200',
    {
      'bg-ctp-surface0 text-ctp-subtext1 hover:bg-ctp-surface1 hover:text-ctp-red': theme === 'catppuccin',
      'bg-gray-50 hover:bg-sky-100 hover:text-blue-600': theme === 'original',
    }
  );

  return (
    <div className={containerClasses}>
      <Link
        className={logoLinkClasses}
        href="/"
      >
        <div className={logoTextClasses}>
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className={spacerClasses}></div>
        <form>
          <button className={signOutButtonClasses}>
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
