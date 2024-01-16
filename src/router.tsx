import { RootRoute, Route, Router } from "@tanstack/react-router";
import RootPage from "./pages/RootPage";
import AuthPage from "./pages/AuthPage";
import LoginPage from "./pages/LoginPage";

const rootRoute = new RootRoute();

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: RootPage,
});

const authRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "auth",
  component: AuthPage,
});

const loginPage = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const routeTree = rootRoute.addChildren([homeRoute, authRoute, loginPage]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
