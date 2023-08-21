import NavbarWrapper from 'components/NavbarWrapper';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
    children: [
      {
        path: '/',
        element: <div>Home page</div>,
      },
      {
        path: '/product',
        element: <div>View Product page</div>,
      },
      {
        path: '/product/edit',
        element: <div>Edit Product page</div>,
      },
    ],
  },
]);
