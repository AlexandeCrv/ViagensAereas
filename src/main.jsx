import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

import Profile from "./Routes/Profile.jsx";
import { Home } from "./Routes/Home.jsx";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/ViagensAereas",
        element: <Home />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
