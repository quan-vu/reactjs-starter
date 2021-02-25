import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const SandwichesView = lazy(() => import("./views/SandwichesView"));
const TacosView = lazy(() => import("./views/TacosView"));
const TacosBusView = lazy(() => import("./views/TacosBusView"));
const TacosCartView = lazy(() => import("./views/TacosCartView"));

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
  {
    path: "/sandwiches",
    name: "Sandwiches",
    component: SandwichesView
  },
  {
    path: "/tacos",
    name: "Tacos",
    component: TacosView,
    routes: [
      {
        path: "/tacos/bus",
        component: TacosBusView
      },
      {
        path: "/tacos/cart",
        component: TacosCartView
      }
    ]
  }
];

export default function RouteConfigExample() {
  return (
    <Router>
      <div>
        <ul>
          {/* <li>
            <Link to="/tacos">Tacos</Link>
          </li> 
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
          */}
          {routes.map((route, i) => (
            <li key={i}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

