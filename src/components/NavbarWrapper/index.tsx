import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

export default function NavbarWrapper() {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-5">
        <Outlet />
      </div>
    </>
  );
}
