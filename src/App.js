import { ProductsProvider } from './Context/ProductsContext';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Details } from './Details';
import { Header } from './Header';
import { Filters } from './Filters';
import { Items } from './Items';

export const URL = 'https://cdn.mybestbrands.de';
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/details/:itemID',
        element: <Details />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>
    </div>
  );
}
function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export function Home() {
  return (
    <>
      <Filters />
      <Items />
    </>
  );
}

export default App;
