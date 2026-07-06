import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export default function Button({ children, variant='primary', ...props }: Props) {
  const styles = {
    primary: 'bg-black text-white',
    secondary: 'bg-white text-black border border-neutral-200'
  };

  return (
    <button
      {...props}
      className={`rounded-full px-6 py-3 font-medium transition-all duration-300 hover:scale-[1.02] ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
