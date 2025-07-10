import { RectangleGroupIcon } from '@heroicons/react/24/outline';
import { parkinsans } from '@/app/ui/fonts';

export default function BellevueLogo () {
  return (
    <div
      className={`${parkinsans.className} flex flex-row items-center leading-none text-white`}>
      <RectangleGroupIcon className="h-12 w-12 rotate-[0deg]" />
      <p className="text-[44px] ml-2">Bellevue</p>
    </div>
  );
}
