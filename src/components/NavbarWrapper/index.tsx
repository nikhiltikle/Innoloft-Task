import Header from 'components/Header';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchThemeConfig } from 'redux/slices/themeConfig';
import { useAppDispatch } from 'redux/hooks';

export default function NavbarWrapper() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchThemeConfig());
  }, []);

  return (
    <>
      <Header />
      <div className="bg-ghost-white min-h-[calc(100svh-56px)]">
        <div className="container mx-auto py-5 max-xl:px-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}
