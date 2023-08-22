import Breadcrumb from 'components/Breadcrumb';
import Button from 'components/Button';
import OfferDetails from 'components/OfferDetails';
import ProductMainSection from 'components/ProductMainSection';
import ShowVideo from 'components/ShowVideo';
import UserNavbar from 'components/UserNavbar';

export default function ProductView() {
  return (
    <div className="flex gap-8">
      <UserNavbar />

      <div className="flex flex-col gap-5 grow">
        <div className="flex justify-between">
          <Breadcrumb />
          <Button label="Edit" />
        </div>

        <ProductMainSection />
        <ShowVideo />
        <OfferDetails />
      </div>
    </div>
  );
}
