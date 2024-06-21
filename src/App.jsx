import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import CityDetailsPage from "./pages/CityDetailsPage";
import { useEffect } from "react";
import { useGlobalDispatch } from "./providers/GlobalState";
import { setupInterceptors } from "./utils/apiHelper";

const App = () => {

  const dispatch = useGlobalDispatch();

  useEffect(() => {
    setupInterceptors(dispatch);
  }, [dispatch]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/city/:id"
          element={<CityDetailsPage/>}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
