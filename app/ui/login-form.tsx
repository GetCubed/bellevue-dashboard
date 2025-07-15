'use client';

import {
	AtSymbolIcon,
	KeyIcon,
	ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function LoginForm () {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
	const [errorMessage, formAction, isPending] = useActionState(
		authenticate,
		undefined,
	);

	return (
		<form
			action={formAction}
			className="space-y-3">
			<div className="flex-1 rounded-lg bg-surface0 px-6 pb-4 pt-8">
				<h1 className="mb-3 text-2xl">
          Please log in to continue.
				</h1>
				<div className="flex rounded-md bg-base0 p-2 text-sm">
					Email: user@nextmail.com
					<br />
					Password: 123456
				</div>
				<div className="w-full">
					<div>
						<label
							className="mb-3 mt-5 block text-xs font-medium text-text"
							htmlFor="email">
              Email
						</label>
						<div className="relative">
							<input
								className="peer block w-full rounded-md border border-overlay1 bg-surface2 py-[9px] pl-10 text-sm text-text outline-2  placeholder:text-subtext0"
								id="email"
								type="email"
								name="email"
								placeholder="Enter your email address"
								required/>
							<AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-subtext0 peer-focus:text-text" />
						</div>
					</div>
					<div className="mt-4">
						<label
							className="mb-3 mt-5 block text-xs font-medium text-text"
							htmlFor="password">
              Password
						</label>
						<div className="relative">
							<input
								className="peer block w-full rounded-md border border-overlay1 bg-surface2 py-[9px] pl-10 text-sm text-text outline-2 placeholder:text-subtext0"
								id="password"
								type="password"
								name="password"
								placeholder="Enter password"
								required
								minLength={6}/>
							<KeyIcon className="pointer-events-none absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-subtext0 peer-focus:text-text" />
						</div>
					</div>
				</div>
				<input type="hidden"
					name="redirectTo"
					value={callbackUrl} />
				<Button className="mt-4 w-full bg-blue text-surface0 hover:bg-lavender"
					aria-disabled={isPending}>
          Log in <ArrowRightIcon className="ml-auto size-5" />
				</Button>
				<div
					className="flex h-8 items-end space-x-1"
					aria-live="polite"
					aria-atomic="true">
					{errorMessage && (
						<>
							<ExclamationCircleIcon className="size-5 text-red" />
							<p className="text-sm text-red">{errorMessage}</p>
						</>
					)}
				</div>
			</div>
		</form>
	);
}