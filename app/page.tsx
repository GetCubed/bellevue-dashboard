import BellevueLogo from '@/app/ui/bellevue-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Page () {
	return (
		<main className="flex min-h-screen flex-col p-6">
			<div className="flex h-20 shrink-0 items-end rounded-lg bg-blue p-4 md:h-52">
				<BellevueLogo className='text-base0'/>
			</div>
			<div className="mt-4 flex grow flex-col md:flex-row">

				{/* login side */}
				 <div className="flex flex-col justify-center rounded-lg bg-mantle px-6 py-10 md:w-2/5 md:px-20">
					<p className="text-lg antialiased md:text-xl ">
						<strong>Your dashboard</strong>
					</p>
					<p className="mb-2 text-lg antialiased md:text-xl ">
            for managing invoices, customers, and payments.
					</p>
					<Link
						href="/login"
						className="flex items-center gap-5 self-start rounded-lg bg-blue px-6 py-3 text-sm font-medium text-base0 transition-colors hover:bg-lavender md:text-base0">
						<span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
					</Link>
				</div>
				{/* image side */}
				<div className="relative flex flex-auto md:-ml-8">
					<Image
						objectFit='contain'
						src="/svg/opengraph-image.svg"
						alt="Open Graph Image"
						// height={315}
						// width={620}
						fill
					/>
				</div>
			</div>
		</main >
	);
}
