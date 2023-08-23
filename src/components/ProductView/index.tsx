import Breadcrumb from 'components/Breadcrumb';
import Button from 'components/Button';
import OfferDetails from 'components/OfferDetails';
import ProductMainSection from 'components/ProductMainSection';
import ShowVideo from 'components/ShowVideo';
import UserNavbar from 'components/UserNavbar';
import { useNavigate } from 'react-router-dom';
import { selectProduct, fetchProduct } from 'redux/slices/product';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useEffect } from 'react';

export default function ProductView() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProduct);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div className="flex gap-8">
      <UserNavbar />

      <div className="flex flex-col gap-5 grow">
        <div className="flex justify-between flex-wrap gap-5">
          <Breadcrumb title={product.name} />
          <Button label="Edit" onClick={() => navigate('/product/edit')} />
        </div>

        <ProductMainSection
          image={product.picture}
          description={product.description}
          title={product.name}
          address={product.company.address}
          user={product.user}
          companyName={product.company.name}
        />
        <ShowVideo videoLink={product.video} />
        <OfferDetails
          businessModels={product.businessModels.map(model => model.name)}
          cost={product.investmentEffort}
          technology={product.categories.map(category => category.name)}
          trl={product.trl.name}
        />
      </div>
    </div>
  );
}
