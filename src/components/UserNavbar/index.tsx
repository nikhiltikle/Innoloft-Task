import HomeIcon from 'icons/Home';
import profileImage from '../../assets/images/profile_1.svg';
import MenuItem from 'components/MenuItem';
import GroupIcon from 'icons/Group';
import OrganizationIcon from 'icons/Organization';
import ArrowIcon from 'icons/Arrow';

export default function UserNavbar() {
  return (
    <div className="flex flex-col gap-2.5 min-w-[280px]">
      <div className="flex gap-4 items-center">
        <img className="h-16 w-16 rounded-full" src={profileImage} alt="User 1" />

        <div className="grow">
          <p className="text-charcoal font-semibold text-lg">Sven Pietsch</p>
          <p className="text-charcoal text-sm">Innoloft GmbH</p>
        </div>
      </div>

      <MenuItem startIcon={<HomeIcon />} label="Home" />
      <MenuItem startIcon={<GroupIcon />} label="Members" />
      <MenuItem startIcon={<OrganizationIcon />} label="Organizations" endIcon={<ArrowIcon />} />
    </div>
  );
}
