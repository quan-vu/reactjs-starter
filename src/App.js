import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// By default, router "/" must be import, it can not use lazyload
import Layout from './shared/components/Layouts';

// Lazy load component
const SandwichesView = lazy(() => import("./views/SandwichesView"));
const TacosView = lazy(() => import("./views/TacosView"));
const TacosBusView = lazy(() => import("./views/TacosBusView"));
const TacosCartView = lazy(() => import("./views/TacosCartView"));
const HomeView = lazy(() => import("./views/HomeView"));

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
  {
    path: "/",
    name: "Home",
    key: "ROOT",
    exact: true,
    layout: true,
    component: HomeView
  },
  {
    path: "/sandwiches",
    name: "Sandwiches",
    key: "SANDWICHES",
    exact: true,
    layout: true,
    component: SandwichesView
  },
  {
    path: "/tacos",
    name: "Tacos",
    key: "TACOS",
    exact: true,
    layout: true,
    component: TacosView,
    routes: [
      {
        path: "/tacos/bus",
        key: "TACOS_BUS",
        exact: true,
        layout: true,
        component: TacosBusView
      },
      {
        path: "/tacos/cart",
        key: "TACOS_CART",
        exact: true,
        layout: true,
        component: TacosCartView
      }
    ]
  }
];

export default function RouteConfigExample() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route>
          <Layout>
            <ul>
              {routes.map((route) => (
                <li key={route.key}>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              ))}
            </ul>

            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {routes.map((route) => (
                  <RouteWithSubRoutes key={route.key} {...route} />
                ))}
              </Switch>
            </Suspense>
          </Layout>
        </Route>
      </Switch>
    </Suspense>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component 
          {...props} 
          layout={route.layout}
          routes={route.routes} 
        />
      )}
    />
  );
}

