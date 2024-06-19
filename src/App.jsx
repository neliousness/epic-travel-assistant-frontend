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
import { searchCity } from "./utils/ApiHelper";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage searchCity={searchCity}/>} />
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
