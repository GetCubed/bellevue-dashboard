'use client';

import { useTheme } from '@/app/contexts/theme-context';
import { ReactNode } from 'react';
import clsx from 'clsx';

export default function ThemedWrapper({ children }: { children: ReactNode }) {
    const { theme } = useTheme();

    return (
        <div className={clsx(
            'min-h-screen',
            {
                'bg-ctp-base text-ctp-text': theme === 'catppuccin',
                'bg-white text-gray-900': theme === 'original',
            }
        )}>
            {children}
        </div>
    );
}
