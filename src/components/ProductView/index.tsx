import OfferDetails from 'components/OfferDetails';
import ShowVideo from 'components/ShowVideo';
import UserNavbar from 'components/UserNavbar';

export default function ProductView() {
  return (
    <div className="flex gap-8">
      <UserNavbar />

      <div className="flex flex-col gap-5 grow">
        <ShowVideo />
        <OfferDetails />
      </div>
    </div>
  );
}
