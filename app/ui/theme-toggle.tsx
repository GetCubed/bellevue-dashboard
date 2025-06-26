'use client';

import { useTheme } from '@/app/contexts/theme-context';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={clsx(
                'flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 border w-[180px]',
                {
                    'bg-ctp-surface0 text-ctp-text hover:bg-ctp-surface1 border-ctp-surface2': theme === 'catppuccin',
                    'bg-white text-gray-900 hover:bg-gray-50 border-gray-200 shadow-sm': theme === 'original',
                }
            )}
        >
            <div className="flex items-center gap-2">
                {theme === 'catppuccin' ? (
                    <>
                        <SunIcon className="w-4 h-4 flex-shrink-0" />
                        <span className="whitespace-nowrap">Switch to Original</span>
                    </>
                ) : (
                    <>
                        <MoonIcon className="w-4 h-4 flex-shrink-0" />
                        <span className="whitespace-nowrap">Switch to Catppuccin</span>
                    </>
                )}
            </div>
        </button>
    );
}
