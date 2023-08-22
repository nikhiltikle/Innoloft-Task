import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputProps<T extends FieldValues> {
  name: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  required?: boolean;
  error?: boolean;
}

export default function Input<T extends FieldValues>({ name, placeholder, register, required, error }: InputProps<T>) {
  return (
    <>
      <input
        placeholder={placeholder}
        className="rounded-md border-light-silver border px-2.5 py-1 text-charcoal text-base font-semibold placeholder:text-auro-metal-saurus placeholder:text-sm placeholder:font-normal w-full outline-0"
        {...register(name, { required })}
      />
      {error && <span>Required field</span>}
    </>
  );
}
