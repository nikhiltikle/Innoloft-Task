import LocationIcon from 'icons/Location';
import { InnoloftLogo } from 'constants/images';
import profileImage from '../../assets/images/profile_1.svg';

export default function OfferedBy() {
  return (
    <div className="p-5 flex flex-col gap-2.5 flex-grow">
      <p className="text-charcoal font-semibold text-base">Offered By</p>
      <img src={InnoloftLogo} alt="Innoloft" width="200px" className="mt-5" />

      <div className="flex gap-2.5 items-center mb-2.5">
        <img className="rounded-full h-15 w-15" src={profileImage} />

        <div className="flex flex-col gap-1">
          <p className="text-auro-metal-saurus text-sm font-semibold">Sven Pietsch</p>
          <p className="text-auro-metal-saurus text-sm">Innoloft GmbH</p>
        </div>
      </div>

      <div className="flex gap-1 text-auro-metal-saurus mt-2.5">
        <LocationIcon />
        <p className="text-auro-metal-saurus text-sm">Jülicher Straße 72a, 52070 Aachen, Germany</p>
      </div>

      <iframe
        src="https://maps.google.com/maps?q=Jülicher Straße 72a&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        width={'100%'}
        height={'200px'}
      />
    </div>
  );
}