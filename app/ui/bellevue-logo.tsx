import { RectangleGroupIcon } from '@heroicons/react/24/outline';
import { cn } from '@/app/lib/cn';

export default function BellevueLogo ({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-row items-center mb-2", className)}>
      <RectangleGroupIcon className="size-12 rotate-[5deg]" />
      <p className="ml-2 text-[44px]">Bellevue</p>
    </div>
  );
}
