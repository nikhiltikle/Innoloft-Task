import { MouseEvent } from 'react';

interface ButtonProps {
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'text';
  type?: 'submit';
  icon?: React.ReactNode;
}

export default function Button({ label, onClick, type, icon, variant = 'primary', ...props }: ButtonProps) {
  const className = {
    primary: 'bg-chinese-blue border border-chinese-blue text-white text-sm text-normal',
    secondary: 'bg-platinum border border-ghost-white text-sm text-normal text-chinese-blue',
    text: 'bg-transparent text-sm text-normal text-auro-metal-saurus',
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-2.5 py-1 rounded-md hover:opacity-80 flex items-center h-[34px] ${className[variant]}`}
      {...props}
    >
      {icon && <span className="mr-1.5 inline-block">{icon}</span>}

      {label}
    </button>
  );
}
