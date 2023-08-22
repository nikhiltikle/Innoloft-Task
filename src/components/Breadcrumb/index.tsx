import BreadcrumbRightIcon from 'icons/BreadcrumbRight';
import HomeIcon from 'icons/Home';

export default function Breadcrumb() {
  return (
    <div className="flex gap-2.5 items-center text-charcoal">
      <HomeIcon />

      <div className="flex gap-1 items-center text-cadet-grey">
        <BreadcrumbRightIcon />

        <label className="text-auro-metal-saurus text-sm">Offers</label>
      </div>

      <div className="flex gap-1 items-center text-cadet-grey">
        <BreadcrumbRightIcon />

        <label className="text-auro-metal-saurus text-sm font-semibold">
          Intelligent Finite Elements in Structural mechanics
        </label>
      </div>
    </div>
  );
}
