'use client';

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { useTheme } from '@/app/contexts/theme-context';
import clsx from 'clsx';
import ThemeToggle from '@/app/ui/theme-toggle';

export default function Page() {
  const { theme } = useTheme();

  const mainClasses = clsx(
    'flex min-h-screen flex-col p-6',
    {
      'bg-ctp-base': theme === 'catppuccin',
      'bg-white': theme === 'original',
    }
  );

  const headerClasses = clsx(
    'flex h-20 shrink-0 items-end rounded-lg p-4 md:h-52',
    {
      'bg-ctp-mauve': theme === 'catppuccin',
      'bg-blue-500': theme === 'original',
    }
  );

  const contentCardClasses = clsx(
    'flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20',
    {
      'bg-ctp-surface0': theme === 'catppuccin',
      'bg-gray-50': theme === 'original',
    }
  );

  const textClasses = clsx(
    lusitana.className,
    'antialiased text-xl md:text-3xl md:leading-normal',
    {
      'text-ctp-text': theme === 'catppuccin',
      'text-gray-800': theme === 'original',
    }
  );

  const linkClasses = clsx(
    'flex items-center gap-5 self-start rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors md:text-base',
    {
      'bg-ctp-lavender hover:bg-ctp-mauve': theme === 'catppuccin',
      'bg-blue-500 hover:bg-blue-400': theme === 'original',
    }
  );

  const linkTextClasses = clsx(
    {
      'text-ctp-blue hover:text-ctp-sapphire': theme === 'catppuccin',
      'text-blue-500': theme === 'original',
    }
  );

  return (
    <main className={mainClasses}>
      {/* Theme toggle in top-right corner */}
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>

      <div className={headerClasses}>
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className={contentCardClasses}>
          <div
            className={clsx(
              'relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent',
              {
                'border-b-ctp-text': theme === 'catppuccin',
                'border-b-black': theme === 'original',
              }
            )}
          />
          <p className={textClasses}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className={linkTextClasses}>
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className={linkClasses}
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main >
  );
}
