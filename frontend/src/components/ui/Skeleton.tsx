import React from 'react';
import { cn } from '@/lib/utils';

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn('animate-pulse bg-gray-200 rounded-md', className)} />;
}

export function RecipeCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
      <Skeleton className="w-full aspect-[4/3]" />
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4 rounded-full" />
          <Skeleton className="h-6 w-3/4 rounded" />
          <Skeleton className="h-4 w-full rounded" />
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <Skeleton className="h-4 w-1/3 rounded" />
          <Skeleton className="h-4 w-1/4 rounded-full" />
        </div>
      </div>
    </div>
  );
}
