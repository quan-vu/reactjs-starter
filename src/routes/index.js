import React, { Suspense, lazy } from "react";

// Lazy load component
const DashboardPage = lazy(() => import('src/modules/DashboardPage'));
const FrontPage = lazy(() => import('src/modules/FrontPage'));
const BuilderPage = lazy(() => import("src/modules/BuilderPage"));

// const SandwichesView = lazy(() => import("../views/SandwichesView"));
// const TacosView = lazy(() => import("../views/TacosView"));
// const TacosBusView = lazy(() => import("../views/TacosBusView"));
// const TacosCartView = lazy(() => import("../views/TacosCartView"));
// const TopicsView = lazy(() => import("../views/TopicsView"));
// const HomeView = lazy(() => import("../views/HomeView"));

// const SamplePage = lazy(() => import("../pages/SamplePage"));

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
  // Front routes
  {
    path: "/",
    name: "Home",
    key: "FRONT",
    exact: true,
    layout: true,
    component: FrontPage
  },
  // Dashboard route
  {
    path: "/admin",
    name: "Dashboard",
    key: "ADMIN_DASHBOARD",
    exact: true,
    layout: true,
    component: DashboardPage
  },
  {
    path: "/admin/builder",
    name: "Builder",
    key: "ADMIN_BUILDER",
    exact: true,
    layout: true,
    component: BuilderPage,
    routes: [],
  },
  // {
  //   path: "/topics",
  //   name: "Topics",
  //   key: "TOPICS",
  //   exact: false,
  //   layout: true,
  //   component: TopicsView,
  // },
  // {
  //   path: "/sandwiches",
  //   name: "Sandwiches",
  //   key: "SANDWICHES",
  //   exact: true,
  //   layout: true,
  //   component: SandwichesView
  // },
  // {
  //   path: "/tacos",
  //   name: "Tacos (demo nested static routes)",
  //   key: "TACOS",
  //   exact: false,
  //   layout: true,
  //   component: TacosView,
  //   routes: [
  //     {
  //       path: "/tacos/bus",
  //       name: "Bus",
  //       key: "TACOS_BUS",
  //       component: TacosBusView
  //     },
  //     {
  //       path: "/tacos/cart",
  //       name: "Cart",
  //       key: "TACOS_CART",
  //       component: TacosCartView
  //     }
  //   ]
  // },
  // {
  //   path: "/samples",
  //   name: "Samples",
  //   key: "SAMPLES",
  //   exact: false,
  //   layout: true,
  //   component: SamplePage,
  // },  
];

export default routes;