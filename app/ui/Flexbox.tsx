import React, { ReactNode, CSSProperties } from 'react';
import clsx from 'clsx';

//TODO: slowly implement this reusable flexbox component app wide

interface FlexboxProps {
  children?: ReactNode;
  className?: string;
  direction?: 'row' | 'column';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: string;
  style?: CSSProperties;
}

/**
 * Reusable Flexbox component for layout.
 */


const directionMap = {
	row: 'flex-row',
	column: 'flex-col',
};
const justifyMap = {
	'flex-start': 'justify-start',
	'flex-end': 'justify-end',
	center: 'justify-center',
	'space-between': 'justify-between',
	'space-around': 'justify-around',
};
const alignMap = {
	'flex-start': 'items-start',
	'flex-end': 'items-end',
	center: 'items-center',
	stretch: 'items-stretch',
	baseline: 'items-baseline',
};
const wrapMap = {
	nowrap: 'flex-nowrap',
	wrap: 'flex-wrap', 'wrap-reverse': 'flex-wrap-reverse',
};

const gapClass = (gap: string) => {
	if (gap === '0') return '';
	if (gap.endsWith('px')) {
		const px = gap.replace('px', '');
		return `gap-[${px}px]`;
	}
	if (gap.endsWith('rem')) {
		const rem = gap.replace('rem', '');
		return `gap-[${rem}rem]`;
	}
	return `gap-${gap}`;
};

export default function Flexbox ({
	children,
	className = '',
	direction = 'row',
	justifyContent = 'flex-start',
	alignItems = 'stretch',
	wrap = 'nowrap',
	gap = '0',
}: FlexboxProps) {
	const classes = clsx(
		'flex',
		directionMap[direction],
		justifyMap[justifyContent],
		alignMap[alignItems],
		wrapMap[wrap],
		gapClass(gap),
		className
	);

	return (
		<div className={classes}>
			{children}
		</div>
	);
};
