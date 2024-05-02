import { createBrowserRouter, Navigate } from "react-router-dom";
import AppCore from "./features/core/Core";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/core" />,
  },
  {
    path: "/core",
    element: <AppCore />,
  },
]);
