import { Product } from 'common/interfaces/product';
import Button from 'components/Button';
import Input from 'components/Input';
import { FieldValues, Path, UseFormRegister, FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';

interface MultiInputFieldProps<T extends FieldValues> {
  fields: { id: number; name: string }[];
  onAddField: () => void;
  onRemoveField: (index: number) => void;
  name: keyof Product;
  register: UseFormRegister<T>;
  label: string;
  icon: React.ReactNode;
  errors?: Merge<FieldError, Merge<FieldError, FieldErrorsImpl<{ id: number; name: string }[]>>>;
}

export default function MultiInputField<T extends FieldValues>({
  name,
  label,
  icon,
  fields,
  errors,
  onAddField,
  onRemoveField,
  register,
}: MultiInputFieldProps<T>) {
  return (
    <div className="flex gap-2 text-cadet-grey items-start flex-grow">
      <label className="h-6 w-6">{icon}</label>

      <div className="flex flex-col gap-2.5 flex-grow">
        <div className="flex gap-2.5 justify-between mb-2.5 items-start flex-grow">
          <p className="text-base text-auro-metal-saurus">{label}</p>

          <Button label="Add" onClick={onAddField} />
        </div>

        {fields.map((field, index) => (
          <div key={`${index}-${field}`} className="flex gap-4 justify-between">
            <Input name={`${name}.${index}.name` as Path<T>} register={register} required error={!!errors?.[index]} />

            <Button label="Remove" type="button" variant="secondary" onClick={() => onRemoveField(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}
