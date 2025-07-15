import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';

export function CreateInvoice () {
	return (
		<Link
			href="/dashboard/invoices/create"
			className="flex h-10 items-center rounded-lg bg-blue px-4 text-sm font-medium text-base0 transition-colors hover:bg-lavender focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue">
			<span className="hidden md:block">Create Invoice</span>{' '}
			<PlusIcon className="h-5 md:ml-4" />
		</Link>
	);
}

export function UpdateInvoice ({ id }: { id: string }) {
	return (
		<Link
			href={`/dashboard/invoices/${id}/edit`}
			className="rounded-md border border-yellow bg-yellow p-2 text-overlay0 hover:border-base0 hover:bg-peach hover:text-base0">
			<PencilIcon className="w-5" />
		</Link>
	);
}

export function DeleteInvoice ({ id }: { id: string }) {
	const deleteInvoiceWithId = deleteInvoice.bind(null, id);

	return (
		<form action={deleteInvoiceWithId}>
			<button type="submit"
				className="rounded-md border border-pink bg-pink p-2 text-overlay0 hover:border-base0 hover:bg-red hover:text-base0">
				<span className="sr-only">Delete</span>
				<TrashIcon className="w-5" />
			</button>
		</form>
	);
}
