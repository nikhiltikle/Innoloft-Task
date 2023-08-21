import { InnoloftLogo } from 'constants/images';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="h-14 bg-white border-b shadow-sm shadow-chinese-blue border-chinese-blue">
      <div className="container mx-auto h-full">
        <div className="flex h-full items-center justify-between">
          <Link to="/">
            <img src={InnoloftLogo} alt="Innoloft" height={'26px'} width={'140px'} />
          </Link>

          <div className="flex gap-4 items-center">
            <Link to="/" className="text-chinese-blue text-base font-regular hover:opacity-80">
              Home
            </Link>
            <Link to="/product" className="text-chinese-blue text-base font-regular hover:opacity-80">
              Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
