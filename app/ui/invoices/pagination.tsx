'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { generatePagination } from '@/app/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

function PaginationArrow ({
	href,
	direction,
	isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {
	const className = clsx(
		'flex size-10 items-center justify-center rounded-md border',
		{
			'pointer-events-none text-text': isDisabled,
			'hover:bg-base0': !isDisabled,
			'mr-2 md:mr-4': direction === 'left',
			'ml-2 md:ml-4': direction === 'right',
		},
	);

	const icon =
    direction === 'left' ? (
    	<ArrowLeftIcon className="w-4" />
    ) : (
    	<ArrowRightIcon className="w-4" />
    );

	return isDisabled ? (
		<div className={className}>{icon}</div>
	) : (
		<Link className={className}
			href={href}>
			{icon}
		</Link>
	);
}

function PaginationNumber ({
	href,
	page,
	position,
	isActive,
}: {
	href: string;
	page: number | string;
	position?: 'first' | 'last' | 'single' | 'middle';
	isActive?: boolean;
}) {
	const className = clsx(
		'flex size-10 items-center justify-center rounded-md border',
		{
			'bg-blue text-white': isActive,
			'text-text hover:bg-base0': !isActive,
			'first:ml-0': position === 'first',
			'last:mr-0': position === 'last',
			'middle:mx-1': position === 'middle',
		},
	);

	return (
		<Link className={className}
			href={href}>
			{page}
		</Link>
	);
}

export default function Pagination ({ totalPages }: { totalPages: number }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get('page')) || 1;

	const createPageURL = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};

	const allPages = generatePagination(currentPage, totalPages);

	return (
		<>
			<div className="inline-flex">
				<PaginationArrow
					direction="left"
					href={createPageURL(currentPage - 1)}
					isDisabled={currentPage <= 1}/>

				<div className="flex -space-x-px">
					{allPages.map((page, index) => {
						let position: 'first' | 'last' | 'single' | 'middle' | undefined;

						if (index === 0) position = 'first';
						if (index === allPages.length - 1) position = 'last';
						if (allPages.length === 1) position = 'single';
						if (page === '...') position = 'middle';

						return (
							<PaginationNumber
								key={`${page}-${index}`}
								href={createPageURL(page)}
								page={page}
								position={position}
								isActive={currentPage === page}/>
						);
					})}
				</div>

				<PaginationArrow
					direction="right"
					href={createPageURL(currentPage + 1)}
					isDisabled={currentPage >= totalPages}/>
			</div>
		</>
	)
}