import { MouseEvent } from 'react';

interface ButtonProps {
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary';
}

export default function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  const className = {
    primary: 'bg-chinese-blue border border-chinese-blue text-white text-sm text-regular',
  };

  return (
    <button onClick={onClick} className={`px-2.5 py-1 rounded-md hover:opacity-80 ${className[variant]}`}>
      {label}
    </button>
  );
}
