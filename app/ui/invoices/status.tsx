import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus ({ status }: { status: string }) {
	return (
		<span
			className={clsx(
				'inline-flex items-center rounded-full px-2 py-1 text-xs text-base0',
				{
					'bg-red': status === 'pending',
					'bg-green': status === 'paid',
				},
			)}>
			{status === 'pending' ? (
				<>
          Pending
					<ClockIcon className="ml-1 w-4" />
				</>
			) : null}
			{status === 'paid' ? (
				<>
          Paid
					<CheckIcon className="ml-1 w-4" />
				</>
			) : null}
		</span>
	);
}
