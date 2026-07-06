import { ReactNode } from 'react';

type BadgeProps={children:ReactNode};

export default function Badge({children}:BadgeProps){
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-700 backdrop-blur-sm">
      {children}
    </span>
  );
}
