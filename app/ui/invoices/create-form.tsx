'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
	CheckIcon,
	ClockIcon,
	CurrencyDollarIcon,
	UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice, State } from '@/app/lib/actions';

import { useActionState } from 'react';


export default function Form ({ customers }: { customers: CustomerField[] }) {
	const initialState: State = { message: null, errors: {} };
	const [state, formAction] = useActionState(createInvoice, initialState);

	return (
		<form action={formAction}>
			<div className="rounded-md bg-surface1 p-4 md:p-6">
				{/* Customer Name */}
				<div className="mb-4">
					<label htmlFor="customer"
						className="mb-2 block text-sm font-medium">
            Choose customer
					</label>
					<div className="relative">
						<select
							id="customer"
							name="customerId"
							className="peer block w-full cursor-pointer rounded-md border border-overlay0 py-2 pl-10 text-sm outline-2 placeholder:text-subtext0"
							defaultValue=""
							aria-describedby="customer-error">
							<option value=""
								disabled>
                Select a customer
							</option>
							{customers.map((customer) => (
								<option key={customer.id}
									value={customer.id}>
									{customer.name}
								</option>
							))}
						</select>
						<UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-subtext0" />
					</div>
					<div id="customer-error"
						aria-live="polite"
						aria-atomic="true">
						{state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
              	<p className="mt-2 text-sm text-red"
              		key={error}>
              		{error}
              	</p>
              ))}
					</div>
				</div>

				{/* Invoice Amount */}
				<div className="mb-4">
					<label htmlFor="amount"
						className="mb-2 block text-sm font-medium">
            Choose an amount
					</label>
					<div className="relative mt-2 rounded-md">
						<div className="relative">
							<input
								id="amount"
								name="amount"
								type="number"
								step="0.01"
								placeholder="Enter USD amount"
								className="peer block w-full rounded-md border border-overlay0 py-2 pl-10 text-sm outline-2 placeholder:text-subtext0"
								aria-describedby='ammount-error'/>
							<CurrencyDollarIcon className="peer-focus: pointer-events-none absolute left-3 top-1/2 size-[18px] -translate-y-1/2 text-subtext0" />
						</div>
						<div id="ammount-error"
							aria-live="polite"
							aria-atomic="true">
							{state.errors?.amount &&
                state.errors.amount.map((error: string) => (
                	<p className="mt-2 text-sm text-red"
                		key={error}>
                		{error}
                	</p>
                ))}
						</div>
					</div>
				</div>

				{/* Invoice Status */}
				<fieldset>
					<legend className="mb-2 block text-sm font-medium">
            Set the invoice status
					</legend>
					<div className="rounded-md border border-overlay0 bg-surface0 px-[14px] py-3">
						<div className="flex gap-4">
							<div className="flex items-center">
								<input
									id="pending"
									name="status"
									type="radio"
									value="pending"
									className="size-4 cursor-pointer border-base0 bg-base0 text-gray-600 focus:ring-2"
									aria-describedby='status-error'/>
								<label
									htmlFor="pending"
									className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-base0 px-3 py-1.5 text-xs font-medium text-gray-600">
                  Pending <ClockIcon className="size-4" />
								</label>
							</div>
							<div className="flex items-center">
								<input
									id="paid"
									name="status"
									type="radio"
									value="paid"
									className="size-4 cursor-pointer border-base0 bg-base0 text-gray-600 focus:ring-2"/>
								<label
									htmlFor="paid"
									className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green px-3 py-1.5 text-xs font-medium">
                  Paid <CheckIcon className="size-4" />
								</label>
							</div>
						</div>

					</div>
					<div id="status-error"
						aria-live="polite"
						aria-atomic="true">
						{state.errors?.status &&
              state.errors.status.map((error: string) => (
              	<p className="mt-2 text-sm text-red"
              		key={error}>
              		{error}
              	</p>
              ))}
					</div>
				</fieldset>
			</div>
			<div className="mt-6 flex justify-end gap-4">
				<Link
					href="/dashboard/invoices"
					className="flex h-10 items-center rounded-lg bg-base0 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
          Cancel
				</Link>
				<Button type="submit">Create Invoice</Button>
			</div>
		</form>
	);
}
