import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "typeface-roboto";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hi",
    element: <div>hi!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
