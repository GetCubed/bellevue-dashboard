import { RectangleGroupIcon } from '@heroicons/react/24/outline';
import { cn } from '@/app/lib/cn';

export default function BellevueLogo ({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-row items-center leading-none", className)}>
      <RectangleGroupIcon className="h-12 w-12 rotate-[0deg]" />
      <p className="text-[44px] ml-2">Bellevue</p>
    </div>
  );
}
