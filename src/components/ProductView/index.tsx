import OfferDetails from 'components/OfferDetails';
import ProductMainSection from 'components/ProductMainSection';
import ShowVideo from 'components/ShowVideo';
import UserNavbar from 'components/UserNavbar';

export default function ProductView() {
  return (
    <div className="flex gap-8">
      <UserNavbar />

      <div className="flex flex-col gap-5 grow">
        <ProductMainSection />
        <ShowVideo />
        <OfferDetails />
      </div>
    </div>
  );
}
