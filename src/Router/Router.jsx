import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
  },
  {
    path: "/auth",
    element: <h2>This is Auth</h2>,
  },
  {
    path: "/news",
    element: <h2>This is news</h2>,
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
