import * as React from 'react';
import { cn } from '@/lib/utils';

export function Button({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center justify-center',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
