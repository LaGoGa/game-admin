import { RootRoute, Route, Router } from "@tanstack/react-router";
import RootPage from "./pages/RootPage";
import AuthPage from "./pages/AuthPage";

const rootRoute = new RootRoute();

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: RootPage,
});

const authRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "authentication",
  component: AuthPage,
});

const routeTree = rootRoute.addChildren([homeRoute, authRoute]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
