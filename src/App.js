import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Root";
import HomePage, { loader as mainLoader } from "./components/Home/HomePage";
import Supplementary, {
  loader as supplementaryLoader,
} from "./components/Supplementary/Supplementary";
import MealRoot from "./components/MealRoot";
import Error from "./components/Error";
import MainCourseRice, {
  loader as SupplementaryMealLoader,
} from "./components/Home/MainCourseRice";
import {action} from './components/Cart/Cart'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      action: action,

      children: [
        {
          path: "/",
          element: <MealRoot />,
          children: [
            {
              path: "/",
              element: <HomePage />,
              loader: mainLoader,
            },

            {
              path: "/supplement",
              element: <Supplementary />,
              loader: supplementaryLoader,
            },
            {
              path: "/rice",
              element: <MainCourseRice />,
              loader: SupplementaryMealLoader,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
