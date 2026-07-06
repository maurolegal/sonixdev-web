import { ReactNode } from 'react';

type HeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
};

export default function Heading({ eyebrow, title, description, align='left' }: HeadingProps) {
  const cls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl ${cls}`}>
      {eyebrow && <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">{eyebrow}</div>}
      <h2 className="text-4xl font-bold tracking-tight text-neutral-950 md:text-5xl">{title}</h2>
      {description && <p className="mt-6 text-lg leading-8 text-neutral-600">{description}</p>}
    </div>
  );
}
