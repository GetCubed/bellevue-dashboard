'use client';

import ThemeToggle from '@/app/ui/theme-toggle';
import { useTheme } from '@/app/contexts/theme-context';
import clsx from 'clsx';

export default function Page() {
    const { theme } = useTheme();

    const cardClasses = clsx(
        'p-6 rounded-lg',
        {
            'bg-ctp-surface0 border border-ctp-surface1': theme === 'catppuccin',
            'bg-gray-50': theme === 'original',
        }
    );

    const headingClasses = clsx(
        'text-lg font-medium',
        {
            'text-ctp-text': theme === 'catppuccin',
            'text-gray-900': theme === 'original',
        }
    );

    const textClasses = clsx(
        'mt-2',
        {
            'text-ctp-subtext1': theme === 'catppuccin',
            'text-gray-600': theme === 'original',
        }
    );

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <ThemeToggle />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className={cardClasses}>
                    <h3 className={headingClasses}>Sample Card 1</h3>
                    <p className={textClasses}>This is some sample content to show the theme difference.</p>
                </div>
                <div className={cardClasses}>
                    <h3 className={headingClasses}>Sample Card 2</h3>
                    <p className={textClasses}>Toggle the theme to see the beautiful Catppuccin colors!</p>
                </div>
                <div className={cardClasses}>
                    <h3 className={headingClasses}>Sample Card 3</h3>
                    <p className={textClasses}>The navigation, layout, and cards will all change colors!</p>
                </div>
                <div className={cardClasses}>
                    <h3 className={headingClasses}>Sample Card 4</h3>
                    <p className={textClasses}>Enjoy comparing the themes!</p>
                </div>
            </div>
        </div>
    );
}