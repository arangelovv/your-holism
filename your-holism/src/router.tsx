import { createBrowserRouter, Navigate } from "react-router-dom";
import AppCore from "./features/core/Core";
import AllStats from "./features/all-stats/all-stats";
import Journal from "./features/journal/journal";
import MonthlyStats from "./features/monthly-stats/monthly-stats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/core" />,
  },
  {
    path: "/core",
    element: <AppCore />,
    children: [
      {
        index: true,
        element: <Navigate to="journal" />,
      },
      { path: "journal", element: <Journal /> },
      { path: "monthly-stats", element: <MonthlyStats /> },
      { path: "all-time-stats", element: <AllStats /> },
    ],
  },
]);
