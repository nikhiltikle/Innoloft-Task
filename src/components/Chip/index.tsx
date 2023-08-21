interface ChipProps {
  label: string;
}

export default function Chip({ label }: ChipProps) {
  return (
    <div className="px-3.5 py-1 rounded-3xl bg-platinum mr-1">
      <label className="text-sm text-auro-metal-saurus">{label}</label>
    </div>
  );
}
