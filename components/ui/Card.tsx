import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const baseStyles =
    'bg-white p-8 rounded-2xl border border-gray-200 transition-all duration-400';
  const hoverStyles = hover
    ? 'hover:-translate-y-2 hover:shadow-xl hover:border-indigo-600'
    : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}

