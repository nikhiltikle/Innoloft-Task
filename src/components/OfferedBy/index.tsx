import LocationIcon from 'icons/Location';
import { InnoloftLogo } from 'constants/images';
import { Address, User } from 'common/interfaces/user';

interface OfferedByProps {
  user: User;
  address: Address;
  companyName: string;
}

export default function OfferedBy({ user, address, companyName }: OfferedByProps) {
  const formedAddress = `${address.street} ${address.house}, ${address.zipCode} ${address.city.name}, ${address.country.name}`;

  return (
    <div className="p-5 flex flex-col gap-2.5 flex-grow max-md:px-2.5 ">
      <p className="text-charcoal font-semibold text-base">Offered By</p>
      <img src={InnoloftLogo} alt="Innoloft" width="200px" className="mt-5" />

      <div className="flex gap-2.5 items-center mb-2.5">
        <img className="rounded-full h-16 w-16" src={user.profilePicture} />

        <div className="flex flex-col gap-1">
          <p className="text-auro-metal-saurus text-sm font-semibold">{`${user.firstName} ${user.lastName}`}</p>
          <p className="text-auro-metal-saurus text-sm">{companyName}</p>
        </div>
      </div>

      <div className="flex gap-1 text-auro-metal-saurus mt-2.5">
        <LocationIcon />
        <p className="text-auro-metal-saurus text-sm">{formedAddress}</p>
      </div>

      <iframe
        src={`https://maps.google.com/maps?q=${formedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        width={'100%'}
        height={'200px'}
      />
    </div>
  );
}
