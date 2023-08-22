import OfferItem from 'components/OfferItem';
import ClockIcon from 'icons/Clock';
import CostPotIcon from 'icons/CostPot';
import SettingIcon from 'icons/Setting';
import StrategyIcon from 'icons/Strategy';

export default function OfferDetails() {
  return (
    <div className="px-5 py-8 rounded-md gap-5 flex flex-col border border-platinum bg-white">
      <p className="text-charcoal text-base font-semibold">Offer details</p>

      <div className="grid grid-cols-2 gap-x-10 gap-y-5">
        <OfferItem icon={<SettingIcon />} label="Technology" values={['Label 1', 'Label 2', 'Label 3']} />
        <OfferItem icon={<StrategyIcon />} label="Business Model" values={['Label 1', 'Label 2', 'Label 3']} />
        <OfferItem
          icon={<ClockIcon />}
          label="TRL"
          values={['TRL 9 – Actual system proven in operational environment']}
        />
        <OfferItem icon={<CostPotIcon />} label="Costs" values={['< 1000 €']} />
      </div>
    </div>
  );
}
