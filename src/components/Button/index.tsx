import { MouseEvent } from 'react';

interface ButtonProps {
  label: string | React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary';
  type?: 'submit';
}

export default function Button({ label, onClick, type, variant = 'primary', ...props }: ButtonProps) {
  const className = {
    primary: 'bg-chinese-blue border border-chinese-blue text-white text-sm text-regular',
    secondary: 'bg-platinum border border-ghost-white text-sm text-regular text-chinese-blue',
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-2.5 py-1 rounded-md hover:opacity-80 ${className[variant]}`}
      {...props}
    >
      {label}
    </button>
  );
}
