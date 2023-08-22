import { Address, User } from 'common/interfaces/user';
import OfferedBy from 'components/OfferedBy';
import RibbonIcon from 'icons/Ribbon';

interface ProductMainSectionProps {
  image: string;
  title: string;
  description: string;
  user: User;
  address: Address;
  companyName: string;
}

export default function ProductMainSection({
  image,
  title,
  description,
  address,
  user,
  companyName,
}: ProductMainSectionProps) {
  return (
    <div className="rounded-md gap-5 flex border border-platinum bg-white">
      <div className="relative rounded-tl-md rounded-bl-md flex flex-col w-[61%]">
        <div className="absolute top-0 start-0 rounded-tl-md rounded-br-md bg-white h-10 flex items-center gap-2.5">
          <div className="rounded-tl-md rounded-br-md bg-chinese-blue text-white flex justify-center items-center h-full w-10">
            <RibbonIcon />
          </div>

          <div className="mr-2.5 text-base font-semibold text-charcoal">Patent</div>
        </div>

        <img src={image} alt={title} className="w-full rounded-tl-md max-h-[300px]" />

        <div className="p-5">
          <p className="text-charcoal font-semibold text-base">{title}</p>
          <div className="text-auro-metal-saurus text-sm mt-2.5" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>

      <OfferedBy address={address} user={user} companyName={companyName} />
    </div>
  );
}
