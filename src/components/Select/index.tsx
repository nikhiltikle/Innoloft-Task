import useOutsideClick from 'hooks/useClickOutside';
import { useEffect, useRef, useState } from 'react';

interface Option {
  name: string;
  id: number;
}

interface SelectProps {
  options: Option[];
  value?: Option;
  onChange?: (value: Option) => void;
}

export default function Select({ options, value, onChange }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Option | undefined>(value);

  const selectRef = useRef(null);

  useOutsideClick(selectRef, () => setOpen(false));

  const handleOptionSelect = (value: Option) => {
    setSelectedValue(value);
    onChange && onChange(value);
    setOpen(false);
  };

  useEffect(() => {
    if (selectedValue !== value) {
      setSelectedValue(value);
    }
  }, [value]);

  return (
    <div className="relative w-full" ref={selectRef}>
      <button
        type="button"
        className="relative w-full cursor-pointer rounded-md border-light-silver border bg-white px-2.5 py-1 text-charcoal text-base font-semibold min-h-[34px]"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        onClick={() => setOpen(true)}
      >
        <span className="flex items-center">
          <span className="block truncate">{selectedValue?.name}</span>
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {open && (
        <ul
          className="absolute z-10 mt-2 px-2 py-1 max-h-56 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          {options?.map(option => {
            const isOptionSelected = selectedValue?.name === option.name;

            return (
              <li
                key={option.id}
                className={`text-gray-900 relative cursor-pointer select-none py-2 px-2.5 rounded-md my-1  ${
                  isOptionSelected ? 'bg-chinese-blue text-white' : 'hover:bg-platinum'
                }`}
                role="option"
                onClick={() => handleOptionSelect(option)}
              >
                <div className="flex items-center">
                  <span className={`font-normal block truncate ${isOptionSelected && 'text-white'}`}>
                    {option.name}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
