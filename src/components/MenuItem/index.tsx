import React from 'react';

interface MenuItemProps {
  startIcon: React.ReactNode;
  label: string;
  endIcon?: React.ReactNode;
}

export default function MenuItem({ startIcon, label, endIcon }: MenuItemProps) {
  return (
    <div className="flex gap-3 p-2.5 justify-between items-center cursor-pointer hover:opacity-80">
      <div className="flex gap-3 text-charcoal text-base items-center">
        {startIcon}

        <p className="text-base">{label}</p>
      </div>

      {endIcon && endIcon}
    </div>
  );
}
