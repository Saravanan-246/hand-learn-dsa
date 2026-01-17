import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Welcome from "../pages/Welcome";
import Topics from "../pages/Topics";
import Questions from "../pages/Questions";
import Practice from "../pages/Practice";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "topics",
        element: <Topics />,
      },
      {
        path: "questions/:topic",
        element: <Questions />,
      },
      {
        path: "practice/:topic/:id",
        element: <Practice />,
      },
      {
        path: "*",               // 🔥 Handles unknown routes
        element: <NotFound />,
      },
    ],
  },
]);
