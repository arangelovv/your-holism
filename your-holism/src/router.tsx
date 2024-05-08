import { createBrowserRouter, Navigate } from "react-router-dom";
import AppCore from "./features/core/CorePage";
import JournalPage from "./features/$journal/JournalPage";
import MonthlyStatsPage from "./features/$monthly/MonthlyStatsPage";
import AllStatsPage from "./features/$overall/AllStatsPage";

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
      { path: "journal", element: <JournalPage /> },
      { path: "monthly", element: <MonthlyStatsPage /> },
      { path: "overall", element: <AllStatsPage /> },
    ],
  },
]);
