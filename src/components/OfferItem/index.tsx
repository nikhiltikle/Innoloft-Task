import Chip from 'components/Chip';
import React from 'react';

interface OfferItemProps {
  icon: React.ReactNode;
  label: string;
  values: string[];
}

export default function OfferItem({ icon, label, values }: OfferItemProps) {
  return (
    <div className="flex gap-2 text-cadet-grey items-start grow">
      {icon}

      <div className="flex flex-col gap-2.5 ">
        <p className="text-base text-auro-metal-saurus">{label}</p>
        <div className="flex gap-1 flex-wrap">{values?.map(value => <Chip key={value} label={value} />)}</div>
      </div>
    </div>
  );
}
