import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "typeface-roboto";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProjectPage } from "./components/ProjectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project/:project_name",
    element: <ProjectPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
