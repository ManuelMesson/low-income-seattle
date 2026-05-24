import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/Home';
import { AboutPage } from '@/pages/About';
import { FoodBanksPage } from '@/pages/FoodBanks';
import { FreeMealsPage } from '@/pages/FreeMeals';
import { PublicShowersPage } from '@/pages/PublicShowers';
import { NotFoundPage } from '@/pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'food-banks', element: <FoodBanksPage /> },
      { path: 'free-meals', element: <FreeMealsPage /> },
      { path: 'public-showers', element: <PublicShowersPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
