interface ButtonProps {
  label: string;

  variant?: 'primary';
}

export default function Button({ label, variant = 'primary' }: ButtonProps) {
  const className = {
    primary: 'bg-chinese-blue border border-chinese-blue text-white text-sm text-regular',
  };

  return <button className={`px-2.5 py-1 rounded-md hover:opacity-80 ${className[variant]}`}>{label}</button>;
}
