import { lazy } from "react";
import { RouteObject, useRoutes } from "react-router-dom";

const LayoutLogin = lazy(() => import("../layouts/DashboardLogin"));
const Login = lazy(() => import("../views/LoginView"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LayoutLogin />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
];

export const router = () => {
  return useRoutes(routes);
};
