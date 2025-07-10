import BellevueLogo from '@/app/ui/bellevue-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page () {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue p-4 md:h-52">
        <BellevueLogo className='text-base0'/>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-surface1 px-6 py-10 md:w-2/5 md:px-20">
          {/* Removed inter.className from the paragraphs */}
          <p className="antialiased text-xl md:text-3xl md:leading-normal">
            <strong>Bellevue Dash</strong>
          </p>
          <p className="antialiased text-xl md:text-3xl md:leading-normal">
            your dashboard for managing invoices, customers, and payments.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue px-6 py-3 text-sm font-medium text-base0 transition-colors hover:bg-lavender md:text-base0">
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        {/* <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"/>
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"/>
        </div> */}
      </div>
    </main >
  );
}
