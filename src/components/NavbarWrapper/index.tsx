import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

export default function NavbarWrapper() {
  return (
    <>
      <Header />
      <div className="bg-ghost-white min-h-[calc(100svh-56px)]">
        <div className="container mx-auto pt-5">
          <Outlet />
        </div>
      </div>
    </>
  );
}
