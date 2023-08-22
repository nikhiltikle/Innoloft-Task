import OfferItem from 'components/OfferItem';
import ClockIcon from 'icons/Clock';
import CostPotIcon from 'icons/CostPot';
import SettingIcon from 'icons/Setting';
import StrategyIcon from 'icons/Strategy';

interface OfferDetailsProps {
  businessModels: string[];
  technology: string[];
  trl: string;
  cost: string;
}

export default function OfferDetails({ businessModels, cost, technology, trl }: OfferDetailsProps) {
  return (
    <div className="px-5 py-8 rounded-md gap-5 flex flex-col border border-platinum bg-white">
      <p className="text-charcoal text-base font-semibold">Offer details</p>

      <div className="grid grid-cols-2 gap-x-10 gap-y-5">
        <OfferItem icon={<SettingIcon />} label="Technology" values={technology} />
        <OfferItem icon={<StrategyIcon />} label="Business Model" values={businessModels} />
        <OfferItem icon={<ClockIcon />} label="TRL" values={[trl]} />
        <OfferItem icon={<CostPotIcon />} label="Costs" values={[cost]} />
      </div>
    </div>
  );
}
