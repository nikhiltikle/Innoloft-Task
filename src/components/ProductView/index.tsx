import Breadcrumb from 'components/Breadcrumb';
import Button from 'components/Button';
import OfferDetails from 'components/OfferDetails';
import ProductMainSection from 'components/ProductMainSection';
import ShowVideo from 'components/ShowVideo';
import UserNavbar from 'components/UserNavbar';
import { useNavigate } from 'react-router-dom';

export default function ProductView() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-8">
      <UserNavbar />

      <div className="flex flex-col gap-5 grow">
        <div className="flex justify-between">
          <Breadcrumb />
          <Button label="Edit" onClick={() => navigate('/product/edit')} />
        </div>

        <ProductMainSection />
        <ShowVideo />
        <OfferDetails />
      </div>
    </div>
  );
}
