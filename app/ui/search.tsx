'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search ({ placeholder }: { placeholder: string }) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((term) => {
		console.log(`Searching... ${term}`);

		const params = new URLSearchParams(searchParams);
		params.set('page', '1');
		if (term) {
			params.set('query', term);
		} else {
			params.delete('query');
		}
		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return (
		<div className="relative flex flex-1 shrink-0">
			<label htmlFor="search"
				className="sr-only">
        Search
			</label>

			<MagnifyingGlassIcon className="peer-focus: absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-subtext0" />

			<input
				className="peer block w-full rounded-md border border-overlay0 bg-surface2 py-[9px] pl-10 text-sm text-text outline-2 placeholder:text-subtext0"
				placeholder={placeholder}
				onChange={(e) => {
					handleSearch(e.target.value);
				}}
				defaultValue={searchParams.get('query')?.toString()}/>

		</div>
	);
}
