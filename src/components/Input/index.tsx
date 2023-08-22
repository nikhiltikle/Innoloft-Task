import { ChangeEvent } from 'react';

interface InputProps {
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ name, onChange, placeholder, value }: InputProps) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="rounded-md border-light-silver border px-2.5 py-1 text-charcoal text-base font-semibold placeholder:text-auro-metal-saurus placeholder:text-sm placeholder:font-normal w-full outline-0"
    />
  );
}
