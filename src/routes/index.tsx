import { lazy } from "react";
import { RouteObject, useRoutes } from "react-router-dom";

const LayoutLogin = lazy(() => import("../layouts/DashboardLogin"));
const LayoutDashboard = lazy(() => import("../layouts/Dashboard"));
const Login = lazy(() => import("../views/Login/LoginView"));
const Home = lazy(() => import("../views/Home/HomeView"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LayoutLogin />,
    children: [
      {
        path: "/",
        element: <Login />
      }
    ]
  },
  {
    path: "home",
    element: <LayoutDashboard />,
    children: [
      {
        path: "home",
        element: <Home />
      }
    ]
  }
];

export const router = () => {
  return useRoutes(routes);
};
